## Paso a paso Visualización

Primero, importé distintas librerias de Python. Pandas para la manipulación de mis datos y la confección del índice de éxito. Io para las salidas de los datos. Importé plotly para la confección del gráfico de índice de éxito a través de los años. También importé files para poder subir el csv de mi dataframe.

import pandas as pd
import io
from google.colab import files
import plotly.express as px

Instalé también kaleido para poder exportar mi gráfico como png al final.

!pip install -U kaleido

Luego subí mi dataframe: base_limpia (2).csv y lo etiqueté como df.

uploaded = files.upload()
df = pd.read_csv(io.BytesIO(uploaded['base_limpia (2).csv']))

Después, normalicé las dos variables que irían dentro de mi índice (dividí el valor de la variable por su valor máximo en el dataframe), para poder obtener valores menores a uno y así poder ponderar de una manera correcta. El resultado lo etiqueté como win%_norm y valor_norm, respectivamente.

Luego cree el índice ponerando el valor de win%_norm y valor_norm, con porcentajes de 60% y 40&, respectivamente.

df['win%_norm'] = df['win%'] / df['win%'].max()
df['valor_norm'] = df['valor'] / df['valor'].max()
df['indice'] = df['win%_norm'] * 0.6 + df['valor_norm'] * 0.4

Luego, finalmente para gráficar este índice usé px.line de plotly para hacer un gráfico de líneas en el que el eje x fuese 'Year', el eje y fuese 'índice' y el color de las líneas fuesen los equipos analizados.

Usé fig.update_layout para modificar los títulos de los ejes, cambiándolo a 'Año' e 'Índice de éxito'

Usé fig.show para mostrar el resultado.

Finalmente exporté el gráfico como html, ya que se me dificultó la exportación como png.

html_path = "/content/visualizacion.html"
fig.write_html(html_path)

from google.colab import files
files.download(html_path)



# Entrega 2


##### Nombre: Mario Ortiz


### Proceso limpieza de datos


- #### Búsqueda de base de datos
Al intentar buscar una base de datos amplia la cual poder manipular, me topé con el obstáculo de que no existe alguna con acceso libre, por lo que dedidí elaborar una propia con datos que se pueden encontrar en la web.

- #### Elaboración base de datos
Extraje datos manualmente de bases de datos abiertas al público encontradas en la web, más específicamente en stats.nba.com y en Forbes. Para llegar al punto al que quería, me enfoqué en las dimensiones económicas de los equipos de la NBA (valoraciones de las franquicias, ingresos, etc.) y sus respectivos rendimientos deportivos (victorias,derrotas, porcentaje de victorias,ranking). Todos desde el 2023 hasta el 2018.

Al confeccionar la base de datos, aun así quede con conjuntos de datos incompletos, por lo que realicé una limpieza breve. El proceso fue el siguiente:

- #### Limpieza

Al ser una base de datos manufacturada personalmente, ya se encontraba en una posición favorable en cuanto a orden. Ordenada primeramente decrecientemente en cuanto a años y volaraciones de los equipos. Sin embargo, al elaborarla me di cuenta que habían algunas variables que había introducido inicialmente en las cuales no existía una disponibilidad de datos significativa para ser introducida.

###### Cargué Google Drive
from google.colab import drive
drive.mount('/content/drive')

###### Lo mismo con pandas
import pandas as pd

###### Abrí la base de datos que había manufacturado anteriormente
datos = pd.read_csv('/content/drive/MyDrive/economia_rendimientodeportivo.csv')

###### La imprimí para poder averiguar que era lo que necesitaba ser limpiado.

print(datos.head())
print(datos.info())
print(datos.describe())

###### Ocupé el comando display para poder verla de una manera mas organizada 
display(datos)

###### Finalmente eliminé las columnas que contenían una gran cantidad de datos imposibles de recaudar, consideré que no eran vitales para los fines del proyecto, por lo que solo los suprimí del resultado final.
columnas_a_eliminar = ['ingresos', 'capital_operativo']
datos_sin_columnas = datos.drop(columnas_a_eliminar, axis=1)

display(datos_sin_columnas)

###### Exporté el resultado final como archivo csv bajo el nombre de base_limpia
datos_sin_columnas.to_csv('/content/drive/My Drive/base_limpia.csv', index=False)

- #### Datos Utilizados 
Para poder elaborar la base de datos y representar de buena manera las dimensiones económicas y deportivas generales de las franquicias de la NBA los ultimos 6-7 años, hice uso de:

1. Una serie de artículos publicados por la revista [Forbes](https://www.forbes.com/lists/nba-valuations/?sh=1c6563dd6982), donde clasifican a los equipos de la NBA bajo ciertos parámetros económicos.
2. El portal de estadísticas deportivas de la [NBA](https://www.nba.com/stats), donde se puede extraer directamente de la fuente principal diversos datos sobre el rendimiento de los distintos equipos a lo largo de los años.

- #### Preguntas que se pueden responder

1. ¿Qué franquicias han crecido más económicamente estos últimos años?: Reflejado en esta base de datos se puede apreciar el ascenso (y descenso) de muchas organizaciones en cuanto a rendimiento financiero.

2. ¿Significa tener mucho dinero rendir mejor deportivamente? En la base de datos se ve expresamente como no siempre los equipos de mejor situación económica son los que obtienen el mejor rendimiento deportivo. Tal es el caso de los Lakers y los Knicks, quienes a pesar de estar constantemente en lo más alto de la escala económica, han tenido temporadas paupérrimas en cuanto a lo deportivo.

3. ¿Qué franquicias se han mantenido como "exitosas" en estos parámetros? Con la ayuda de esta base de datos, se puede concluir la denominación de exitosas a algunos de los equipos que constantemente tienen niveles altos en ambos parámetros medidos. Encontramos el caso de los Celtics, quienes han logrado mantenerse en los escalafones superiores en ambos parámetros durante el período estudiado.





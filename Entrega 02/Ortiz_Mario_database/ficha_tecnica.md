### Características de los datos
Los datos que se utilizan en esta base de datos son en su mayoría cuantitativos, en cuanto a que todos refieren a un valor numérico medible. Estos datos son Continuos, en cuanto que pueden tomar cualquier valor dentro de ciertos rangos. (Ej: wins, losses)
Estos datos son estructurados, en cuanto a que se encuentran organizados de una forma preestablecida en un CSV como se puede ver en los archivos RAW y en el resultado final
Tanto Forbes, como la NBA llevaron a cabo investigaciones de campo para recopilar los datos que acá se estan usando.
En este caso, se usan datos brutos y procesados, ya que usamos brutos como la cabtidad de partidos ganados y perdidos que luego se procesan para obtener nuevos tipos de datos, como el porcentaje de victoria, o los ránkings.
Todos los datos utilizados son de fuente abierta, extraídos de sitios web altamente confiables mencionados anteriormente.

### Alcance metodológico

Para aportar a la confirmación de nuestra hipótesis, es necesario contrastar distintos factores que podría definir el éxito de una organización en la NBA con el rendimiento deportivo. En este caso se compara con el crecimiento económico.

Ambos grupos de datos recolectados son de alta fiabilidad, provenientes de fuentes de gran prestigio.

Finalmente, ambos medidores considerados en esta entrega son fundamentales para una comprensión más integra del éxito de una franquicia NBA, por lo que es importantísimo poder compararlos de una forma clara.

### Variables incorporadas
1. año: Temporada a la que corresponde los datos expuestos. Se recolectó desde el año 2023 hasta el 2018.
2. rank: Posición en la que se encuentran dentro de la escala de valoraciones de las franquicias de la NBA, yendo del 1 al 30, en forma decreciente.
3. equipo: Nombre de los distintos equipos de la NBA.
4. valor: Valoración reportada por Forbes, representada en billones de dólares. Tiene contemplada diversos factores económicas como precios de entradas, cantidad de ingresos, contratos de sponsors, valoraciones de la arenas, etc.
5. ingresos: Medido en millones de dólares, cantidad de ingresos en la temporada correspondiente de parte de sponsors, entradas, premios, etc.
6. capital_operativo: Cantidad de dinero para invertir luego de todos los gastos (sueldos, deudas, gastos estructurales, etc.). Medido en millones de dólares.
7. wins: Cantidad de partidos ganados.
8. losses: Cantidad de partidos perdidos.
9. win%: Porcentaje de victorias.
10. league_rank: Posición en la que terminaron al final de la temporada regular. Van del 1 al 15.

### Observación sobre las bases de datos

Lo primero que vale la pena mencionar es el poco movimiento en los ránkings económicos en los polos. Los equipos más ricos y pobres con poca frecuencia cambian de lugar, lo que hace interesante la comparación con el rendimiento deportivo.

Otra observación, es la ausencia de ingresos y capital operativo para todas las temporadas. Actualmente me encuentro intentando recaudar esa información, por lo que se actualizará la base de datos cuando este esa información abierta al público.

Se puede realizar un análisis curioso al converger esta base de datos con la elaborada por mi comáñero y, de esa manera, establecer patrones entre la interacción y compromiso del público, el crecimiento económico de las franquicias y el rendimiento deportivo para  poder así intentar avanzar en nuestra pretensión de usar más responsablemente la etiqueta de "exitosa" en la NBA.



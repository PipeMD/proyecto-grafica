# Entrega 2


##### Nombre: Felipe Mateluna


### Proceso limpieza de datos


- #### Búsqueda de una base de datos


Todo empieza buscando una base de datos que contemple lo que necesitamos, en este caso la información que proporcionan los equipos de cuánta gente asiste a los partidos de la NBA.


Los que se encontraban por el internet se encontraban muy desactualizados, por ejemplo, datos solamente llegaban hasta el año 2015, por lo que la muestra era muy distante.


Sin embargo, el desarrollador de esta base de datos citaba a ESPN como la fuente de donde obtuvo los datos que se exhiben, por lo que fui a la pagina de [ESPN](https://www.espn.com/nba/attendance)  a buscar los datos de asistencia de los distintos equipos de la NBA, que van desde el año 2001 hasta el presente 2024.


Por lo que tuve que hacer mi propia base de datos con la información que proporcionaba la página, ocupando datos de los últimos 10 años (2014-2024)


Hice la base de datos en Visual Studio Code copiando y pegando la información, sin embargo vi que quedaba un poco desordenada y a la hora de analizar los datos, a pesar de que se puedan filtrar, era un poco tedioso y complicado.


Por lo que decidí ordenar la tabla en VSC por equipo y año en forma decreciente.


-  #### Limpieza de datos


Ordene a los 30 equipos por orden alfabético y por año decreciente (2024-2014). Del año 2024 faltaban una gran cantidad de datos, por lo que quise ver cuantos datos me faltaban y donde se encontraban.


Para eso use __df.isnull()__, con el cual pude ver donde estaban los datos que me faltaban marcados por un __True__


Para solucionar esto, decidí hacer algo que no afecte tanto a los equipos.


Como los ordene por orden alfabético y por años, los datos de años anteriores del mismo equipo aparecen seguidos, por lo que decidí que para los datos que me faltaban haría un __bfill__, con el cual puedo rellenar los espacios NaN con los datos que aparecen después en la tabla, que en este caso son los datos del año 2023.  


Sin embargo, antes de realizar esta operación hice algo diferente con los Dallas Mavericks y a los Houston Rockets, los equipos que son el foco de nuestra investigación.


Para estos dos casos busque una estadística similar de Home Attendance y Road Attendance en años anteriores de ambos equipos. La búsqueda arrojó que los datos del 2024 de los Mavericks eran similares a las del año 2023, y los datos del 2024 de los Rockets se asemejan a los del año 2018.


Por lo que buscando en internet vi cómo se podían cambiar datos sin afectar a toda la tabla, por lo que filtre los datos con df.loc y decidí modificar dos filas, la 143 y 220, las cuales contienen los datos del año 2024 de Mavericks y Rockets respectivamente.




Este es el proceso:


- filas_a_modificar = [143]


Home (Local):
-  mavericks_home_pct_attendance = 105.1
-  df.loc[filas_a_modificar, 'Home PCT Attendance'] = mavericks_home_pct_attendance


Esto lo repeti cambiando home por road y overall, con el fin de completar las tres columnas en las que faltaban datos de los Mavericks


Road (Visita):
- mavericks_road_pct_attendance = 97.1
- df.loc[filas_a_modificar, 'Road PCT Attendance'] = - mavericks_road_pct_attendance




Overall (Total):
- mavericks_overall_pct_attendance = 101.1
- df.loc[filas_a_modificar, 'Overall PCT Attendance'] = mavericks_overall_pct_attendance




Luego repetí el mismo proceso con los Rockets, para eso tuve que cambiar el número de fila a modificar.


- filas_a_modificar_2 = [220]


Home (Local):
- rockets_home_pct_attendance = 99.2
- df.loc[filas_a_modificar_2, 'Home PCT Attendance'] = rockets_home_pct_attendance


Road (Visita):
- rockets_road_pct_attendance = 96.7
- df.loc[filas_a_modificar_2, 'Road PCT Attendance'] = rockets_road_pct_attendance


Overall (Total):
- rockets_overall_pct_attendance = 97.9
- df.loc[filas_a_modificar_2, 'Overall PCT Attendance'] = rockets_overall_pct_attendance


Después ingrese el script print para hacer formal los cambios que hice.


Luego de cambiar los datos de los Mavericks y Rockets, y después de hacer el __bfill__, podemos ver la tabla completa y sin que falte ningún dato.




- #### Datos utilizados


Para construir esta base de datos como bien dije antes utilize como referencia un archivo xlsx publicado en [Data World](https://data.world/gmoney/nba-team-annual-attendance) por el usuario Gabe Salzer, en donde están los datos de asistencia desde el año 2000 al 2015.


Buscando cómo ampliar esta base de datos me encontre con la página [Inside Hoops](http://www.insidehoops.com/attendance.shtml), en donde se encontraban los mismos tipos de datos hasta el año 2024, pero de una forma mucho más compacta.


Sin embargo, me di cuenta que ambas usaban datos proporcionados por [ESPN](https://www.espn.com/nba/attendance), asi que busque y encontre los datos que utilice para confeccionar una base de datos que contuviera lo que más me había gustado de lo que había visto en Data World y en Inside Hoops.


- #### Preguntas que se pueden responder


    - ¿Que equipo lleva más público?: Esta es la pregunta más directa que se puede responder, pues se tiene el número de personas que asistió a los duelos de local (Home) durante un periodo de 10 años. Los porcentajes de asistencia también sirven para esto, ya que demuestra que la cantidad de gente que asistió al evento supera en cierta parte la capacidad del estadio.  


   - ¿Que significa el cambio de asistencia entre los años?: Esta pregunta la enfoco más en los Rockets, en torno a que con esta base de datos se demuestra que el 2024 fue un buen año para los Rockets en el marco de asistencia, ya que volvieron a superar las 700.000 personas y los datos se asemejan a de las del periodo de 2014-2019. Esto se puede relacionar con otras bases de datos, como la de rendimiento deportivo o las sensaciones que tienen los fanáticos de los Rockets con el equipo actual.




  - ¿Que año de esta última década ha sido mejor para cada equipo: En esta convergen ambas, ya que comparando entre los años y viendo la cantidad de público que asistió a los partidos podemos ver cual de los años, o equipos si le sumamos otra base de datos como las que se encuentran en [Basketball Reference](https://www.basketball-reference.com/), ha sido el mejor para cada equipo.

# Felipe Mateluna - Entrega 4

## Visualización

* ### Primer Gráfico

Lo que hice para visualizar los datos y para hacer el gráfico fue primero importar de Altair. Después asigne el csv al nombre nba_data y filtre los datos de la base (Son demasiados) para que me mostrara solo los datos de 5 equipos, por lo que puse __teams = Bulls, Mavericks, Lakers, Rockets y Spurs__ y después filtre los datos con este código:

__data_filtrada = nba_data[nba_data['Team'].isin(teams)][['Year', 'Team', 'Home Total Attendance']]__.

Con el 'Team' buscaba todos los equipos y con el .isin seleccionaba exclusivamente a los equipos que había puesto anteriormente con el "teams". Luego se recopilan los datos de Year, Team y Home Total Attendance, que son los datos con los que me gustaría confeccionar el gráfico. 

Ya teniendo la data filtrada, ahora teníamos una tabla filtrada para hacer el gráfico. Como eran datos que avanzan en el tiempo (2014-2024) quería hacer un gráfico de líneas, y para codificarlo puse que la "X" serán los años y la "Y" la asistencia de local.

__gráfico = alt.Chart(data_filtrada).mark_line(point=True).encode(
    x='Year:O',
    y='Home Total Attendance:Q',
    tooltip=['Year', 'Team', 'Home Total Attendance']__

Todo eso es lo que forma parte del gráfico por lo que cierro el .encode, pero para definir el título, el ancho y la altura del gráfico puse .properties e hice lo siguiente:

__).properties(
    title='Asistencia Local Total por Año y Equipo en la NBA (Equipos Seleccionados)',
    width=1200,
    height=900__

Quizás me quedo muy grande, pero como el punto es que el gráfico sea en parte interactivo, aquí se puede solucionar. Para eso, cierro el código usando .interactive, con el cual hago que cuando se pase el click por arriba de alguno de los puntos se señale el año, el equipo y el total de la asistencia local. 

__).interactive()__

Peeero igual de importante es poner ciertos colores a las líneas, por lo que busque en internet los códigos de colores de los equipos de la NBA y encontré [Team Color Codes](https://teamcolorcodes.com/nba-team-color-codes/), y de ahí saque los colores de los 5 equipos con los que quería hacer este gráfico. Después puse estas funciones para terminar de una vez con el gráfico. 

__color_scale = alt.Scale(domain=teams, range=['#CE1141', '#00538C', '#FDB927', '#C4CED4', '#000000'])
color=alt.Color('Team:N', scale=color_scale)__

  
* ### Segundo Gráfico

Para este gráfico quise hacer uno de barras horizontal, por lo que hice que la data se agrupara por Equipo (Team) y que la Asistencia (Home Total Attendance) se sumara con .sum para obtener el total de asistencia a partidos de local en un periodo de 10 años. 

Para eso encontré este código en [Altair](https://altair-viz.github.io/gallery/bar_chart_horizontal.html) que explicaba como hacer un gráfico horizontal de barras. 

Para eso puse el "Home Total Attendance" en la x y los "Teams" en la y:

__gráfico = alt.Chart(team_attendance).mark_bar().encode(
    x=alt.X('Home Total Attendance:Q', title='Home Total Attendance'),
    y=alt.Y('Team:N', sort='-x', title='Team'),
    tooltip=['Team', 'Home Total Attendance']
).properties(
    title='Total Home Attendance por Equipo en la NBA',
    width=800,
    height=600
)__

A este gráfico no le puse colores, puesto que muchos equipos comparten colores y puede llegar a ser confuso, pero siempre está abierto al cambio. Después vi como hacerlo interactivo, para que cuando se pase el cursor por arriba de la barra salga mencionado el equipo y el total de la asistencia. También que las barras estuvieran alineadas a la izquierda.

__texto = bar_chart.mark_text(
    align='left',
    baseline='middle',
    dx=3  
).encode(
    text='Home Total Attendance:Q'
)__

Dando como resultado el gráfico final con todo agregado: 

__gráfico_final = gráfico + texto__

Lo único malo de esta visualización es que al número expresado le falta un punto, pero se logra comprender de igual forma. 

## Base de datos

La base de datos que ocupe para esta visualización fue la misma en la que trabaje durante la segunda entrega, la cual tiene datos sobre la asistencia de los 30 equipos que forman parte de la NBA durante los últimos 10 años (2014-2024).

Como mencione anteriormente, seleccione 5 equipos, ya que cuando hice un gráfico lineal con los 30 equipos no se podía ver muy bien. Para responder las preguntas que nos planteamos al inicio del proyecto y para contar una historia entretenida, además de los Dallas Mavericks y los Houston Rockets seleccione a los Chicago Bulls, Los Angeles Lakers y San Antonio Spurs.

El gráfico de barras horizontales lo hice con la base de datos completa.



## Preguntas que puede responder

Esta base de datos puede responder preguntas como: 

__¿Qué equipo lleva más público?:__ 

- La pregunta más sencilla de responder, ya que existe una variable numérica que nos permite responder exactamente esta pregunta, la cual es el "Home Total Attendance".

__¿Realmente importa el éxito deportivo para contar con un alto nivel de asistencia?:__ 

- Hay casos en los que el equipo hace una temporada extraordinaria y no lleva más público que en una temporada normal, por lo que lleva a la pregunta de si el éxito deportivo o la cantidad de partidos ganados lo es todo para mantener una cantidad de fanáticos felices para que asistan a todos tus partidos. (Véase el caso de los Rockets expuesto en la crónica).

__¿Qué es más importante: Los equipos o las estrellas?:__

- Esta pregunta se complementa con la anterior, y es que en algunos casos como el de los Spurs existe una baja de asistencia tras el retiro de su última estrella Manu Ginobilli, pero el último año la asistencia a partidos de local de San Antonio aumentó explosivamente, lo que se puede deber al ingreso del jugador Victor Wembanyama al equipo, deportista conocido como "Extraterrestre" y de quien se dice que va a cambiar la liga. Es por esto que nos preguntamos si la gente asiste a los partidos por los jugadores o es por el amor/interés a los equipos de la NBA.

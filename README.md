# POKÉMON GO DASHBOARD

## Índice

* [¡Regresa al mundo de los Pokémon!](#Regresa-al-mundo-de-los-Pokémon)
* [Pokémon Go Dashboard](#Pokémon-Go-Dashboard)
* [Definición del producto](#Definición-del-producto)
* [Entrevistas](#[Entrevistas)
* [Historias de usuario](#Historias-de-usuario)
* [Prototipo de baja fidelidad o Sketch](#Prototipo-de-baja-fidelidad-o-Sketch)
* [Prototipo de alta fidelidad o Diseño de la interfaz de usuario](#Prototipo-de-alta-fidelidad-o-Diseño-de-la-interfaz-de-usuario)
* [Test de usabilidad](#Test-de-usabilidad)

***

## Preámbulo

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el datalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, entiende quién es tu usuario y qué
necesita saber o ver exactamente; luego podrás construir la interfaz que le
ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* Indicadores de desarrollo del Banco Mundial de algunos países (Brasil, Chile, 
  México y Perú). Estos datos incluyen indicadores demográficos, económicos y 
  comerciales.
* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](pokemongolive.com).
* [Steam noticias](src/data/steam/steam.json):
  Lista noticias relacionadas a los videojuegos presentes en la
  plataforma de [Steam](https://store.steampowered.com/).
* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de jugadores en una liga del
  juego League of Legends (LoL), puedes revisar la documentación de su API en
  este [link](https://developer.riotgames.com/api-methods/).
* [Personas heridas por medio de transporte en EEUU](src/data/injuries/injuries.json).
  Este set nos muestra el número de personas heridas en accidentes de
  transporte, con data anual desde 1960 y categorizada por tipo de transporte
  (aire, barco, automóvil, moto, bicileta, ...).

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún calculo agregado**. Como aclaración,
con cálculo agregado nos referimos a distintos cálculos que puedes hacer con
la data que tienes para mostrar información aún más relevante a los usuarios.
Una opción serían cálculos estadísticos como el promedio, el máximo o el mínimo,
por ejemplo, si tenemos una colección que representa a un grupo de personas,
y cada persona está representada como un _objeto_ con una _propiedad_ `altura`,
podríamos elegir calcular la altura promedio en el grupo entre otras cosas.

Cada set de datos tiene una identidad gráfica que deberás utilizar en la
interfaz. La identidad gráfica; o también conocido como guía de estilos en
diseño, de cada set la podrás encontrar en el siguiente
[link](https://drive.google.com/open?id=1eeWFqrWpy-OYOH4EHDckFGunyrm9iNeE).

## Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 3 semanas. Trabaja durante el
  primer Sprint (una semana) y al  final, decide en cuántas semanas lo
  terminarás.

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Pensar en las **necesidades de los usuarios** para crear historias de usuario.
* Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) en la organización y planificación de tu
  trabajo.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## Parte Obligatoria

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tu usuario, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Asegúrate de incluir una definición
de terminado (_definition o done_) para cada una.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que realices, y las subas a tu repositorio, y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la identidad
gráfica correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear. Además, tu
diseño debe seguir los fundamentos de _visual design_. También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

## Parte Opcional (Hacker edition)

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo esperamos que implementes las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Tech

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### UX

| Habilidad |
|-----------|
| User Centricity |
| Entrevistas |
| Contraste |
| Alineación |
| Jerarquía |
| Tipografía |
| Color |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

Pokémon Go ha causado sensación desde el día de su lanzamiento, atrayendo a jóvenes y adultos a este nuevo mundo virtual por medio de la realidad aumentada.
De acuerdo con el concepto original, los entrenadores buscan capturar Pokémon hasta completar una colección. El otro objetivo es adiestrarlos para que ganen batallas frente a otras criaturas.
El juego ha conseguido superar los 65 millones de usuarios al día y ha generado aglomeraciones en las ciudades. Pero, ¿por qué este juego ha causado tanto impacto en los usuarios?
La idea de llegar a convertirse en un maestro Pokémon es un feeling con el que ha crecido toda una generación, Pokémon Go te permite vivir la experiencia de un verdadero entrenador pokémon.


## Pokémon Go Dashboard

Pokémon Go Dashboard es una herramienta de ayuda para todos los usuarios de Pokémon Go, ya que te permite hacer, desde una búsqueda específica de un Pokémon, filtrarlos por tipo y tipo de huevo. Hacer un cálculo real de caramelos que le falta a tu Pokémon para llegar a la siguiente evolución, también se podré ver tablas estadísticas según el promedio de debilidades por tipo de Pokémon.

link a [Pokémon-Go-Dashboard](https://carocampos.github.io/lim-2018-11-bc-core-am-data-lovers/src/)


## Definición del producto

1. ¿Quiénes son los principales usuarios de producto?

    Jugadores de Pokémon Go.

2. ¿Cuáles son los objetivos de los usuarios?

    Obtener información específica sobre los pokémon que se encuentran en el juego.

3. ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

    - Tipos de pokémon.
    - Que pokémon se puede obtener según el tipo de huevo.
    - Cantidad de caramelos que se necesita para evolucionar un pokémon.
    - Poder ordenar los pokémon según número de Pokédex.
    - Poder ordenar los pokémon según orden alfabético de A-Z y Z-A.

4. ¿Cuándo utilizan o utilizarían el producto?

    Cuando quieran obtener información de un pokémon en específico.

5. ¿Cómo crees que el producto resuelve el problema que tiene tu usuario?

El presente proyecto soluciona la necesidad del usuario de acceder fácilmente a informacion específica sobre los pokémon que se encuentran en el juego Pokémon Go.


## Entrevistas

Para la elaboración de las entrevistas, escogimos a usuarios habituales de Pokémon Go para que nos respondan las siguientes preguntas:

1. ¿Cuál es su objetivo con el juego?

    - Atrapar todos los pokémon.
    - Capturar los 150 pokemones originales.

2. ¿Que datos son los más importantes en el juego?

    - La fecha de inicio del juego, la cantidad de experiencia que tienes, la cantidad de Pokémon es que tienes. 
    - El poder del Pokémon que capturas, cuantos Pokémon tienes.
    - En que zonas hay mas posibilidad de encontrar ciertos Pokémon.


3. ¿Qué datos les gustaría comparar o filtrar?

    - Ver que ataques son mas efectivos contra otros Pokémon.
    - Cantidad de experiencia que ganas por día, cantidad de Pokémon (nuevos, únicos, todos) que atrapas por día y poder definir rangos de fecha para los reportes (tipo analytics)
    - Me gustaría poder poner mis Pokémon destacados primero, para elegir fácil cuando peleas, poder filtrar por tipo (eléctrico, de agua, etc), y poder tener duelos fuera de los gimnasios.


## Historias de usuario

### Historia 1

COMO: Jugador de Pokémon Go.

QUIERO: Filtrar los pokémon según su tipo.

PARA: Saber que pokémon hay en cada tipo.

CRITERIOS DE ACEPTACIÓN

- La página debe permitir filtrar según el tipo de pokémon.
- La página debe mostrar a los pokémon según el tipo al que pertenezcan.
- El usuario debe poder seleccionar el tipo de pokémon que desea ver.
- Debe pasar Test unitario.
- Debe ser responsive.

### Historia 2

COMO: Jugador de Pokémon Go.

QUIERO: Filtrar los pokémon según el tipo de huevo.

PARA: Poder saber que pokémon puedo obtener según el tipo de huevo.

CRITERIOS DE ACEPTACIÓN

- La página debe permitir filtrar según el tipo de huevo.
- La página debe mostrar a los pokémon según el tipo de huevo al que pertenezcan.
- El usuario debe poder seleccionar el tipo de huevo que desea ver.
- Debe pasar Test unitario.
- Debe ser responsive.

### Historia 3

COMO: Jugador de Pokémon Go.

QUIERO: Ordenar a los pokémon según su número de Pokédex

PARA: Poder ubicarlo facilmente.

CRITERIOS DE ACEPTACIÓN

- La página debe permitir ordenar a los pokémon según el número de Pokédex.
- La página debe mostrar a los pokémon ordenados según el número de Pokédex.
- El usuario debe poder seleccionar la opción Ordenar según el número de Pokédex.
- Debe pasar Test unitario.
- Debe ser responsive.

### Historia 4

COMO: Jugador de Pokémon Go.

QUIERO: Ordenar a los pokémon según el orden alfabético de la A-Z.

PARA: Poder ubicarlo facilmente.

CRITERIOS DE ACEPTACIÓN

- La página debe permitir ordenar a los pokémon según el orden alfabético de la A-Z.
- La página debe mostrar a los pokémon ordenados según el orden alfabético de la A-Z.
- El usuario debe poder seleccionar la opción Ordenar a los pokémon según el orden alfabético de la A-Z.
- Debe pasar Test unitario.
- Debe ser responsive.

### Historia 5

COMO: Jugador de Pokémon Go.

QUIERO: Ordenar a los pokémon según el orden alfabético de la Z-A.

PARA: Poder ubicarlo facilmente.

CRITERIOS DE ACEPTACIÓN

- La página debe permitir ordenar a los pokémon según el orden alfabético de la Z-A.
- La página debe mostrar a los pokémon ordenados según el orden alfabético de la Z-A.
- El usuario debe poder seleccionar la opción Ordenar a los pokémon según el orden alfabético de la Z-A.
- Debe pasar Test unitario.
- Debe ser responsive.

### Historia 6

COMO: Jugador de Pokémon Go.

QUIERO: Calcular cuantos caramelos necesito para la evolución de mi pokémon.

PARA: Saber cuantos caramelos le falta para evolucionar y a que pokémon evoluciona.

CRITERIOS DE ACEPTACIÓN

- La página debe permitir ingresar el nombre del pokémon que desea evolucionar.
- La página debe permitir ingresar la cantidad de caramelos que el usuario tiene actualmente.
- La página debe permitir presionar un botón para realizar el cálculo.
- La página debe mostrar la cantidad de caramelos que le falta al pokémon para evolucionar.
- La página debe mostrar el nombre del pokémon al que va evolucionar.
- Debe pasar Test unitario.
- Debe ser responsive.

## Prototipo de baja fidelidad o Sketch

*PRIMER PROTOTIPO*: Versión móvil, tablet y escritorio

 ![Sin titulo](src/img/prototipo1.jpeg)

*SEGUNDO PROTOTIPO*: Versión móvil, tablet y escritorio

 ![Sin titulo](src/img/prototipo2.jpeg)
 
*TERCER PROTOTIPO*: Versión móvil(1) y Versión tablet y escritorio(2)

 ![Sin titulo](src/img/prototipo3.jpeg)

 ![Sin titulo](src/img/prototipo4.jpeg)

*CUARTO PROTOTIPO*: Versión móvil(1) y Versión tablet y escritorio(2)

 ![Sin titulo](src/img/prototipo5.jpg)

 ![Sin titulo](src/img/prototipo6.jpg)

*QUINTO PROTOTIPO*: Versión móvil(1) y Versión tablet y escritorio(2)

 ![Sin titulo](src/img/prototipo7.jpeg)

 ![Sin titulo](src/img/prototipo8.jpeg)


## Prototipo de alta fidelidad o Diseño de la interfaz de usuario

Link a Zeplin [Dashboard-Desktop](https://zpl.io/VkwpyJ8)
Link a Zeplin [Dashboard-Mobile](https://zpl.io/bWgXMWj)

*INICIO*

 ![Sin titulo](src/img/1-home.png)

*SELECT ORDENAR*

 ![Sin titulo](src/img/2-home-ordenar.png)

*BUSCADOR*

 ![Sin titulo](src/img/3-pokemon-buscador.png)

*SELECT TIPO DE POKÉMON*

 ![Sin titulo](src/img/4-pokemon-type.png)

*SELECT TIPO DE HUEVO*

 ![Sin titulo](src/img/5-pokemon-huevo.png)

*CALCULAR CARAMELOS*

 ![Sin titulo](src/img/6-pokemon-caramelos.png)

*ESTADÍSTICA DE DEBILIDADES*

 ![Sin titulo](src/img/7-pokemon-debilidades.png)


## Test de usabilidad

Testeo de primer prototipo de baja fidelidad: 

- El usuario solicitó poder ver a los pokémon segun el tipo de pokémon y tipo de huevo.
- También comentó que era importante que aparezca el número de Pokédex en la imagen.

Testeo de segundo prototipo de baja fidelidad: 

- El usuario solicitó que al buscar al pokémon aparezca el cuadro de ese pokémon.
- Que también pueda presionar ese cuadro y aparezca todo el dato informativo del pokémon como se mostró en el primer prototipo. 
- También solicitó no solo poder buscar por nombre sino también por número de Pokédex. 
- El usuario solicitó que la forma de acceder a los tipos de pokémon sea diferente para Desktop.

Testeo de tercer prototipo de baja fidelidad:

- Fue a partir de este prototipo que se comenzó a trabajar en el primer sprint
- En el testeo el usuario pidió poder ordenar a los pokémon por # de Pokédex, de la A-Z y Z-A.
- Por último poder calcular la cantidad de caramelos que le faltaban a su pokémon.






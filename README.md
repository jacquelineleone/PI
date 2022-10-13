<div align="center">
<img src="https://camo.githubusercontent.com/35b81f213ddb0e019b3567f6982d740bb2d01ae5dd712a1537e09e826e940228/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67">
</div>

<h1 align="center">🌎 Individual Project - Henry Countries 🌎</h1>

</br>
<p>
Creacion de una aplicación en la cual se pueda ver información de distintos paises utilizando la api externa https://restcountries.com/ y a partir de ella poder, entre otras cosas:

- Buscar paises
- Filtrarlos / Ordenarlos
- Crear actividades turísticas
  
Se trabajo tanto en la base de datos, el back end y el front end.
</p>

</br>

<h2>Base de Datos</h2>

El modelo de base de datos contiene las siguientes entidades:

- [ ] País con las siguientes propiedades:
  - ID (Código de 3 letras)
  - Nombre
  - Imagen de la bandera
  - Continente
  - Capital
  - Subregión
  - Área
  - Población

- [ ] Actividad Turística con las siguientes propiedades:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

</br>

La relación entre ambas entidades es de muchos a muchos ya que un país puede contener varias actividades turísticas y, a su vez, una actividad turística puede darse en múltiples países.

</br>

<h2>Back End</h2>

Se desarrollo un servidor en Node/Express con las siguientes rutas:
- [ ] __GET /countries__:
  - En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
  - Obtener un listado de los paises.
- [ ] __GET /countries/{idPais}__:
  - Obtener el detalle de un país en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de país
  - Incluir los datos de las actividades turísticas correspondientes
- [ ] __GET /countries?name="..."__:
  - Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
  - Si no existe ningún país mostrar un mensaje adecuado
- [ ] __POST /activities__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Crea una actividad turística en la base de datos, relacionada con los países correspondientes

</br>

<h2>Front End</h2>

Se desarrollo una aplicacion de React/Redux que contiene las siguientes pantallas/rutas:

__Pagina inicial__: creacion de una landing page con

- [ ] Imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: que cuenta con

- [ ] Input de búsqueda para encontrar países por nombre
- [ ] Área donde se observa el listado de países. Al iniciar carga los primeros resultados obtenidos desde la ruta `GET /countries` y muestra su:
  - Imagen de bandera
  - Nombre
  - Continente
- [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 solo en la primer pagina.

__Ruta de detalle de país__: que contiene

- [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- [ ] Código de país de 3 letras (id)
- [ ] Capital
- [ ] Subregión
- [ ] Área (Mostrarla en km2 o millones de km2)
- [ ] Población
- [ ] Actividades turísticas con toda su información asociada

__Ruta de creación de actividad turística__: que contiene

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [ ] Posibilidad de seleccionar/agregar varios países en simultáneo
- [ ] Botón/Opción para crear una nueva actividad turística

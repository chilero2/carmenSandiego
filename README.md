# Control de datos de Escuelas

*Proyecto para la asignatura de Desarrollo WEB en Entorno Cliente*

## Comenzando 🚀

* Para poder ejecutar el proyecto en tu máquina local no es necesario instalar ninguna dependencia.

* Para poder ejecutar los test de pruebas, es necesario tener instalado el framework de pruebas **Mocha** y la librería de aserción **Chai**

## Explicación del proyecto 📋

El proyecto pretende tratar los datos de un listado de escuelas. A través de una interfaz HTML, el programa trabaja con 3 entidades:
- **Alumno**, como propiedades tiene nombre y curso. Además, tiene un método para mostrar sus datos a través del HTML.
- **Profesor**, como propiedades tiene nombre, tipo de profesor y un Set para guardar a sus alumnos. Tiene métodos para mostrar sus datos en HTML y para tratar el Set de los alumnos
- **Escuela**, como propiedades tiene el nombre, localidad, director y un Set para guardar a los profesores que trbajan ahí. Además, tiene un método para mostrar sus datos y para tratar el Set de profesores.

Además, hay una clase para controlar el listado de **Escuelas**. Tiene un sólo campo de tipo Set para guardar un listado con todas la escuelas. Tiene métodos para tratar el listado de escuelas.

El programa es capaz de tratar:
- **Añadir** items de cualquiera de las 3 entidades.
- **Modificar** las propiedades de cualquier item que exista.
- **Mostrar** un listado de todos los datos almacenados en la **lista de escuelas**. 
- **Eliminar** cualquier item que exista. Importante!! Si se borra una escuela, se eliminaran también todos sus profesores y alumnos. Los mismo ocurre al borrar un profesor, se eliminarn sus alumnos.

## Construido con 🛠️
Para el proyecto se ha usado exclusivamente **JavaScript** y **Mocha Chai** para hacer los testings.

## Autor ✒️
***Emilio Blasco*** estudiante de DAW.



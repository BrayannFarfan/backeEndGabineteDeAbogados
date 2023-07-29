README: Base de Datos para Gabinete de Abogados

Este proyecto consiste en el diseño e implementación de una base de datos relacional para almacenar información sobre los asuntos que lleva un gabinete de abogados. La base de datos se ha desarrollado utilizando Node.js como lenguaje de programación y Sequelize como ORM (Object-Relational Mapping).

**Requisitos previos**
Node.js instalado en el sistema.
Gestor de base de datos (por ejemplo, MySQL).
**Instalación**
*Clonar el repositorio o descargar el código fuente.
*Ejecutar npm install para instalar las dependencias del proyecto.
*Configuración de la base de datos
*Asegúrese de tener un gestor de base de datos instalado y configurado (MySQL, PostgreSQL, etc.).
*Edite el archivo config/config.json con los detalles de su base de datos (nombre de usuario, contraseña, host, puerto, etc.).
*Estructura de la base de datos
*La base de datos está diseñada para almacenar la siguiente información:

**Tabla "Asuntos":**
+ id (INTEGER, clave primaria)
+ numero_expediente (STRING)
+ periodo_inicio (DATE)
+ periodo_fin (DATE)
+ estado (STRING)
+ Tabla "Clientes":
+ id (INTEGER, clave primaria)
+ dni (STRING)
+ nombre (STRING)
+ direccion (STRING)

**Tabla "Procuradores":**
+ id (INTEGER, clave primaria)
+ dni (STRING)
+ nombre (STRING)

**Uso**
- Iniciar la aplicación mediante el comando ***npm run dev***.
- La aplicación se ejecutará y creará las tablas necesarias en la base de datos configurada.
- Puede utilizar las operaciones CRUD proporcionadas por Sequelize para interactuar con la base de datos desde su aplicación Node.js.

**Contribuciones**
***Este proyecto es de código abierto y las contribuciones son bienvenidas. Si desea contribuir, por favor envíe un pull request explicando los cambios propuestos.***

**Licencia**
- Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para más detalles.

**Agradecimientos**
Agradecemos a la comunidad de Node.js y Sequelize por sus contribuciones a la creación de herramientas poderosas y eficientes para el desarrollo de bases de datos en aplicaciones Node.js.

Si tienes alguna pregunta o necesitas ayuda con el proyecto, no dudes en contactarnos.

***¡Gracias por utilizar nuestra base de datos para gabinetes de abogados!***
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## PROYECTO - Uso de SWAPI y creación de Personas

#### Descripción:

Este proyecto esta desarrollado en **NodeJS** y utiliza el **Framework NestJS**.
Esta aplicación aprovecha varias herramientas y tecnologias clave como:

- **Express:** Servidor HTTP
- **TypeORM:** ORM(Mapeo Objeto-Relacional).
- **MySQL:** Gestor de Base de datos
- **PHPMyAdmin:** Herramienta de administración de Base de datos
- **Swagger:** Documentación de API RESTFull

#### Pasos para Utilizar el Proyecto:

1. Clonar el proyecto desde GitHub
2. Ingrear al directorio del proyecto
3. Ejecutar `npm install`
4. Clonar el archivo `.env.template` y renombrarlo a `.env`
5. Cambiar las variables de entorno

#### Ambiente Maquina local

1. En el archivo `.env` cambiar las variables:
   - **STAGE**=DEV
   - **SYNCRONIZE**=true
   - **MYSQL_HOST**=localhost
2. Comentar todo el bloque **backend** del archivo `docker-compose.yml`
3. Levantar los contenedores de base de datos con: `docker compose up -d build`

#### Ambiente Desarrollo

1. En el archivo `.env` cambiar las variables:
   - **STAGE**=DEV
   - **SYNCRONIZE**=true

#### Ambiente Producción

1. En el archivo `.env` cambiar las variables:<br>
   - **STAGE**=PROD
   - **SYNCRONIZE**=false

#### Contenedores - Desarrollo

1. Levantar los contenedores mediante el comando:<br>
   `docker compose up -d build`

#### Contenedores - Producción

1. Levantar los contenedores mediante el comando:<br>
   `docker compose -f docker-compose.prod.yml up -d --build`

#### API REST

- La ruta de documentación local es: http://localhost:3000/api

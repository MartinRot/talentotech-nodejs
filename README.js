# API de Productos con FakeStore - 'https://fakestoreapi.com/docs'

## ¿Qué hace la app?
Esta aplicación permite interactuar con la API de FakeStore para gestionar productos.  
Podés obtener la lista completa de productos, consultar un producto específico por ID, crear un nuevo producto y eliminar un producto existente mediante comandos en la terminal.

## ¿Cómo se instala?
Primero, cloná el repositorio y luego instalá las dependencias con:
npm install

## ¿Qué necesito correr para que la API funcione?
Para usar la app, ejecutá los comandos con la estructura: npm run start <METHOD> <PATH> [parámetros]

## Ejemplos de uso:
- Obtener todos los productos:
    npm run start GET products

- Obtener un producto por ID:
    npm run start GET products/15

- Crear un producto:
    npm run start POST products T-Shirt-Rex 300 remeras

- Eliminar un producto por ID:
    npm run start DELETE products/7

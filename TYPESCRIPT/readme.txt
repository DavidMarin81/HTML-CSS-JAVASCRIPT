- Para iniciar las dependencias de typescript, ir a la terminal y escribir:

    npi i typescript --save-dev

- Se usa para ejercicios pequeños. No hace falta inicial siempre
    -g (lo instala a nivel global)

    npm i -g ts-node

- Para ver lo que se imprime por consola

    ts-node index.ts

- Para compilar el programa

    npx tsc index.ts

- Se puede poner un script para ejecutar desde la terminal con el comando "npm run build"
    Para ello, incluir en el package.json:

    "scripts": {
    "build": "ts-node index.ts"
    },
Para saber la version de node
    node --version

Para saber la version de npm
    node --version

 1.- Para instalar como dependencia: (ESTO IGUAL NO HACE FALTA INICIARLO CADA VEZ)
    npm init
    (asignar los campos si se quiere)

2.- Se usa para ejercicios pequeños. No hace falta inicial siempre
    -g (lo instala a nivel global)

    npm i -g ts-node (Se puede poner la -g o no)

3.- Para ver lo que se imprime por consola

    ts-node index.ts

4.- Para compilar el programa (y que se modifique el archivo .js)

    npx tsc index.ts

//No tengo claro para que sirve esto
(- Para iniciar las dependencias de typescript, ir a la terminal y escribir:

    npi i typescript --save-dev)

- Se puede poner un script para ejecutar desde la terminal con el comando "npm run build"
    Para ello, incluir en el package.json:

    "scripts": {
        "build: "npx tsc index.ts"
    },
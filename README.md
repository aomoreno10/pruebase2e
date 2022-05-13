# pruebase2e
Pruebas de Ghost para pruebas automatizadas

# Entorno inicial

## Aplicación Ghost
- Tener el CLI de Ghost instalado.
- Contar con una instancia local de Ghost.
- Ejecutar la instancia local la cual, por defecto, estará disponible en http://localhost:2368 

## Cypress
Version 9.5.3
Deseable contar con Cypress instalado globalmente. Para hacerlo: npm i cypress -g

## Kraken
- Node.js 16.x
- npm @latest
- adb instalado globalmente. Para comprobarlo, desde la terminal: adb 
- Kraken-node instalado globalmente. Para instalarlo: npm i kraken-node -g
- Appium instalado globalmente. Para instalarlo: npm install -g appium

# Corriendo Pruebas

## Cypress
- En el directorio raíz de este proyecto ejecutar: npm install
- Editar las constantes del archivo ./cypress/integration/env.js de acuerdo al usuario y contraseña definidos en la instancia local de Ghost
- En el directorio raíz de este proyecto ejecutar: cypress open 
- Dentro de la interfaz de Cypress, dar doble clic sobre cada uno de los escenarios listados para su correspondiente ejecución.

## Kraken
- Haber seguido los pasos del tutorial y tener kraken correctamente instalado
- Ubicarse en la raíz de la carpeta Kraken y ejecutar el comando ./node_modules/kraken-node/bin/kraken-node run

- Dentro del directorio ./kraken ejecutar: npm i 
- Para correr una prueba, reemplazar el contenido de ghost.feature por el contenido del escenarioXX.txt, y después ejecutar: npx kraken-node run
NOTA: Es posible que la consola integrada de VSCode no reconozca kraken-node como comando, así que se sugiere ejecutar las pruebas con una terminal Git Bash o Powershell.

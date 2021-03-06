# Pruebase2e
Pruebas de Ghost para pruebas automatizadas

# Integrantes y correos
- Julie Andrea Padilla González j.padillag@uniandes.edu.co
- Abel Oswaldo Moreno Acevedo ao.moreno10@uniandes.edu.co
- Julián Cáceres Florez j.caceresf@uniandes.edu.co

# Entorno inicial

## Aplicación Ghost
Tener la aplicación Ghost instalada y corriendo en el entorno local
Las pruebas iniciales, se ejecutaron sobre la versión 4.41.3
Las pruebas de regresión visual se ejecutaron sobre la versión 3.42

## Funcionalidades escogidas
1. Crear un nuevo post
2. Publicar un post
3. Ver los posts publicados en el home del Blog
4. Ver detalle de un post
5. Editar el contenido de un post publicado
6. Login
7. Listar posts en interfaz de administrador
8. Logout
9. Eliminar post
10. Cambiar el acceso del post
11. Agregar imagen al post
12. Eliminar imagen
13. Dejar de publicar el post
14. Cambiar contraseña

## Descripción de escenarios de prueba
1. El usuario inicia sesión, crea un nuevo post y lista los posts en la interfaz de administrador para verificar la creación del nuevo post.
2. El usuario inicia sesión, publica un post y ve los detalles del post.
3. El usuario inicia sesión, edita el contenido de un post publicado y lista los posts en la interfaz de administrador.
4. El usuario ve los posts publicados en el home del blog y luego ve el detalle de un post.
5. El usuario inicia sesión, edita el contenido de un post publicado, cierra sesión y ve los posts publicados en el home del blog para confirmar la edición.	
6. El usuario ve los posts publicados en el home del blog, luego hace login en la sesión de administrador, edita el contenido de un post publicado, cierra sesión, ve los posts publicados en el home del blog y ve el detalle del post.
7. El usuario inicia sesión, crea un nuevo post, cierra sesión y ve los posts publicados en el home del blog.
8. El usuario inicia sesión, crea un nuevo post, lista los posts en la interfaz de administrador, elimina el post y vuelve a listar los posts en la interfaz de administrador para verificar la eliminación (prueba negativa).
9. El usuario inicia sesión, crea un nuevo post, lo publica, cambia el acceso del post creado, cierra la sesión y ve los posts publicados en el home del blog para verificar que no aparezca. (prueba negativa).
10. El usuario ve los posts publicados en el home del blog, luego inicia sesión, elimina el post, cierra sesión y ve los posts publicados en el home del blog nuevamente para verificar la eliminación. 
11. El usuario inicia sesión, crea un nuevo post, agrega una imagen al post, cierra la sesión, ve los posts publicados en el home del blog y ve el detalle del post. 
12. El usuario inicia sesión, crea un nuevo post, agreta una imagen al post, cierra la sesión, ve los posts publicados en el home del blog, ve el detalle del post, vuelve a iniciar sesión, elimina la imagen, cierra la sesión y ve los posts publicados en el home del blog.
13. El usuario inicia sesión, lista los posts en la interfaz de administrador, cierra la sesión y ve los posts publicados en el home del blog. 
14. El usuario inicia sesión,  deja de publicar todos los posts, cierra sesión y verifica que no haya ningún post publicado en el home del blog.
15. El usuario inicia sesión, elimina todos los posts y verifica que no exista ningún post listandolos en la interfaz de administrador (prueba negativa).
16. El usuario inicia sesión, elimina todos los posts, cierra sesión y verifica en el home del blog que no exista ningún post publicado (prueba negativa).
17. El usuario inicia sesión, crea un nuevo post, cierra sesión, ve los posts publicados en el home del blog, ve el detalle del post, vuelve a iniciar sesión, agrega una imagen al post,  cierra la sesión y ve los posts publicados en el home del blog. 
18. El usuario inicia sesión, crea un nuevo post, cierra sesión, ve los posts publicados en el home del blog, ve el detalle del post, vuelve a iniciar sesión, agrega una imagen al post,  cierra la sesión, ve los posts publicados en el home del blog y ve el detalle del post.
19. El usuario inicia sesión, cambia la contraseña, cierra sesión y vuelve a hacer login para verificar que funcione la nueva contraseña.
20. El usuario inicia sesión, crea un nuevo post,  lista los posts en la interfaz de administrador, crea un nuevo post con contenido duplicado y vuelve a listar los posts en la interfaz de administrador para verificar su creación.

# Instrucciones para correr las pruebas 
## Cypress
- Editar las constantes del archivo env.js acordes a la aplicación Ghost que van a probar
- Ubicarse en una consola en la raíz del proyecto y ejecutar el comando cypress open
- Dar click en el escenario que desee probar.

## Kraken
- Haber seguido los pasos del tutorial y tener kraken correctamente instalado
- Modificar el archivo properties.json con los datos de su usuario y contraseña local
- Para correr cada uno de los escenarios copie el contenido del archivo .txt con el número del escenario especificado en el archivo ghost.feature
- Ubicarse en la raíz de la carpeta Kraken y ejecutar el comando ./node_modules/kraken-node/bin/kraken-node run

# Instrucciones para correr las pruebas de regresión visual
- Desde una consola ubicarse en la carpeta Regresion_visual
- Ejecutar el comando cypress open
- Editar los datos del archivo env.js con los datos de su cuenta local en ghost, tanto en la versión 4.41.3 como en la versión 3.42
- Configurar los puertos según se indica en los comentarios del archivo env.js para las versiones de ghost en su máquina local y descomentar la versión de ghost que va a probar.
- Cuando ejecute cada escenario en las dos versiones de ghost, diríjase al archivo index.html y ejecútelo en su navegador

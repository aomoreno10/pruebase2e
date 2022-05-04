import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";


// 1. Crear un nuevo post
export function crearPost() {

}

// 2. Publicar un post
export function publicarPost() {

}

// 3. Ver los post publicados en el home del Blog
export function listarPostsBlog() {

}

// 4. Ver detalle de un post
export function verPostBlog() {

}

// 5. Editar el contenido de un post publicado
export function editarPost() {

}

// 6. Login
export function login() {
    cy.visit(URL + '/ghost');
    cy.wait(1000);
    cy.get('.email').type(LOGIN_EMAIL, { force: true });
    cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
    cy.wait(1000);
}

// 7. Listar posts en interfaz de administrador
export function listarPostsAdmin() {

}

// 8. Logout
export function logout() {

}

// 9. Eliminar post
export function eliminarPost() {

}

// 10. Cambiar el acceso del post
export function cambiarAccesoPost() {

}

// 11. Agregar imagen al post
export function agregarImagenPost() {

}

// 12. Eliminar imagen
export function eliminarImagenPost() {

}

// 13. Despublicar el posts
export function despublicarPost() {

}

// 14. Cambiar contraseña
export function cambiarPassword() {

}
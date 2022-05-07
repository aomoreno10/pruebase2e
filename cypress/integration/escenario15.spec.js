//Login - eliminar post - listar posts en interfaz de administrador

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, cambiarAccesoPost, listarPostsBlog, listarPostsAdmin, eliminarPost } from "./functions";

describe('Escenario 15', function () {
    it('login, eliminar posts, listar posts en administrador', function () {
        login();
        cy.wait(1000);
        cy.get('#ember26').click();
        borrarTodosPosts();
        cy.wait(1000);
        listarPostsAdmin();    
    })
})

function borrarTodosPosts() {
    cy.get( 'body' ).then( $mainContainer => {
        if ( cy.get('.gh-content-entry-title') != ' ' ) {
            eliminarPost();
            borrarTodosPosts();
        }
    } );
}

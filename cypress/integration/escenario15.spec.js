//Login - eliminar post - listar posts en interfaz de administrador

import { login, eliminarTodosLosPost } from "./functions";

describe('Escenario 15', function () {
    it('login, eliminar posts, listar posts en administrador', function () {
        login();
        cy.wait(1000);
        eliminarTodosLosPost();   
    })
})

// function borrarTodosPosts() {
//     cy.get( 'body' ).then( $mainContainer => {
//         if ( cy.get('.gh-content-entry-title') != ' ' ) {
//             eliminarPost();
//             borrarTodosPosts();
//         }
//     } );
// }

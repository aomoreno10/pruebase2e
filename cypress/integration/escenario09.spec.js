//Login - crear post - publicar post - cambiar acceso a post
//logout - ver posts publicados en home del blog

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost, cambiarAccesoPost, listarPostsBlog } from "./functions";


describe('Escenario 9', function () {
    it('login, crear post, publicar posts, cambiar acceso, logout, ver posts blog', function () {
        login();
        cy.wait(1000);
        crearPost('Post escenario 9', 'Contenido post escenario 9');
        cy.wait(1000);
        publicarPost();
        cy.wait(1000);
        cambiarAccesoPost();
        cy.wait(1000);
        logout();
        cy.wait(1000);
        listarPostsBlog();        
    })
})
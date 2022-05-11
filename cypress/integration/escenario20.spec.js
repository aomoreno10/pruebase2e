//Login - crear nuevo post - Listar post en interfaz administrador
//crear nuevo post - listar post en interfaz administrador
//post con contenido duplicado

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost, listarPostsAdmin } from "./functions";


describe('Escenario 20', function () {
    it('creación de post con contenido duplicado', function () {

        login();
        cy.screenshot('Escenario20_paso1_login')
        cy.wait(1000);
        crearPost('Post escenario 20', 'Contenido post escenario 20');
        cy.screenshot('Escenario20_paso2_crearPost')
        cy.wait(1000);
        listarPostsAdmin();
        cy.screenshot('Escenario20_paso3_listarPostsAdmin')
        cy.wait(1000);
        crearPost('Post escenario 20', 'Contenido post escenario 20');
        cy.screenshot('Escenario20_paso4_crearPost')
        cy.wait(1000);
        listarPostsAdmin();
        cy.screenshot('Escenario20_paso5_listarPostsAdmin')        
    })
})
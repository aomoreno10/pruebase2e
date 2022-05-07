//Ver los post publicados en el home del Blog - Login - Editar el contenido de un 
//post publicado -  Logout - Ver los post publicados en el home del Blog - Ver
//detalle de un post

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog } from "./functions";


describe('Escenario 6', function () {
    it('Ver posts blog, login, editar post, logout, ver posts blog, ver detalle post', function () {
        login();
        cy.wait(1000);
        crearPost('Prueba', 'texto de prueba escenario 6');
        cy.wait(1000);
        editarPost(' con Título editado', ' Contenido editado')
        cy.wait(1000);
        publicarPost();
        cy.wait(1000);
        logout();
        cy.wait(1000);
        cy.visit(URL);
        cy.wait(1000);
        verPostBlog();
    })
})
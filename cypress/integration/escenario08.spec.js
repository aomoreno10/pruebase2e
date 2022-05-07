//Login - Crear nuevo post - Listar posts en interfaz administrador
//Eliminar post - listar posts en interfaz administrador

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost } from "./functions";


describe('Escenario 8', function () {
    it('login, crear post, listar posts, eliminar post, listar posts', function () {
        login();
        cy.wait(1000);
        crearPost('Post escenario 8', 'Contenido post escenario 8');
        cy.wait(1000);
        eliminarPost();
    })
})
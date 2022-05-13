//Login - Editar el contenido de un post publicado -  Listar posts en interfaz de administrador

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost } from "./functions";


describe('Escenario 3', function () {
    it('Iniciar sesión, editar un post y listar post', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        login();
        cy.screenshot('Escenario3_paso1_login')
        cy.wait(1000);
        crearPost(postTitle, postBody);
        cy.screenshot('Escenario3_paso2_crearPost')
        cy.wait(1000);
        editarPost(' con Título editado', 'Contenido editado')
        cy.screenshot('Escenario3_paso3_editarPost')
        cy.wait(1000);
    })
})

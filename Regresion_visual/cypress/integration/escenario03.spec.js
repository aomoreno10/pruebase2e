//Login - Editar el contenido de un post publicado -  Listar posts en interfaz de administrador

import { GOSTH_VERSION } from "./env";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost } from "./functions";

describe('Escenario 3', function () {
    it('Iniciar sesión, editar un post y listar post', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        let json = {
            version : GOSTH_VERSION,
            escenario: "escenario03.spec.js",
            images: []
        };

        cy.wait(1000);
        login();
        cy.screenshot(GOSTH_VERSION + '/01_login', {overwrite: true})
        json.images.push('escenario03.spec.js/' + GOSTH_VERSION + '/01_login.png')
        cy.wait(1000);
        crearPost(postTitle, postBody);
        cy.screenshot(GOSTH_VERSION + '/02_crearPost', {overwrite: true})
        json.images.push('escenario03.spec.js/' + GOSTH_VERSION + '/02_crearPost.png')
        cy.wait(1000);
        editarPost(' con Título editado', 'Contenido editado')
        cy.screenshot(GOSTH_VERSION + '/03_editarPost', {overwrite: true})
        json.images.push('escenario03.spec.js/' + GOSTH_VERSION + '/03_editarPost.png')
        cy.wait(1000);

        let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
        cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
    })
})

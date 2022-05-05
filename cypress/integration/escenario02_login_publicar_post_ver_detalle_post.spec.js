import { login, crearPost, publicarPost, eliminarTodosLosPost } from "./functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    cy.wait(1000);
    login();
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.wait(1000);
    crearPost('Publicar post', 'Contenido nuevo post');
    cy.wait(1000);
    publicarPost();
  })
})
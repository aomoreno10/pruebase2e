import { login } from "./functions";


describe('E2E Ghost', function () {
  it('Escenario de prueba', function () {
    cy.wait(1000);
    login();
  })
})
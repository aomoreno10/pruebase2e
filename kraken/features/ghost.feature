Feature: Pruebas E2E en la pagina de ghost.

@user15 @web
Scenario: El usuario inicia sesión, elimina todos los posts y luego los lista.
Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 2 seconds
  And I click on post on lateral menu
  And I wait for 2 seconds
  And I delete all the available posts
  And I wait for 2 seconds
  Then I navigate to page "http://localhost:2368"
  And I wait for 2 seconds

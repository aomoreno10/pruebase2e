Feature: Registrarse en la pagina de ghost

@user1 @web
Scenario: Como administrador inicio sesion
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  Then I click next
  And I wait for 2 seconds

@user2 @web
Scenario: Crear un post
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click publish a post
  And I wait for 2 seconds
  And I click on the redact post title inputbox
  And I wait for 2 seconds
  And I enter post title'Mi primer post'
  And I wait for 2 seconds
  And I click on the redact post body inputbox
  And I wait for 2 seconds
  And I enter post body'Este es un post de prueba'
  And I click on the publish button
  And I wait for 2 seconds
  And I click on the publish button again
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds

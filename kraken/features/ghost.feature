Feature: Registrarse en la pagina de ghost

@user3 @web
Scenario: Login - crear post - visualizar post creado - editar post - visualizar post editado
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
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
  And I click on posts
  And I wait for 2 seconds
  And I click on published
  And I wait for 2 seconds
  And I click on the post title
  And I wait for 2 seconds
  And I click on the redact post title inputbox2
  And I wait for 2 seconds
  And I enter post edited title' Mi post editado'
  And I wait for 2 seconds
  And I click on update
  And I wait for 2 seconds
  And I click on the update button
  And I wait for 2 seconds
  And I click on posts2
  And I wait for 2 seconds
  And I click on published2
  And I wait for 2 seconds

  @user6 @web
  Scenario: Ver posts en blog - Login - Editar post - Logout - Ver posts en blog - Ver detalle post
  Given I navigate to page "http://localhost:2368/"
    And I wait for 5 seconds
    And I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I click on published2
    And I wait for 2 seconds
    And I click on the post title
    And I wait for 2 seconds
    And I click on the redact post title inputbox2
    And I wait for 2 seconds
    And I enter post edited title' Mi post editado para el escenario 6'
    And I wait for 2 seconds
    And I click on update
    And I wait for 2 seconds
    And I click on the update button
    And I wait for 2 seconds
    And I click on posts
    And I wait for 2 seconds
    And I click on the profile icon
    And I wait for 2 seconds
    And I click on logout
    And I navigate to page "http://localhost:2368/"
    And I see a post detail


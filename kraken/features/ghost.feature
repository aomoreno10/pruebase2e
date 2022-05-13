Feature: Pruebas E2E en la pagina de ghost.

@user1 @web
Scenario: 7. Como usuario inicio sesion, creo un post, no veo el post ya que no fue publicado
  Given I navigate to page "<URL_ADMIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I click next
  And I wait for 2 seconds
  And I open my posts
  And I wait for 2 seconds
  And I delete all the available posts
  And I wait for 2 seconds
  And I click on "New Post" button
  And I wait for 2 seconds
  And I type a post title "$string_1"
  And I wait for 2 seconds
  And I type a post body "$string_2"
  And I wait for 2 seconds
  And I go back to admin dashboard
  And I wait for 2 seconds
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
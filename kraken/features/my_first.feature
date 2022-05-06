Feature: Iniciar una conversación

@user1 @web
Scenario: Como primer usuario inicio sesion y mando un mensaje al usuario 2
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
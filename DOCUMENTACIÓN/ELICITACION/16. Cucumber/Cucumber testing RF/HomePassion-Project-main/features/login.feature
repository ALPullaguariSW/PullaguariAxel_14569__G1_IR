Feature: Login

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the tasks page

  Scenario: Failed login with incorrect email
    Given I am on the login page
    When I enter an incorrect email and a valid password
    And I click the login button
    Then I should see an error message for incorrect email

  Scenario: Failed login with incorrect password
    Given I am on the login page
    When I enter a valid email and an incorrect password
    And I click the login button
    Then I should see an error message for incorrect password

  Scenario: Failed login due to server error
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should see a server error message

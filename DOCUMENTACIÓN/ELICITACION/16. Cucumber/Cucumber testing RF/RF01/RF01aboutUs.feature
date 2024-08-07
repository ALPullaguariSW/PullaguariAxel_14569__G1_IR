Feature: Testing the About Us section

  Scenario: Viewing the About Us section
    Given the visitor has entered the website
    When the visitor selects the About Us option from the main menu
    Then the business information page is displayed correctly

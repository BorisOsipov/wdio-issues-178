Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given I am on the login page
    When I login with sd and sd
    Then I should see a flash message saying sd

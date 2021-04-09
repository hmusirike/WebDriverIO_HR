Feature: The Trading Account Service in the Interactive Investor Website.

  Scenario: To check the Trading Account Link is accessible from the Services

    Given I navigate to the Interactive Investor Website
    When I click on the Services dropdown in the top navigation bar
    And I click on the Trading Account link in the sub menu
    Then I should have landed on the expected trading account URL
    And The Trading Account page data is displaying correctly

Feature: User login

  Scenario: Successful login with valid credentials

    Given the user is on login page
    When the user enter valid email and password
    Then the user should see their email and password URL


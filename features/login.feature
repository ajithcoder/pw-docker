Feature: User login

  Background:
    Given the user is on login page

  Scenario Outline: Successful login with valid credentials
    When the user enter valid "<email>" and "<password>"
    Then the user should see their "<email>" and "<password>" in URL

    Examples:
      | email                  | password    |
      | test1@example.com      | pass123     |
      | john.smith@example.com |    1pass123 |
      | dave.smith@example.com | pass1234rer |

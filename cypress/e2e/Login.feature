@LoginValidation
Feature: UInsure Login Page

    Scenario Outline: Validate Login Submission
     
        Given I navigate to UInsure login Page
        And I type a valid email address '<userEmail>' and password '<userPassword>'
        And I click Sign in button
        Then I should see '<experience>'

        Examples:
            | userEmail               | userPassword | experience |
            | john.doe@uinsure.co.uk  | Password2    | Quote Page |
            | john.does@uinsure.co.uk | PAssword1    | Error      |

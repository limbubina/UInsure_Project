@SearchQuotes
Feature: Quote Search Feature

    Background: User is logged in and in Recent activity page
        Given I am logged with email address '<userEmail>' and password '<userPassword>'
        And I navigate to Recent Activity page
        Then I should be presented with Recent activity page

    @SearchByReference
    Scenario: Search Quotes By Using 3 character reference
        And I type my Reference
        And I click Search
        Then I should be displayed with Quotes matching the entered reference



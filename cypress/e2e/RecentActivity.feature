@SearchQuotes
Feature: Quote Search Feature

    Background: User is logged in and in Recent activity page
        Given I am logged with email address '<userEmail>' and password '<userPassword>'
        When I navigate to Recent Activity page
        Then I should be presented with Recent activity page

    @SearchForQuotes
    Scenario Outline: Search for Quotes
        And I type my '<searchText>' into the '<searchField>'
        And I click on the Search button
        Then I shoulds see the matching search results in '<column>' in Quotes table

        Examples:
            | searchText | searchField        | column |
            | UNI        | ReferenceTextField | 1      |
            | Ww         | ClientTextField    | 3      |
            | NG         | PostCodeTextField  | 4      |



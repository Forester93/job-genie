# restaurant-genie

* User Story

Feature:
As a user
I want to select a cuisine
So that I can see what restaurants are available near me

Given I navigate to github.io/restaurant-genie (some url)
When I hit enter
Then I am presented with the homepage

When I am on the homepage
Then I am presented with a welcoming message
AND I am presented with a cuisine drop down
AND I can see previous cuisine searches

When I click the cuisine drop down
Then I see a list of cuisines (Western, middle eastern, Asian)

Given I have selected a cuisine type from the drop down
When I hit search
Then I am taken to a results page
And I see 5 restaurants of the selected cuisine that are near me 
And I see a photo of each restaurant
And I see the name of each restaurant
And I see the type of cuisine 
[ext] And I see the restaurants sorted by distance
[ext] And I see the $$ indicator


Feature:
As a user
I want to know how I can get to the restaurant
So that I can get there

Mark: 
#WHEN I click on one of those restaurants
#THEN the application opens the location on the Maps services/GPS with directions to get there.

Feature:
As a user
I want to navigate through the pages of the application

Given I am on any page (homepage / search results page/ about page)
And I am on a desktop
When I scroll up to the top of the page
Then I am presented with a navigation bar with the menus HOME and ABOUT on the right hand side

When I am on a mobile device
Then the navigation bar will collapse and a hamburger icon is shown on the right hand side

Given I am on the navigation bar
WHEN I click Home
Then I am taken to the the home page

Given I am on the navigation bar
When I click About
Then I am taken to the about page

When I am on the About page
Then I am displayed with text of what the app is about

==================================================================

[EXTENSION]

Mark:

#WHEN I am able to select a cuisine
#THEN I want to be able to choose more than one cuisine at the same time.

Diana:
#GIVEN I select the type(s) of cuisine that I am interested in.
#AND I enter the location in the text field  ([ext] OR I can use the device location)
#WHEN I click search 
#THEN I am taken to a results page
#AND I see the restaurants of the selected cuisine(s) near the entered location

                                                                    
* Commits

1. Index.html for home page and results.html for searched cuisines page created. Some features include Bootstrap, Googlefonts.
2. Both htmls styled for large screen and mobile screen.
3. Function to load results page added when data is inputted in the home page.

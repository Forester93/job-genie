# restaurant-genie

## User Story
As a user
I want to search for a software job at a particular location
So that I can get my dream job


## Acceptance Criteria
Given an application with a location textfield and selection of programming languages
And I have entered a location
And I have selected "All Programming Jobs"
When I click Submit
Then I am taken to a results page
And I will see a list of jobs available in that location

Given the application has loaded
And I have previously made a search
When I navigate to "Last Searched"
Then I am presented with my last searched results

Given the application has loaded
But I have not previously made a search
When I navigate to "Last Searched"
Then I am presented with a message that no saved searches are found
And that I am redirected to the homepage

Given that the application has loaded
When I navigate to "About"
Then I am presented with information about the application
And information about team members



@tag
Feature: crossword website
  
  
  @tc_01
  Scenario: To Register in the website
   	Given I launched website
   	And I click on the my account button
   	When I enter my name
   	And I enter my email
   	And I enter my password
   	And I re_enter my password
   	And I enter my date of birth
   	And I click on my gender
	  And I click on submit button
   	
  @tc_02
  Scenario: Validating the login functionality  
   		Given I launched the website
   		When I Click on the login button
   		And I enter "<email>" and "<password>" 	
   		And I clicked on login button 
   		Then Homepage is displayed
  
  @tc_03
  Scenario: To open Stationary page
      Given I logged in to the website
      When I click on Stationary button
      Then I landed on stationary page
      
  @tc_04
  Scenario: To open my wishlist page
      Given I logged into the website
      When  I clicked on the my wishlist option
      And If my wishlist page is empty 
      Then I have to click the continue shopping option
  
 	 @tc_05
 	 Scenario: Validating logout functionality
 	     Given I logged into website
 	     When I click on the logout button
 	     Then I will be logged out successfully
   
     
   
Feature: Book The Hotel In Adactin Application

@login
Scenario: Sign-in In To Adactin Application
Given user Launch The Application
When user Enters The "Sathish11" In User Name Field
And user Enters The "CCY440" In Password Field
Then user Click On Login Button And It Navigates to Search Hotel Page

@SearchHotel
Scenario Outline: Search Hotel 
When user Select The Hotel Location From Location Field
And user Select The Hotel From Hotel Field
And user Select The Room Type From Room Type Field 
And user Select Number Of Rooms From Number Of Rooms Field
And user Enter The "<CheckIn Date>" In Check In Date Field 
And user Enter The "<CheckOut Date>" In Check Out Date Field 
And user Select Number Of Adults Per Room From Adults Per Room Field 
And user Select Number Of Children from Children Per Room Field 
Then user Click Search Button And It Will Navigate to Select Hotel Page

Examples:
	|CheckIn Date|CheckOut Date|
	|22/11/2021 |23/11/2021 |

@SelectHotel
Scenario: Select Hotel From The List Of Hotel
When user Select Hotel From The List Of Hotel
Then user click Continue And It Should Navigate to Book A Hotel Page 

@BookHotel
Scenario: Book A Hotel
When user Enters The First Name In The First Name Field 
And user Enters The Last Name In The Last Name Field 
And user Enters The Billing Address In The Billing Addres Field 
And user Enters The Credit Card No In The Credit Card No Field 
And user Select The Credit Card Type From Credit Card Type
And user Select Expire Month From Expire Date 
And user Select Expire Year From Expire Date 
And user Enters CVV Number In CVV Number Field
Then user Click Book Now And It Should Navigate To Booking Confirmation Page 

@Confirmation
Scenario: BooKing Confirmation Page 
Then user Select MyItinerary And It Should Navigate to Booked Itinerary

@MyItinerary
Scenario: Booked Itinerary Page 
Then user Click LogOut Button And Message Displays You have successfully logged out 



$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Feature_File/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Book The Hotel In Adactin Application",
  "description": "",
  "id": "book-the-hotel-in-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1219800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Sign-in In To Adactin Application",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;sign-in-in-to-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"Sathish11\" In User Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"CCY440\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button And It Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 3176185300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sathish11",
      "offset": 17
    }
  ],
  "location": "Step_Def.user_Enters_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 398666400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CCY440",
      "offset": 17
    }
  ],
  "location": "Step_Def.user_Enters_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 323239000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Login_Button_And_It_Navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1088621600,
  "status": "passed"
});
formatter.after({
  "duration": 288800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search Hotel",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;search-hotel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Select The Hotel Location From Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select The Hotel From Hotel Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select The Room Type From Room Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select Number Of Rooms From Number Of Rooms Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Enter The \"\u003cCheckIn Date\u003e\" In Check In Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Enter The \"\u003cCheckOut Date\u003e\" In Check Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select Number Of Adults Per Room From Adults Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select Number Of Children from Children Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Click Search Button And It Will Navigate to Select Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;search-hotel;",
  "rows": [
    {
      "cells": [
        "CheckIn Date",
        "CheckOut Date"
      ],
      "line": 23,
      "id": "book-the-hotel-in-adactin-application;search-hotel;;1"
    },
    {
      "cells": [
        "22/11/2021",
        "23/11/2021"
      ],
      "line": 24,
      "id": "book-the-hotel-in-adactin-application;search-hotel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 239500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search Hotel",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;search-hotel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Select The Hotel Location From Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select The Hotel From Hotel Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select The Room Type From Room Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select Number Of Rooms From Number Of Rooms Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Enter The \"22/11/2021\" In Check In Date Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Enter The \"23/11/2021\" In Check Out Date Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select Number Of Adults Per Room From Adults Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select Number Of Children from Children Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Click Search Button And It Will Navigate to Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel_Location_From_Location_Field()"
});
formatter.result({
  "duration": 290950500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel_From_Hotel_Field()"
});
formatter.result({
  "duration": 296458000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Room_Type_From_Room_Type_Field()"
});
formatter.result({
  "duration": 294338200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Number_Of_Rooms_From_Number_Of_Rooms_Field()"
});
formatter.result({
  "duration": 285936800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/11/2021",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Check_In_Date_Field(String)"
});
formatter.result({
  "duration": 260571400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/11/2021",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Check_Out_Date_Field(String)"
});
formatter.result({
  "duration": 228906300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Number_Of_Adults_Per_Room_From_Adults_Per_Room_Field()"
});
formatter.result({
  "duration": 161011300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Number_Of_Children_from_Children_Per_Room_Field()"
});
formatter.result({
  "duration": 255117400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_Search_Button_And_It_Will_Navigate_to_Select_Hotel_Page()"
});
formatter.result({
  "duration": 831372600,
  "status": "passed"
});
formatter.after({
  "duration": 118400,
  "status": "passed"
});
formatter.before({
  "duration": 159500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Select Hotel From The List Of Hotel",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;select-hotel-from-the-list-of-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@SelectHotel"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user Select Hotel From The List Of Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user click Continue And It Should Navigate to Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_Hotel_From_The_List_Of_Hotel()"
});
formatter.result({
  "duration": 168327500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_click_Continue_And_It_Should_Navigate_to_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 846240800,
  "status": "passed"
});
formatter.after({
  "duration": 118000,
  "status": "passed"
});
formatter.before({
  "duration": 156600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Book A Hotel",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@BookHotel"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user Enters The First Name In The First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Enters The Last Name In The Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enters The Billing Address In The Billing Addres Field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enters The Credit Card No In The Credit Card No Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select The Credit Card Type From Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Select Expire Month From Expire Date",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Select Expire Year From Expire Date",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Enters CVV Number In CVV Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Click Book Now And It Should Navigate To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enters_The_First_Name_In_The_First_Name_Field()"
});
formatter.result({
  "duration": 278019100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enters_The_Last_Name_In_The_Last_Name_Field()"
});
formatter.result({
  "duration": 277043600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enters_The_Billing_Address_In_The_Billing_Addres_Field()"
});
formatter.result({
  "duration": 165738700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enters_The_Credit_Card_No_In_The_Credit_Card_No_Field()"
});
formatter.result({
  "duration": 281696200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Credit_Card_Type_From_Credit_Card_Type()"
});
formatter.result({
  "duration": 286816700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Expire_Month_From_Expire_Date()"
});
formatter.result({
  "duration": 282447800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Expire_Year_From_Expire_Date()"
});
formatter.result({
  "duration": 274964300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enters_CVV_Number_In_CVV_Number_Field()"
});
formatter.result({
  "duration": 263650900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_Book_Now_And_It_Should_Navigate_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 152700300,
  "status": "passed"
});
formatter.after({
  "duration": 125700,
  "status": "passed"
});
formatter.before({
  "duration": 141400,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "BooKing Confirmation Page",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Confirmation"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user Select MyItinerary And It Should Navigate to Booked Itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_MyItinerary_And_It_Should_Navigate_to_Booked_Itinerary()"
});
formatter.result({
  "duration": 7338075200,
  "status": "passed"
});
formatter.after({
  "duration": 117100,
  "status": "passed"
});
formatter.before({
  "duration": 126300,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Booked Itinerary Page",
  "description": "",
  "id": "book-the-hotel-in-adactin-application;booked-itinerary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@MyItinerary"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user Click LogOut Button And Message Displays You have successfully logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_LogOut_Button_And_Message_Displays_You_have_successfully_logged_out()"
});
formatter.result({
  "duration": 863232700,
  "status": "passed"
});
formatter.after({
  "duration": 65400,
  "status": "passed"
});
});
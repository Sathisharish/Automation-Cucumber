package com.Step_Definition;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.BDD_Base_class.Base_Class;
import com.POMsdp.AdactinPOM;
import com.PropertyFile.AdactinFileReaderManager;
import com.TestRunner.Adacting_Runner_BDD;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Def extends Base_Class {

	public Logger log = Logger.getLogger(Step_Def.class);

	public static WebDriver driver = Adacting_Runner_BDD.driver;
	public static AdactinPOM apom = new AdactinPOM(driver);

	@Before
	public void tagName(Scenario s) {

		String name = s.getName();
		System.out.println("Tag Name " + name);
		System.out.println("Scenario Started");
	}

	@After
	public void status(Scenario s) throws IOException {

		if (s.isFailed()) {

			screenShot("failed");
		} else {
			String status = s.getStatus();
			System.out.println("Status is " + status);

		}

	}

	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {

		String url = AdactinFileReaderManager.getAdactinFRM().getAdactinCR().getUrl();
		url(url);

		log.info("URL launced sucessfully");

		impWait(10);

	}

	@When("^user Enters The \"([^\"]*)\" In User Name Field$")
	public void user_Enters_The_In_User_Name_Field(String userName) throws Throwable {
		action("lc", apom.getInstanceAlp().getUname());

		input(apom.getInstanceAlp().getUname(), userName);

	}

	@When("^user Enters The \"([^\"]*)\" In Password Field$")
	public void user_Enters_The_In_Password_Field(String pass) throws Throwable {

		action("lc", apom.getInstanceAlp().getPsw());

		input(apom.getInstanceAlp().getPsw(), pass);
	}

	@Then("^user Click On Login Button And It Navigates to Search Hotel Page$")
	public void user_Click_On_Login_Button_And_It_Navigates_to_Search_Hotel_Page() throws Throwable {

		action("lc", apom.getInstanceAlp().getLog());
		log.info("login sucessfully");

		impWait(10);

	}

	@When("^user Select The Hotel Location From Location Field$")
	public void user_Select_The_Hotel_Location_From_Location_Field() throws Throwable {

		action("lc", apom.getInstanceSh().getLoc());
		click(apom.getInstanceSh().getSelect());
	}

	@When("^user Select The Hotel From Hotel Field$")
	public void user_Select_The_Hotel_From_Hotel_Field() throws Throwable {
		action("lc", apom.getInstanceSh().getHotel());

		click(apom.getInstanceSh().getHotelSelect());

	}

	@When("^user Select The Room Type From Room Type Field$")
	public void user_Select_The_Room_Type_From_Room_Type_Field() throws Throwable {

		action("lc", apom.getInstanceSh().getRoom());

		click(apom.getInstanceSh().getType());

	}

	@When("^user Select Number Of Rooms From Number Of Rooms Field$")
	public void user_Select_Number_Of_Rooms_From_Number_Of_Rooms_Field() throws Throwable {

		action("lc", apom.getInstanceSh().getRoomNo());

		click(apom.getInstanceSh().getOption());

	}

	@When("^user Enter The \"([^\"]*)\" In Check In Date Field$")
	public void user_Enter_The_In_Check_In_Date_Field(String checkInDate) throws Throwable {
		click(apom.getInstanceSh().getDateIn());
		clear(apom.getInstanceSh().getDateIn());
		input(apom.getInstanceSh().getDateIn(), checkInDate);
	}

	@When("^user Enter The \"([^\"]*)\" In Check Out Date Field$")
	public void user_Enter_The_In_Check_Out_Date_Field(String checkOutDate) throws Throwable {
		click(apom.getInstanceSh().getDateOut());
		clear(apom.getInstanceSh().getDateOut());
		input(apom.getInstanceSh().getDateOut(), checkOutDate);
	}

	@When("^user Select Number Of Adults Per Room From Adults Per Room Field$")
	public void user_Select_Number_Of_Adults_Per_Room_From_Adults_Per_Room_Field() throws Throwable {

		click(apom.getInstanceSh().getaRoom());

		click(apom.getInstanceSh().getRoomOption());

	}

	@When("^user Select Number Of Children from Children Per Room Field$")
	public void user_Select_Number_Of_Children_from_Children_Per_Room_Field() throws Throwable {

		action("lc", apom.getInstanceSh().getcRoom());

		click(apom.getInstanceSh().getcRoomopt());
	}

	@Then("^user Click Search Button And It Will Navigate to Select Hotel Page$")
	public void user_Click_Search_Button_And_It_Will_Navigate_to_Select_Hotel_Page() throws Throwable {

		action("lc", apom.getInstanceSh().getSubmit());

		impWait(10);

		log.info("Hotel search sucessfull");

	}

	@When("^user Select Hotel From The List Of Hotel$")
	public void user_Select_Hotel_From_The_List_Of_Hotel() throws Throwable {

		action("lc", apom.getInstanceSeh().getRadioButton());

	}

	@Then("^user click Continue And It Should Navigate to Book A Hotel Page$")
	public void user_click_Continue_And_It_Should_Navigate_to_Book_A_Hotel_Page() throws Throwable {

		action("lc", apom.getInstanceSeh().getCont());

		impWait(10);

		log.info("Hotel selected sucessfully");

	}

	@When("^user Enters The First Name In The First Name Field$")
	public void user_Enters_The_First_Name_In_The_First_Name_Field() throws Throwable {

		action("lc", apom.getInstanceBh().getFirstName());

		String firstName = AdactinFileReaderManager.getAdactinFRM().getAdactinCR().getFirstName();
		input(apom.getInstanceBh().getFirstName(), firstName);

	}

	@When("^user Enters The Last Name In The Last Name Field$")
	public void user_Enters_The_Last_Name_In_The_Last_Name_Field() throws Throwable {

		action("lc", apom.getInstanceBh().getLastName());

		String lastName = AdactinFileReaderManager.getAdactinFRM().getAdactinCR().getLastName();
		input(apom.getInstanceBh().getLastName(), lastName);

	}

	@When("^user Enters The Billing Address In The Billing Addres Field$")
	public void user_Enters_The_Billing_Address_In_The_Billing_Addres_Field() throws Throwable {
		action("movceto", apom.getInstanceBh().getAdd());

		String address = AdactinFileReaderManager.getAdactinFRM().getAdactinCR().getAddress();
		input(apom.getInstanceBh().getAdd(), address);

	}

	@When("^user Enters The Credit Card No In The Credit Card No Field$")
	public void user_Enters_The_Credit_Card_No_In_The_Credit_Card_No_Field() throws Throwable {

		action("lc", apom.getInstanceBh().getCcNum());

		String cardNumber = AdactinFileReaderManager.getAdactinFRM().getAdactinCR().getCardNumber();
		System.out.println(cardNumber.length());
		input(apom.getInstanceBh().getCcNum(), cardNumber);
	}

	@When("^user Select The Credit Card Type From Credit Card Type$")
	public void user_Select_The_Credit_Card_Type_From_Credit_Card_Type() throws Throwable {
		action("lc", apom.getInstanceBh().getCcType());

		click(apom.getInstanceBh().getCcOptions());

	}

	@When("^user Select Expire Month From Expire Date$")
	public void user_Select_Expire_Month_From_Expire_Date() throws Throwable {
		action("lc", apom.getInstanceBh().getExpMonth());

		click(apom.getInstanceBh().getExpOptions());

	}

	@When("^user Select Expire Year From Expire Date$")
	public void user_Select_Expire_Year_From_Expire_Date() throws Throwable {

		action("lc", apom.getInstanceBh().getExpYear());

		click(apom.getInstanceBh().getYearOptions());

	}

	@When("^user Enters CVV Number In CVV Number Field$")
	public void user_Enters_CVV_Number_In_CVV_Number_Field() throws Throwable {

		action("lc", apom.getInstanceBh().getCvv());
		String cvv = AdactinFileReaderManager.getAdactinFRM().getAdactinCR().getCvv();
		System.out.println(cvv.length());
		input(apom.getInstanceBh().getCvv(), cvv);
	}

	@Then("^user Click Book Now And It Should Navigate To Booking Confirmation Page$")
	public void user_Click_Book_Now_And_It_Should_Navigate_To_Booking_Confirmation_Page() throws Throwable {
		action("lc", apom.getInstanceBh().getBook());

		impWait(10);

		log.info("hotel booked sucessfully ");

	}

	@Then("^user Select MyItinerary And It Should Navigate to Booked Itinerary$")
	public void user_Select_MyItinerary_And_It_Should_Navigate_to_Booked_Itinerary() throws Throwable {
		action("lc", apom.getInstanceMi().getItinerary());

		screenShot("Adactin booking runner");

		impWait(10);

	}

	@Then("^user Click LogOut Button And Message Displays You have successfully logged out$")
	public void user_Click_LogOut_Button_And_Message_Displays_You_have_successfully_logged_out() throws Throwable {
		click(apom.getInstanceLo().getLogout());

		screenShot("Adactin logout pom");

	}

}

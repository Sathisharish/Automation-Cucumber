package com.TestRunner;

import org.junit.AfterClass;   
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.BDD_Base_class.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\Feature_File\\Adactin.feature",

		glue = "com.Step_Definition",
		
		dryRun = false,
		
		strict = true,
		
		monochrome = true,
		
		plugin = {
				
				"html:Report/Adactin report",
			//	"pretty",
				"json:Reports/Adactin_json report.json",
				"com.cucumber.listener.ExtentCucumberFormatter: Extend report/ext.html"
		}
	//	tags = ("@login,@SearchHotel")

)
public class Adacting_Runner_BDD {

	public static WebDriver driver;

	@BeforeClass
	public static void Set_Up() {

		driver = Base_Class.launchDriver("chrome");
		Base_Class.maximizeWindow();

	}

	@AfterClass
	public static void Tear_Down() {

		Base_Class.quit("quit");

	}

}

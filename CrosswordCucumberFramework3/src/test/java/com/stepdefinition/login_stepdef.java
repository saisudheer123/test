package com.stepdefinition;



import org.apache.log4j.Logger;

import com.baseclass.library;
import com.pages.Login_page;
import com.seleniumutil.SeleniumUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login_stepdef extends library
{
	Logger LOG = Logger.getLogger("devpinoyLogger");
	Login_page lp;
	@Given("^I launched the website$")
	public void i_launched_the_website() throws Throwable 
	{
	    launch_browser();
	    LOG.info("browser is launched");
	}

	@When("^I Click on the login button$")
	public void i_Click_on_the_login_button() throws Throwable 
	{
	   lp=new Login_page(dr);
	   lp.Login();
	   LOG.info("login page opened");
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String arg1, String arg2) throws Throwable 
	{
		lp=new Login_page(dr);
		lp.Name("sudheeraluri@gmail.com");
		lp.Password("sudheer@123");
		LOG.info("login details entered");
	}

	@When("^I clicked on login button$")
	public void i_clicked_on_login_button() throws Throwable 
	{
		lp=new Login_page(dr);
		lp.Login_Btn();
		LOG.info("submit button clicked");
	}

	@Then("^Homepage is displayed$")
	public void homepage_is_displayed() throws Throwable 
	{
		SeleniumUtil su= new SeleniumUtil(dr);
		   su.take_screenshot("C:\\Users\\lenovo\\eclipse-workspace\\CrosswordCucumberFramework\\src\\test\\resources\\screenshots\\homepage.png");
	    LOG.info("loginpage screenshot is taken");
	}
	
}

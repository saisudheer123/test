package com.stepdefinition;

import org.apache.log4j.Logger;

import com.baseclass.library;
import com.pages.Login_page;
import com.pages.Stationary_page;
import com.seleniumutil.SeleniumUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stationary_stepdef extends library
{
	Logger LOG = Logger.getLogger("devpinoyLogger");
	Stationary_page sp;
	@Given("^I logged in to the website$")
	public void i_logged_in_to_the_website() throws Throwable 
	{
	   launch_browser();
	   Login_page lp=new Login_page(dr);
	   lp.do_login("sudhakarraoaluri@gmail.com","sudha@123");
	   Thread.sleep(900);
	    LOG.info("login page is opened");
	}

	@When("^I click on Stationary button$")
	public void i_click_on_Stationary_button() throws Throwable 
	{
	   sp=new Stationary_page(dr);
	   sp.Stationary();
	   Thread.sleep(900);
	   LOG.info("stationary page is cliked");
	}

	@Then("^I landed on stationary page$")
	public void i_landed_on_stationary_page() throws Throwable 
	{
		SeleniumUtil su= new SeleniumUtil(dr);
		   su.take_screenshot("C:\\Users\\lenovo\\eclipse-workspace\\CrosswordCucumberFramework\\src\\test\\resources\\screenshots\\stationarypage.png");
		   LOG.info("stationary page screenshot is taken");
	}
}

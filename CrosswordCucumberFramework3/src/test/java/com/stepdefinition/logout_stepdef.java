package com.stepdefinition;

import org.apache.log4j.Logger;

import com.baseclass.library;
import com.pages.Login_page;
import com.pages.Logout_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class logout_stepdef extends library
{
	Logger LOG = Logger.getLogger("devpinoyLogger");
	Logout_page lo;
	@Given("^I logged into website$")
	public void i_logged_into_website() throws Throwable 
	{
	  launch_browser();
	  Login_page lp=new Login_page(dr);
	  lp.do_login("sudhakarraoaluri@gmail.com", "sudha@123");
	  Thread.sleep(900);
	  LOG.info("loginpage is opened");
	}

	@When("^I click on the logout button$")
	public void i_click_on_the_logout_button() throws Throwable 
	{
	    lo=new Logout_page(dr);
	    Thread.sleep(900);
	    lo.Logout_Btn();
	    LOG.info("logout button is clicked");
	}

	@Then("^I will be logged out successfully$")
	public void i_will_be_logged_out_successfully() throws Throwable 
	{
		lo=new Logout_page(dr);
	    lo.Logout_Btn();
	    LOG.info("recieved that i logged out");
	}

}

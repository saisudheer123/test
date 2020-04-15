package com.stepdefinition;

import org.apache.log4j.Logger;

import com.baseclass.library;
import com.pages.Register_page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class register_stepdef  extends library
{
	Logger LOG = Logger.getLogger("devpinoyLogger");
	Register_page rp;
	@Given("^I launched website$")
	public void i_launched_website() throws Throwable 
	{
	  launch_browser();
	    LOG.info("browser is opened");
	}

	@Given("^I click on the my account button$")
	public void i_click_on_the_my_account_button() throws Throwable 
	{
	   rp=new Register_page(dr);
	   rp.MyAccount();
	   Thread.sleep(900);
	    LOG.info("register page is opened");
	}

	@When("^I enter my name$")
	public void i_enter_my_name() throws Throwable 
	{
		rp=new Register_page(dr);
		rp.name("sai");
		 Thread.sleep(900);
		    LOG.info("name is entered");
	}

	@When("^I enter my email$")
	public void i_enter_my_email() throws Throwable 
	{
		rp=new Register_page(dr);
		rp.email("alurisai@gmail.com");
		   LOG.info("email is entered");
	}

	@When("^I enter my password$")
	public void i_enter_my_password() throws Throwable 
	{
		rp=new Register_page(dr);
		rp.password("sudhr@123");
		   LOG.info("password is entered");
	}

	@When("^I re_enter my password$")
	public void i_re_enter_my_password() throws Throwable 
	{
		rp=new Register_page(dr);
		rp.cnfm_pwd("sudhr@123");
		   LOG.info("password is re-entered");
	}

	@When("^I enter my date of birth$")
	public void i_enter_my_date_of_birth() throws Throwable 
	{
		rp=new Register_page(dr);
		rp.dob("10/01/1998");
		   LOG.info("dob is entered");
	}

	@When("^I click on my gender$")
	public void i_click_on_my_gender() throws Throwable 
	{
		rp=new Register_page(dr);
		rp.gender();
		   LOG.info("gender is clicked");
	}

	@When("^I click on submit button$")
	public void i_click_on_submit_button() throws Throwable 
	{
		rp=new Register_page(dr);
		rp.reg_btn();
		   LOG.info("registration become successful");
	}
}

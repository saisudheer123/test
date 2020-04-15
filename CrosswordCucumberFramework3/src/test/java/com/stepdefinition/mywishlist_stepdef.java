package com.stepdefinition;

import org.apache.log4j.Logger;

import com.baseclass.library;
import com.pages.Login_page;
import com.pages.MyWishList_page;
import com.seleniumutil.SeleniumUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class mywishlist_stepdef extends library
{
	Logger LOG = Logger.getLogger("devpinoyLogger");
	MyWishList_page wp;
	@Given("^I logged into the website$")
	public void i_logged_into_the_website() throws Throwable 
	{
		launch_browser();
	    Login_page lp=new Login_page(dr);
	    lp.do_login("sudhakarraoaluri@gmail.com", "sudha@123");
	    Thread.sleep(900);
	    LOG.info("login page is opened");
	}

	@When("^I clicked on the my wishlist option$")
	public void i_clicked_on_the_my_wishlist_option() throws Throwable 
	{
	    wp=new MyWishList_page(dr);
	    Thread.sleep(900);
		wp.WishList();
		LOG.info("wishlist page is cliked");
	}

	@When("^If my wishlist page is empty$")
	public void if_my_wishlist_page_is_empty() throws Throwable 
	{
		SeleniumUtil su= new SeleniumUtil(dr);
		   su.take_screenshot("C:\\Users\\lenovo\\eclipse-workspace\\CrosswordCucumberFramework\\src\\test\\resources\\screenshots\\mywishlistpage.png");
		   LOG.info("if wishlist page is empty then take a screenshot");
	}

	@Then("^I have to click the continue shopping option$")
	public void i_have_to_click_the_continue_shopping_option() throws Throwable 
	{
	   wp.ContinueShop();
	   LOG.info("continue shopping page is cliked");
	}
}

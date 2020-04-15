package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Logout_page 
{
    WebDriver dr;
	  
	  By logout_btn1=By.className("logout");
      public Logout_page(WebDriver dr)
      {
    	  this.dr=dr;
      }
      public void Logout_Btn()
      {
    	  dr.findElement(logout_btn1).click();
      }
}

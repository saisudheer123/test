package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Stationary_page 
{
  WebDriver dr;
  
  By stationary = By.xpath("//*[@id=\"nav-menu-915599\"]/ul/li[3]/a");
  public Stationary_page(WebDriver dr)
  {
	  this.dr=dr;
  }
  
  public void Stationary()
  {
	  dr.findElement(stationary).click();
  }
  
}

package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Login_page 
{
  WebDriver dr;
  
  By login=By.xpath("//*[@id=\"hd\"]/div/div/div/div[1]/div/div[2]/div[1]/a[2]");
  By name=By.id("user_session_email");
  By password=By.id("user_session_password");
  By lgn_btn=By.id("user_session_submit");
  
  public Login_page(WebDriver dr)
  {
	  this.dr=dr;
  }
  public void Login()
  {
	  dr.findElement(login).click();
  }
  public void Name(String NAME)
  {
	  dr.findElement(name).sendKeys(NAME);
  }
  public void Password(String PWD)
  {
	  dr.findElement(password).sendKeys(PWD);
  }
  public void Login_Btn()
  {
	  dr.findElement(lgn_btn).click();
  }
  
  public void do_login(String NAME,String PWD)
  {
	  this.Login();
	  this.Name(NAME);
	  this.Password(PWD);
	  this.Login_Btn();
  }
}

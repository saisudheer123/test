package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyWishList_page 
{
  WebDriver dr;
  
  By continueshop=By.xpath("//*[@id=\"shopping-cart-items\"]/div/a");
  By wishlist=By.linkText("My Wish List");
  public MyWishList_page(WebDriver dr)
  {
	  this.dr=dr;
  }
  
  public void WishList()
  {
	 dr.findElement(wishlist).click();
  }
  public void ContinueShop()
  {
	  dr.findElement(continueshop).click();
  }
 }
  


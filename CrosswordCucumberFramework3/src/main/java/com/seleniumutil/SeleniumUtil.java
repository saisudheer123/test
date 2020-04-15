package com.seleniumutil;

import java.io.File;
import java.io.IOException;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class SeleniumUtil 
{
	WebDriver dr;
	
	public SeleniumUtil(WebDriver dr) 
	{
		this.dr=dr;
	}
	
	public void take_screenshot(String path) throws IOException 
	{
	File source= ((TakesScreenshot)(dr)).getScreenshotAs(OutputType.FILE);	
	FileUtils.copyFile(source, new File(path));
	}
}
package com.baseclass;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class library 
{
    public WebDriver dr;
    Properties prop;
    
    public void launch_browser() throws IOException
    {
    	String filename="C:\\Users\\lenovo\\eclipse-workspace\\CrosswordCucumberFramework\\src\\test\\resources\\config.property\\configuration.property";
        FileInputStream config_file= new FileInputStream(filename);
        prop=new Properties();
        prop.load(config_file);
        
        String browser_name=prop.getProperty("browser");
        
        if(browser_name.equalsIgnoreCase("chrome"))
        {
        	System.setProperty("webdriver.chrome.driver", "C:\\Users\\lenovo\\eclipse-workspace\\CrosswordCucumberFramework\\src\\test\\resources\\drivers\\chromedriver.exe");
            dr= new ChromeDriver();
        }
        else if(browser_name.equalsIgnoreCase("firefox"))
        {
        	System.setProperty("webdriver.gecko.driver", "C:\\Users\\lenovo\\eclipse-workspace\\CrosswordCucumberFramework\\src\\test\\resources\\drivers\\geckodriver.exe");
            dr=new FirefoxDriver();
        }
        dr.manage().window().maximize();
        String url=prop.getProperty("url");
        dr.get(url);
    }
}

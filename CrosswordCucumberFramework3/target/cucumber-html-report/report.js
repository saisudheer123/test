$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/lenovo/eclipse-workspace/CrosswordCucumberFramework/src/test/resources/features/a.feature");
formatter.feature({
  "line": 3,
  "name": "crossword website",
  "description": "",
  "id": "crossword-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#@tc_01"
    },
    {
      "line": 7,
      "value": "#Scenario: To Register in the website"
    },
    {
      "line": 8,
      "value": "#\tGiven I launched website"
    },
    {
      "line": 9,
      "value": "#\tAnd I click on the my account button"
    },
    {
      "line": 10,
      "value": "#\tWhen I enter my name"
    },
    {
      "line": 11,
      "value": "#\tAnd I enter my email"
    },
    {
      "line": 12,
      "value": "#\tAnd I enter my password"
    },
    {
      "line": 13,
      "value": "#\tAnd I re_enter my password"
    },
    {
      "line": 14,
      "value": "#\tAnd I enter my date of birth"
    },
    {
      "line": 15,
      "value": "#\tAnd I click on my gender"
    },
    {
      "line": 16,
      "value": "#\t  And I click on submit button"
    },
    {
      "line": 17,
      "value": "#"
    }
  ],
  "line": 19,
  "name": "Validating the login functionality",
  "description": "",
  "id": "crossword-website;validating-the-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@tc_02"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I launched the website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "login_stepdef.i_launched_the_website()"
});
formatter.result({
  "duration": 22010005553,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER\u0027, ip: \u0027192.168.43.162\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55454}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 00f356c9a5e81fcb31ba1807bfbdb425\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseclass.library.launch_browser(library.java:38)\r\n\tat com.stepdefinition.login_stepdef.i_launched_the_website(login_stepdef.java:17)\r\n\tat ✽.Given I launched the website(C:/Users/lenovo/eclipse-workspace/CrosswordCucumberFramework/src/test/resources/features/a.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "login_stepdef.i_Click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 9
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 23
    }
  ],
  "location": "login_stepdef.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_stepdef.i_clicked_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_stepdef.homepage_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "To open Stationary page",
  "description": "",
  "id": "crossword-website;to-open-stationary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc_03"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I logged in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on Stationary button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I landed on stationary page",
  "keyword": "Then "
});
formatter.match({
  "location": "stationary_stepdef.i_logged_in_to_the_website()"
});
formatter.result({
  "duration": 13650998297,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER\u0027, ip: \u0027192.168.43.162\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55494}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 260a5588c6af5b46489b2e7327483490\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"hd\"]/div/div/div/div[1]/div/div[2]/div[1]/a[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pages.Login_page.Login(Login_page.java:21)\r\n\tat com.pages.Login_page.do_login(Login_page.java:38)\r\n\tat com.stepdefinition.stationary_stepdef.i_logged_in_to_the_website(stationary_stepdef.java:20)\r\n\tat ✽.Given I logged in to the website(C:/Users/lenovo/eclipse-workspace/CrosswordCucumberFramework/src/test/resources/features/a.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stationary_stepdef.i_click_on_Stationary_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stationary_stepdef.i_landed_on_stationary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "To open my wishlist page",
  "description": "",
  "id": "crossword-website;to-open-my-wishlist-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tc_04"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I logged into the website",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I clicked on the my wishlist option",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "If my wishlist page is empty",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I have to click the continue shopping option",
  "keyword": "Then "
});
formatter.match({
  "location": "mywishlist_stepdef.i_logged_into_the_website()"
});
formatter.result({
  "duration": 17508460868,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER\u0027, ip: \u0027192.168.43.162\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55529}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5b03ce786a5c2b44eceb05fcb8f2137a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseclass.library.launch_browser(library.java:38)\r\n\tat com.stepdefinition.mywishlist_stepdef.i_logged_into_the_website(mywishlist_stepdef.java:18)\r\n\tat ✽.Given I logged into the website(C:/Users/lenovo/eclipse-workspace/CrosswordCucumberFramework/src/test/resources/features/a.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "mywishlist_stepdef.i_clicked_on_the_my_wishlist_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mywishlist_stepdef.if_my_wishlist_page_is_empty()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mywishlist_stepdef.i_have_to_click_the_continue_shopping_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Validating logout functionality",
  "description": "",
  "id": "crossword-website;validating-logout-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@tc_05"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I logged into website",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I click on the logout button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I will be logged out successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "logout_stepdef.i_logged_into_website()"
});
formatter.result({
  "duration": 17458809269,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER\u0027, ip: \u0027192.168.43.162\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55566}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 858cb35116b985552e5a2b4ca3249f5c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseclass.library.launch_browser(library.java:38)\r\n\tat com.stepdefinition.logout_stepdef.i_logged_into_website(logout_stepdef.java:18)\r\n\tat ✽.Given I logged into website(C:/Users/lenovo/eclipse-workspace/CrosswordCucumberFramework/src/test/resources/features/a.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "logout_stepdef.i_click_on_the_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "logout_stepdef.i_will_be_logged_out_successfully()"
});
formatter.result({
  "status": "skipped"
});
});
# WebdriverIO

Introduction:

WebdriverIO is a test automation framework that allows you to run tests based on the Webdriver protocol and Appium automation technology. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs, BrowserStack etc.,

Packages:

Core

webdriver - A Node.js bindings implementation for the W3C WebDriver and Mobile JSONWire Protocol.
webdriverio - Next-gen browser and mobile automation test framework for Node.js
@wdio/cli - A WebdriverIO testrunner command line interface.

Helper

@wdio/selenium-standalone-service - A WebdriverIO service that automatically sets up a selenium standalone server
@wdio/cucumber-framework - Adapter for Cucumber testing framework
@wdio/spec-reporter - A WebdriverIO plugin to report in spec style
@wdio/local-runner - A WebdriverIO runner to run tests locally
@wdio/sync - A WebdriverIO plugin. Helper module to run WebdriverIO commands synchronously
@wdio-chromedriver-service - A service helps to run ChromeDriver seamlessly when running tests with the WDIO testrunner
@babel/preset-env - A smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms
@babel/cli - A Babel built-in CLI which can be used to compile files from the command line
@babel/core - A Babel compiler core
@babel/register - A require hook, that will bind node's require method and automatically transpile the file on the fly

Installation/Set-up:

Pre-requisities

Install Java and set the environment variable JAVA_HOME
Node.js (NODE_PATH)
NPM
Visual Studio Code
Cucumber Framework

To get Started:

Clone the repository "WebDriverIO_HR" from git and install the node modules using the below command

    npm install

And to run the tests please use the below command,

    npx wdio run wdio.conf.js

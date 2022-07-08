# Use Case - QA Engineer 

## Number 1
Number one is under the folder TestplanAndTestCases. it is in pdf format and this is because it involved drawng of tables ad diagrams which would be abit time consuming to do in markdown.
## Number 2
Write an E2E test for the happy path of the checkout flow (we'd be happy if you use Cypress JS. If you're not comfortable with it, feel free to use another tool you prefer)
* url: : https://staging-beta.on-running.com

# Framework Used
## Page Object Model using Cypress
Page Object Model, also known as POM, is a design pattern where we create an object repository for storing all web elements.In Page Object Model, consider each web page of an application as a class file. Each class file will contain only corresponding web page elements. Using these elements, we can perform operations on the application under test.

### Why Page Object model?
* It is useful in reducing code duplication and improves test case maintenance.
* Helps with reusing code
* It eases readability and reliability of scripts:

### Tools used.
* Visual Studio code

### Dependencies used in the framework
* Cypress 10
* node
* npm
 
### Programming language used
* javascript

### To test Project locally, 
* Clone repository at git@github.com:AllanTumu/Use_Case_Allan_Tumuhimbise.git
* Have node and npm installed.
* Navigate to EndToEndTests directory.
* Install the node modules by going to the terminal and run command `npm install -g node-modules`
* install cypress by going to the terminal and run command `npm install cypress --save-dev`
* To run tests in one spec file with the Graphical User Interface open, navigate to the terminal and run `npm run test`. A graphical user intaface will open where you can click on the one specific test you want to run.
* To run test in headless mode (without opening browser on GUI), navigate to the terminal and run `npm run headless`.

### Test Scenarios:
Scenario 1 (SC_001). Validate that a user can successfully Order aproduct
- Verify that a user can select category (Men, Women, Technology, Stories, Athletes)
** Expected Condition: User should be able to successfully Select category
- Verify that products are displayed when a user chooses a certain category
** Expected Condition: Only products from a particular category should be displayed once a user selects a category
- Verify that when a user hovers over a product, the quick add button is showed
** Expected Condition: Quick add button should be displayed when a user hovers on a product.
- Verify that size selection is shown when a user taps quick add.
** Expected Condition: The available sizes should be shown when a user taps the quick add button
- Verify that the product is added to cart when a user selects the shoe size.
** Expected Condition: Product should be added to cart when user selects shoes size
- Verify that check out button is active and user proceeds to checkout once clicked.
** Expected Condition: The checkout button should be active and should proceed to the checkout screen once clicked.
- Verify that the user can add the shipping information..
** Expected Condition: user should be able to add all the required information.
- Verify that the show shipping options button becomes active when a user fills in all the required information.
** Expected Condition: Show shipping options button should become active when the user fills in all the required information.
- Verify that the user is shown the Delivery method when they click Show Delivery Options.
** Expected Condition: Delivery methods should be displayed when a user taps on Show Delivery options.
- Verify that the user proceeds to Payments when they click Continue to Payment.
** Expected Condition: User should be directed to the payment screen when they click on the Click on the Continue Payment screen.
- Verify that the user can place order after adding the card details
** Expected Condition: User should be able to add card details and place an order.
- Verify that the success message is shown when use successfully places an order
** Expected Condition: Success message should be shown when the user successfully places an order. 

 
 #### NB: Project was designed using latest cypress (Cypress 10) so for better testing, it would be better to test with the lastest cypress. 

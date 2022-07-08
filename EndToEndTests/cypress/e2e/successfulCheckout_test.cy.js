/**
 * Created by Allan Tumuhimbise
 * Test case - Successful checkout.
 * Visit https://staging-beta.on-running.com
 * Input user name
 * input password
 * Signin
 * Select category
 * Select product
 * Add to cart
 * Enter email
 * Enter Shipping information
 * Enter card details
 * Checkout.
 */

/// <reference types="cypress" />

import LoginPage from "../page_objects/login_page/loginpage_objects";
import CategoryPage from "../page_objects/category_page/categorypage_objects.js";
import AddShippingInformationPage from "../page_objects/shippingInformation_page/addShippingInformationpage_objects";

// import CategoryPage from '../page_objects/category_page/categorypage_objects'
describe("Test suite", function () {
  it("Add product to cart", function () {
    //intialize objects
    const lp = new LoginPage();
    const cp = new CategoryPage();
    const addInfo = new AddShippingInformationPage();
    //Launch the on-running staging environment
    lp.visit();
    //Select Mens category and verify user is directed to section
    cp.selectMenCategory();
    cy.fixture("test_data.json").then((title) => {
      cp.verifyMenMerchandise(title.mens_title);
    });
    // Hoveer over cloud 5 shoe
    cp.hooverOverProduct();
    // Tap Quick Add
    cp.clickQuickAddButton();
    // Select size 43
    cp.selectSize43();
    // Click checkout checkout_button
    cp.clickCheckOutButton();
    // Enter email address
    cy.fixture("credentials.json").then((data) => {
      addInfo.enterEmail(data.user_email);
    });
    //Click continue to shipping button
    addInfo.ClickContinueToShippingButton();
    //input shipping information
    cy.fixture("credentials.json").then((data) => {
      addInfo.enter_first_name(data.user_firstname);
      addInfo.enter_last_name(data.user_lastname);
      addInfo.enter_street_address(data.user_streetaddress);
      addInfo.enter_postal_code(data.user_postcode);
      addInfo.enter_city(data.user_city);
      addInfo.enter_phone_number(data.user_phone);
    });
    // Click Show shipping options button
    addInfo.clickShowShippingOptionsButton();
    // Click Continue to payments button
    addInfo.clickContinueToPaymentButton();

    //Enter card details
    cy.fixture("cards.json").then((card) => {
      addInfo.enter_card_number(card.amex_card_number);
      addInfo.enter_card_expiry_date(card.amex_expiry_date);
      addInfo.enter_card_cvv(card.amex_cvv);
      addInfo.enter_card_holders_name(card.amex_holder_name);
    });
    // Click Place your order button
    addInfo.clickPlaceYourOrderButton();

    //VerifyOrderDetails
    cy.fixture("test_data.json").then((data) => {
      addInfo.verifyOrderSummary(data.data_order_summary_title);
      addInfo.verifyProductName(data.shoe_name);
    });
    //VerifyCustomerDetails
    cy.fixture("credentials.json").then((user) => {
      addInfo.VerifyCustomersDetails(
        user.user_firstname,
        user.user_lastname,
        user.user_streetaddress
      );
    });
  });
});

/**
 * Created by Allan Tumuhimbise
 * This file includes the page objects and page actions for adding the shipping information.
 */

/// <reference types="cypress" />

class AddShippingInformationPage {
  //Enter Shipping information
  enterEmail(user_email) {
    const email_address_input = cy
      .get('input[name="email-address"]')
      .should("be.visible");
    email_address_input.clear();
    email_address_input.type(user_email);
  }
  ClickContinueToShippingButton() {
    const continue_to_shipping_button = cy
      .get("button")
      .contains("Continue to Shipping");
    continue_to_shipping_button.click();
  }
  enter_first_name(user_firstname) {
    const firstname_input = cy
      .get('input[name="first-name"]')
      .should("be.visible");
    firstname_input.clear();
    firstname_input.type(user_firstname);
  }
  enter_last_name(user_lastname) {
    const lastname_input = cy
      .get('input[name="last-name"]')
      .should("be.visible");
    lastname_input.clear();
    lastname_input.type(user_lastname);
  }
  enter_street_address(user_streetaddress) {
    const streetaddress_input = cy
      .get('input[name="street-address"]')
      .should("be.visible");
    streetaddress_input.clear();
    streetaddress_input.type(user_streetaddress);
  }
  enter_postal_code(user_postcode) {
    const postal_code_input = cy
      .get('input[name="post-code"]')
      .should("be.visible");
    postal_code_input.clear();
    postal_code_input.type(user_postcode);
  }
  enter_city(user_city) {
    const city_input = cy.get('input[name="city"]').should("be.visible");
    city_input.clear();
    city_input.type(user_city);
  }
  enter_phone_number(user_phone) {
    const phone_input = cy.get('input[type="tel"]').should("be.visible");
    phone_input.clear();
    phone_input.type(user_phone);
  }
  clickShowShippingOptionsButton() {
    const show_shipping_option_button = cy
      .get(".button")
      .contains("Show Shipping Options");
    show_shipping_option_button.click();
  }
  // Continue to Payment
  clickContinueToPaymentButton() {
    const continue_to_payment_button = cy.contains("Continue to Payment");
    continue_to_payment_button.click();
  }
  // Enter card details
  enter_card_number(amex_card_number) {
    cy.get(
      'iframe[src="https://checkoutshopper-test.adyen.com/checkoutshopper/securedfields/pub.v2.8214954670220932.aHR0cHM6Ly9zdGFnaW5nLWJldGEub24tcnVubmluZy5jb20.idGhf5WW2aVEef8TzfXvJTog70NRNn8ALogFY_LZig8/3.2.0/securedFields.html?type=card"]'
    )
      .eq(0)
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then((body) => {
        cy.wrap(body)
          .find("#encryptedCardNumber")
          .click({ force: true })
          .should("be.focused")
          .type(amex_card_number);
      });
  }
  enter_card_expiry_date(amex_expiry_date) {
    cy.get(
      'iframe[src="https://checkoutshopper-test.adyen.com/checkoutshopper/securedfields/pub.v2.8214954670220932.aHR0cHM6Ly9zdGFnaW5nLWJldGEub24tcnVubmluZy5jb20.idGhf5WW2aVEef8TzfXvJTog70NRNn8ALogFY_LZig8/3.2.0/securedFields.html?type=card"]'
    )
      .eq(1)
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then((body) => {
        cy.wrap(body)
          .find('input[placeholder="MM/YY"]')
          .click({ force: true })
          .should("be.focused")
          .type(amex_expiry_date);
      });
  }
  enter_card_cvv(amex_cvv) {
    cy.get(
      'iframe[src="https://checkoutshopper-test.adyen.com/checkoutshopper/securedfields/pub.v2.8214954670220932.aHR0cHM6Ly9zdGFnaW5nLWJldGEub24tcnVubmluZy5jb20.idGhf5WW2aVEef8TzfXvJTog70NRNn8ALogFY_LZig8/3.2.0/securedFields.html?type=card"]'
    )
      .eq(2)
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then((body) => {
        cy.wrap(body)
          .find("#encryptedSecurityCode")
          .click({ force: true })
          .should("be.focused")
          .type(amex_cvv);
      });
  }
  enter_card_holders_name(amex_holder_name) {
    const card_holder_name_input = cy
      .get('input[name="nameoncard"]')
      .should("be.visible");
    card_holder_name_input.clear();
    card_holder_name_input.type(amex_holder_name);
  }
  // Click Place your order button
  clickPlaceYourOrderButton() {
    const place_your_order_button = cy.contains("Place your Order");
    place_your_order_button.click();
  }
  selectAddAGiftCardOption() {
    const gift_card_button = cy.contains("Add a Gift Card");
    gift_card_button.click();
  }

  //Add giftcard cardNumber
  addGiftCardNumber(amex_card_number) {
    cy.get("iframe[title='Iframe for secured card data input field']")
      .its("0.contentDocument.head")
      .should("not.be.empty")
      .then((head) => {
        cy.wrap(head)
          .find("#encryptedCardNumber")
          .click({ force: true })
          .type(amex_card_number);
      });
  }

  // Select pay later options
  selectPayLaterOption() {
    const pay_later_option = cy.contains("Pay later");
    pay_later_option.click();
  }
  // Click Pay Later button
  clickPayLaterButton() {
    const pay_later_button = cy.get("button").contains("Pay later");
    pay_later_button.click();
  }
  clickBuyButton() {
    const buy_button = cy.contains("Buy");
    buy_button.click();
  }
  enter_date_of_birth(user_date_of_birth) {
    const date_of_birth = cy.get('input[name="dateOfBirth"]');
    date_of_birth.type(user_date_of_birth);
  }
  //Select title
  selectTitle() {
    const title_dropdown = cy.get('select[name="title"]');
    title_dropdown.click();
  }
  //Choose Mr
  chooseMr() {
    const mr_option = cy.get('option[label="Mr"]');
    mr_option.click();
  }
  //Click confirm button
  clickConfirmButton() {
    const confirm_button = cy.get("button").contains("Confirm");
    confirm_button.click();
  }
  //Assert Order has been placed
  verifyOrderSummary(data_order_summary_title) {
    const order_summary_title = cy.get("h3");
    order_summary_title.should("contain.text", data_order_summary_title);
  }
  verifyProductName(shoe_name) {
    const product_name = cy.get("a");
    product_name.should("contain.text", shoe_name);
  }
  VerifyCustomersDetails(user_firstname, user_lastname, user_streetaddress) {
    const customers_first_name = cy.contains(user_firstname);
    customers_first_name.should("contain.text", user_firstname);
    const customers_last_name = cy.contains(user_lastname);
    customers_last_name.should("contain.text", user_lastname);
    const customers_street_address = cy.contains(user_streetaddress);
    customers_street_address.should("contain.text", user_streetaddress);
  }
}
export default AddShippingInformationPage;

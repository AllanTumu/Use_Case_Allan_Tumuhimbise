/**
 * Created by Allan Tumuhimbise
 * This file includes the page objects and page actions selecting category.
 */

/// <reference types="cypress" />

class CategoryPage {
    selectMenCategory() {
      const men_link = cy.get('a').contains('Men')
      men_link.click()
    }
    verifyMenMerchandise(mens_title) {
        const men_merchandise_title = cy.get('.title-box__title')
        men_merchandise_title.contains(mens_title)
    }
    hooverOverProduct() {
        const cloud_5 = cy.contains('Cloud 5')
        cloud_5.trigger('mouseover')
    }
    clickQuickAddButton() {
        const quick_add_button = cy.contains('Cloud 5').contains('Quick add')
        quick_add_button.click()
    }
    selectSize43() {
        const size_43 = cy.get('[data-index="1"]').contains('43')
        size_43.click()
    }
    clickCheckOutButton() {
        const checkout_button = cy.get('a').contains('Checkout')
        checkout_button.click()
    }
  }
  export default CategoryPage;
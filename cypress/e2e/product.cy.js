describe('', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('display products', () => {
        cy.wait(1000)
        cy.get('#giftCardImg').should('have.length', 1)
    })

    it('add product to chart', () => {
        cy.get('#AddToCartBtn').click()
        cy.contains('In Cart').should('be.visible')
    })
    it('remove product to chart', () => {
        cy.get('#AddToCartBtn').click()
        cy.contains('Remove').should('be.visible')
        cy.get('#RemoveFromCartBtn').click()
        cy.contains('Add to Cart').should('be.visible')
    })

    it('should click on shopping cart icon', () => {
        cy.get('#shoppingCartBtn').click()
        cy.contains('Shopping List').should('be.visible')
    })

    it('should open detail page', () => {
        cy.wait(1000)
        cy.get('#giftCardImg').click()
        cy.get('#detailsContainer').should('have.class', 'details_main_container')
    })
})
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-plugin-xhr-toggle';
import 'cypress-real-events';
import "@frsource/cypress-plugin-visual-regression-diff";
export const login = (username, password) => {
    username = username || Cypress.env('USERNAME');
    password = password || Cypress.env('PASSWORD');
    cy.session(
        username,
        () => {
            cy.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false;
            });
            // Place write a process to login
            // cy.visit('https://example.login.com/login?service=' + Cypress.env('BASE'));

            // cy.get('#username').type(username);
            // cy.get('#password').type(password);
            // cy.get('.login-button').click();
        },
        {
            cacheAcrossSpecs: true,
        },
    );
};

import { login } from '../../support/e2e.js';
describe('测试', () => {
    beforeEach(() => {
        login();
        cy.visit('/');
    });

    it('测试', () => {
        
    })
});

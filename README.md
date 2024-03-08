# Cypress Test Template

1. init repo

```sh
git lfs install

npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"

pnpm i

pnpm e2e --system=ui.dev # start system

```

2.  Add System tag 

```js
// scripts/start.js
/** 环境配置 */
const config = {
    // system tag
    ui: {
        // environment tag
        dev: 'https://localhost:6066',
        uat: 'https://uat.example.com',
    },
};
```

3. implement login method in `cypress/support/e2e.js`

You can create a default login username and password in `.env` file.

```js
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
```

4. Start System 

```sh
pnpm e2e --system=ui.dev # start system
```
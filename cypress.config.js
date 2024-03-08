const { defineConfig } = require('cypress');
require('dotenv').config();
const { initPlugin } = require('@frsource/cypress-plugin-visual-regression-diff/plugins');
console.log(process.env.BASE);

module.exports = defineConfig({
    e2e: {
        baseUrl: process.env.BASE,
        setupNodeEvents(on, config) {
            try{
                initPlugin(on, config);
            }catch(e){
                console.error(e)
            }
            // Add plugin import here 👇
            require('cypress-recorder')(on, config);
            
        },
    },
    viewportWidth: 1280, // 浏览器窗口宽度
    viewportHeight: 720, // 浏览器窗口高度
    // 请在 .env 文件里面写入
    // USERNAME=
    // PASSWORD=

    env: { ...process.env, hideXhr: true },
});

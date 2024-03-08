const lodash = require('lodash');
const args = require('args');
args.option('system', '启动系统 ui.dev');
const flags = args.parse(process.argv);

/** 环境配置 */
const config = {
    ui: {
        dev: 'https://localhost:6066',
        uat: 'https://uat.example.com',
    },
};

const system = lodash.get(config, flags.system);
console.log('环境信息', flags.system, system);
process.env.BASE = system;

const cypress = require('cypress');
cypress.open();

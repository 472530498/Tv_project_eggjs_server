'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1546933970332_4464';

    // add your config here
    config.middleware = [];

    config.mysql = {
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '123456',
            database:'tv_project'
        },
        app: true,
        agent: false,
    };

    config.security = {
        csrf: { enable:false},
        domainWhiteList: ['http://localhost:8080']
    }

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    }
    return config;
};

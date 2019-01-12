'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('insert', '/api/posts/insert', controller.post.insert);
    router.post('/commonModel/stateManager/login', controller.commonModel.stateManager.login);
    router.post('/commonModel/stateManager/insert', controller.commonModel.stateManager.insertAdmin);
};

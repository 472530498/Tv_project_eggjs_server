'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.post('/commonModel/stateManager/login', controller.commonModel.stateManager.login);
    router.post('/commonModel/stateManager/insertAdmin', controller.commonModel.stateManager.insertAdmin);
    // router.post('/commonModel/stateManager/insertUser', controller.commonModel.stateManager.insertUser);
    router.get('/commonModel/videoManager/selectVideoAll', controller.commonModel.videoManager.selectVideoAll);
    router.post('/commonModel/videoManager/selectVideoFromTo', controller.commonModel.videoManager.selectVideoFromTo);
    router.post('/commonModel/videoManager/insertVideo', controller.commonModel.videoManager.insertVideo);
    router.post('/commonModel/videoManager/updateVideo', controller.commonModel.videoManager.updateVideo);
    router.post('/commonModel/stateManager/changeAdminPassword', controller.commonModel.stateManager.changeAdminPassword);
    router.get('/commonModel/videoManager/deleteVideo/:video_source_id', controller.commonModel.videoManager.deleteVideo);
    router.get('/commonModel/stateManager/selectAllAdmin', controller.commonModel.stateManager.selectAllAdmin);
    router.post('/commonModel/stateManager/changeActionId', controller.commonModel.stateManager.changeActionId);
    router.post('/commonModel/userManager/insertUser', controller.commonModel.userManager.insertUser)
    router.post('/commonModel/userManager/login', controller.commonModel.userManager.login)
    router.get('/commonModel/stateManager/deleteAdmin/:admin_rid', controller.commonModel.stateManager.deleteAdmin)
};

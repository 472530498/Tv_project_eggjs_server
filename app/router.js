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
    router.get('/commonModel/videoManager/deleteVideo/:video_source_id', controller.commonModel.videoManager.deleteVideo);
};

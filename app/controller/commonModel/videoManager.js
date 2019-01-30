const Controller = require('egg').Controller;
const ResponseConstans = require('../../utils/ResponseConstans');
const MyResult = require('../../model/MyResult')
class VideoManagerController extends Controller {
    async selectVideoAll () {
        const { ctx } = this;
        const { } = ctx.request.body;
        const myResult = new MyResult()
        try {
            const data = await ctx.service.commonModel.videoManager.selectVideoAll();
            if (data === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('数据为空').setData(data)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('查询成功').setData(data)
            ctx.body = myResult.getResult()
        }catch (e) {
            console.log(e);
            console.log("失败");
            myResult.setResultCode(ResponseConstans.FAIL).setResultMsg('查询失败').setData(e)
            ctx.body = myResult.getResult()
            return
        }
    }

    async insertVideo () {
        const { ctx } = this;
        const { insertData } = ctx.request.body;
        const myResult = new MyResult()
        try{
            // const insertData = ctx.request.query.insertData;
            // console.log(password)
            const data = await ctx.service.commonModel.videoManager.insertVideo(insertData)
            if (data === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('更新失败').setData(data)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('更新成功').setData(data)
            ctx.body = myResult.getResult()
        }catch (e) {
            console.log(e);
            console.log("失败");
            myResult.setResultCode(ResponseConstans.FAIL).setResultMsg('失败').setData(e)
            ctx.body = myResult.getResult()
            return
        }
    }

    async updateVideo () {
        const { ctx } = this;
        const { vid, insertData } = ctx.request.body;
        const myResult = new MyResult()
        try{
            const data = await ctx.service.commonModel.videoManager.updateVideo(vid, insertData)
            if (data === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('更新失败').setData(data)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('更新成功').setData(data)
            ctx.body = myResult.getResult()
        }catch (e) {
            console.log(e);
            console.log("失败");
            myResult.setResultCode(ResponseConstans.FAIL).setResultMsg('失败').setData(e)
            ctx.body = myResult.getResult()
            return
        }
    }

    async deleteVideo () {
        const { ctx } = this;
        const vid = ctx.request.query.vid;
        try{
            const data = await ctx.service.commonModel.videoManager.deleteVideo(vid)
            if (data === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('删除失败').setData(data)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('删除成功').setData(data)
            ctx.body = myResult.getResult()
        }catch (e) {
            console.log(e);
            console.log("失败");
            myResult.setResultCode(ResponseConstans.FAIL).setResultMsg('失败').setData(e)
            ctx.body = myResult.getResult()
            return
        }
    }
}

module.exports = VideoManagerController;

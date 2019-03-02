const Controller = require('egg').Controller;
const ResponseConstans = require('../../utils/ResponseConstans');
const MyResult = require('../../model/MyResult')
class VideoManagerController extends Controller {
    async selectVideoAll () {
        const { ctx } = this;
        const { } = ctx.request.body;
        const myResult = new MyResult()
        try {
            const result = await ctx.service.commonModel.videoManager.selectVideoAll();
            if (result === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('数据为空').setData(result)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('查询成功').setData(result)
            ctx.body = myResult.getResult()
        }catch (e) {
            console.log(e);
            console.log("失败");
            myResult.setResultCode(ResponseConstans.FAIL).setResultMsg('查询失败').setData(e)
            ctx.body = myResult.getResult()
            return
        }
    }

    async selectVideoFromTo () {
        const { ctx } = this;
        const { limit, offset } = ctx.request.body;
        const myResult = new MyResult()
        try {
            const result = await ctx.service.commonModel.videoManager.selectVideoFromTo(limit, offset);
            if (result === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('数据为空').setData(result)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('查询成功').setData(result)
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
        console.log(insertData)
        const myResult = new MyResult()
        try{
            // const insertData = ctx.request.query.insertData;
            // console.log(password)
            const result = await ctx.service.commonModel.videoManager.insertVideo(insertData)
            if (result === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('新增失败').setData(result)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('新增成功').setData(result)
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
        const { updateData } = ctx.request.body;
        const myResult = new MyResult()
        try{
            const result = await ctx.service.commonModel.videoManager.updateVideo(updateData)
            if (result === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('更新失败').setData(result)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('更新成功').setData(result)
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
        const vid = ctx.params.video_source_id;
        const myResult = new MyResult()
        try{
            if (typeof vid === 'undefined') {
                throw new Error('vid none exist')
            }
            const result = await ctx.service.commonModel.videoManager.deleteVideo(vid)
            if (result === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('删除失败').setData(result)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('删除成功').setData(result)
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

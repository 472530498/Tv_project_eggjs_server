const Controller = require('egg').Controller;
const ResponseConstans = require('../../utils/ResponseConstans');
const MyResult = require('../../model/MyResult')
class UserController extends Controller {
    async selectVideoAll () {
        const { ctx } = this;
        const { } = ctx.request.body;
        const myResult = new MyResult()
        try {
            const result = await ctx.service.commonModel.videoManager.selectVideoAll();
            console.log(result)
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
            console.log(result)
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

    async insertUser () {
        const { ctx } = this;
        const { insertData } = ctx.request.body;
        console.log(insertData)
        const myResult = new MyResult()
        try{
            // const insertData = ctx.request.query.insertData;
            // console.log(password)
            const result = await ctx.service.commonModel.userService.insertUser(insertData)
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

    async login() {
        let self = this
        console.log('in login')
        const { ctx } = this;
        const { userid } = ctx.request.body;
        console.log(userid)
        const myResult = new MyResult()
        try {
            const data = await ctx.service.commonModel.userService.login(userid);
            if (data === null) {
                myResult.setResultCode(ResponseConstans.SELECT_FAIL).setResultMsg('未匹配').setData(data)
                ctx.body = myResult.getResult()
                return
            }
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('成功').setData(data)
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

module.exports = UserController;

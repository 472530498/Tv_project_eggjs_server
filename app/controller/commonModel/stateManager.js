const Controller = require('egg').Controller;
const ResponseConstans = require('../../utils/ResponseConstans');
const MyResult = require('../../model/MyResult')
class StateManagerController extends Controller {
    async login() {
        let self = this
        console.log('in login')
        const { ctx } = this;
        const { userid, password } = ctx.request.body;
        const myResult = new MyResult()
        try {
            const data = await ctx.service.commonModel.stateManager.login(userid, password);
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
    async insertAdmin () {
        const { ctx } = this;
        const myResult = new MyResult()
        let res
        try{
            let password = ctx.request.query.password;
            if (typeof password === 'undefined') {
                password = '000000' // 增加管理员的默认密码
                console.log('接收增加管理成员请求,为默认密码,时间:    ' + new Date())
            }
            res = await ctx.service.commonModel.stateManager.insertAdmin(password);
            myResult.setResultCode(ResponseConstans.SUCCESS).setResultMsg('增加成功').setData(res)

        }catch (e) {
            console.log("失败")
            console.log(e)
            ctx.response.body = "失败";
            myResult.setResultCode(ResponseConstans.FAIL).setResultMsg('增加失败').setData(e)
        }
        ctx.body = myResult.getResult()
    }

    async changeAdminPassword () {
        const { ctx } = this;
        const { updateData } = ctx.request.body;
        const myResult = new MyResult()
        try{
            const old = updateData.old
            const row = {
                admin_rid: updateData.admin_rid,
                admin_password: updateData.admin_password
            };
            const result = await ctx.service.commonModel.stateManager.changeAdminPassword(row, old)
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

    async selectAllAdmin () {
        const { ctx } = this;
        const { } = ctx.request.body;
        const myResult = new MyResult()
        try {
            const result = await ctx.service.commonModel.stateManager.selectAllAdmin();
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

    async changeActionId () {
        const { ctx } = this;
        const { updateData } = ctx.request.body;
        const myResult = new MyResult()
        try{
            const result = await ctx.service.commonModel.stateManager.changeActionId(updateData)
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

    async deleteAdmin () {
        const { ctx } = this;
        const vid = ctx.params.admin_rid;
        const myResult = new MyResult()
        try{
            if (typeof vid === 'undefined') {
                throw new Error('vid none exist')
            }
            const result = await ctx.service.commonModel.stateManager.deleteAdmin(vid)
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

module.exports = StateManagerController;

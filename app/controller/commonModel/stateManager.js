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
        // const self = this
        let res = '1231312'
        try{
            const password = ctx.request.query.password;
            console.log(password)
            res = await ctx.service.commonModel.stateManager.insertAdmin(password);
            // console.log(self.res)
        }catch (e) {
            console.log("失败")
            console.log(e)
            ctx.response.body = "失败";
        }
        ctx.response.body = res;
    }

    async index() {
        this.ctx.body = 'hi, egg';
        // ctx.response.body = "hi";
    }
}

module.exports = StateManagerController;

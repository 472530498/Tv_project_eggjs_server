const getRandomID = require('../../utils/idUtil');
const Controller = require('egg').Controller;
class StateManagerController extends Controller {
    async login() {
        console.log('in login')
        const { ctx } = this;
        const { userid, password } = ctx.request.body;
        console.log(userid)
        console.log(password)
        try {
            const user = await ctx.service.commonModel.stateManager.login(userid, password);
            ctx.body = {
                data: user,
                message: 'success',
            };
        }catch (e) {
            console.log(e);
            console.log("失败");
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

const getRandomID = require('../../utils/idUtil');
const uuidv1 = require('uuid/v1');
const Service = require('egg').Service;
class UserService extends Service {
    // 默认不需要提供构造函数。
    constructor(ctx) {
        super(ctx); // 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
        // 就可以直接通过 this.ctx 获取 ctx 了
        // 还可以直接通过 this.app 获取 app 了
    }

    async insertUser(insertData) {
        if (typeof insertData.user_rid === 'undefined') {
            throw new Error("insert-fail");
        }
        const result = await this.app.mysql.insert('user', {
            user_rid: insertData.user_rid,
            user_name: insertData.user_name,
            user_password: insertData.user_password,
            user_phoneNmnber: insertData.user_phoneNmnber,
            user_videoSaveStrObj: insertData.user_videoSaveStrObj
        })
        // 判断插入成功
        const insertSuccess = result.affectedRows === 1;
        if (!insertSuccess) {
            throw new Error("insert-fail");
        }
        return result
    }

    async login(user_rid) {
        console.log(user_rid)
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('user', { user_rid: user_rid });
        if (typeof user === "undefined") {
            throw new Error("Non-existent");
        }
        return user
    }
}
module.exports = UserService;

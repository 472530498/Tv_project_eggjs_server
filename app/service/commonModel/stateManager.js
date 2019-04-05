const getRandomID = require('../../utils/idUtil');

const Service = require('egg').Service;
class AdminService extends Service {
    // 默认不需要提供构造函数。
    constructor(ctx) {
      super(ctx); // 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
      // 就可以直接通过 this.ctx 获取 ctx 了
      // 还可以直接通过 this.app 获取 app 了
    }
    async login(admin_rid, passowrd) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const admin = await this.app.mysql.get('admin_manager', { admin_rid: admin_rid, admin_password: passowrd });
        if (typeof admin === "undefined") {
            throw new Error("Non-existent");
        }
        return admin
    }

    async insertAdmin(password) {
        const admin_rid = getRandomID(8)
        const result = await this.app.mysql.insert('admin_manager',  { admin_rid: admin_rid, admin_password: password });
        const insertSuccess = result.affectedRows === 1;
        if (!insertSuccess) {
            throw new Error("insert-fail");
        }
        result['admin_rid'] = admin_rid
        return result
    }
}
module.exports = AdminService;

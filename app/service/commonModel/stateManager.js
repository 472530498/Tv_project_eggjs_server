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

    async changeAdminPassword (updateData, old) {
        console.log('changeAdminPassword', updateData)
        const options = {
            where: {
                admin_rid: updateData.admin_rid,
                admin_password: old
            }
        };
        const postId = 1;
        const result = await this.app.mysql.query('update admin_manager set admin_password = \'' + updateData.admin_password + '\' where admin_rid = \'' + updateData.admin_rid + '\' and admin_password = \'' + old + '\'', [1, postId]);
        // const result = await this.app.mysql.update('admin_manager', updateData, options)
        // 判断更新成功
        const updateSuccess = result.affectedRows === 1;
        if (!updateSuccess) {
            throw new Error("Non-existent");
        }
        return result
    }

    async selectAllAdmin () {
        const result = await this.app.mysql.select('admin_manager', { // 搜索 post 表
            columns: ['admin_rid', 'admin_username', 'admin_created_time', 'admin_action_id', 'admin_action_name'], // 要查询的表字段
        });
        if (typeof result === "undefined") {
            throw new Error("Non-existent");
        }
        return result
    }

    async changeActionId (updateData) {
        const options = {
            where: {
                admin_rid: updateData.admin_rid
            }
        };
        const result = await this.app.mysql.update('admin_manager', updateData, options)
        // 判断更新成功
        const updateSuccess = result.affectedRows === 1;
        if (!updateSuccess) {
            throw new Error("Non-existent");
        }
        return result
    }

    async deleteAdmin(admin_rid) {
        console.log(admin_rid)
        const result = await this.app.mysql.delete('admin_manager', {
            admin_rid: admin_rid,
        })
        console.log(result)
        if (result.affectedRows === 0) {
            throw new Error("Non-existent");
        }
        return result
    }
}
module.exports = AdminService;

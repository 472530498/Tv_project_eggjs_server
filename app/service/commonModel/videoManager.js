const getRandomID = require('../../utils/idUtil');
const uuidv1 = require('uuid/v1');
const Service = require('egg').Service;
class VideoService extends Service {
    // 默认不需要提供构造函数。
    constructor(ctx) {
      super(ctx); // 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
      // 就可以直接通过 this.ctx 获取 ctx 了
      // 还可以直接通过 this.app 获取 app 了
    }

    async selectVideoAll() {
        const result = await this.app.mysql.select('video')
        if (typeof result === "undefined") {
            throw new Error("Non-existent");
        }
        return result
    }

    async insertVideo(insertData) {
        const result = await this.app.mysql.insert('video', {
                video_source_id: uuidv1(),
                video_name: insertData.video_name,
                video_url: insertData.video_url,
                video_created_time: new Date()
            })
        // 判断插入成功
        const insertSuccess = result.affectedRows === 1;
        if (!insertSuccess) {
            throw new Error("insert-fail");
        }
        return result
    }

    async updateVideo(updateData) {
        console.log(updateData)
        const options = {
            where: {
                video_source_id: updateData.video_source_id
            }
        };
        updateData.video_created_time = new Date()
        const result = await this.app.mysql.update('video', updateData, options)
        // 判断更新成功
        const updateSuccess = result.affectedRows === 1;
        if (!updateSuccess) {
            throw new Error("Non-existent");
        }
        return result
    }

    async deleteVideo(video_source_id) {
        console.log(video_source_id)
        const result = await this.app.mysql.delete('video', {
            video_source_id: video_source_id,
        })
        console.log(result)
        if (result.affectedRows === 0) {
            throw new Error("Non-existent");
        }
        return result
    }
}
module.exports = VideoService;

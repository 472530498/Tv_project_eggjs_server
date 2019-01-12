const uuidv1 = require('uuid/v1');
const moment = require('moment')
const Controller = require('egg').Controller;
class PostController extends Controller {
    async create() {
        const { ctx } = this;
        ctx.body =  {
            title: '名字',
            urls: [
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah'
            ]
        }
    }
    async get() {
        const { ctx } = this;
        ctx.body =  {
            title: '名字',
            urls: [
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah'
            ]
        }
    }
    async insert () {
        // const uuid = this.app.uuid.v4()
        const result = await this.app.mysql.insert('video', {
            video_source_id: uuidv1(),
            video_name: '名词',
            video_url: 'http://akjdlkaskda.mp4',
            video_created_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
        const insertSuccess = result.affectedRows === 1;
        console.log('insertSuccess', insertSuccess)
        const { ctx } = this;
        ctx.body =  {
            insertSuccess: insertSuccess,
            urls: [
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah',
                'http:127.0.0.1:8080/hahah'
            ]
        }
    }
}

module.exports = PostController;

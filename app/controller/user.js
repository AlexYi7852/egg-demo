
const Controller = require('egg').Controller
const { SuccessModel, ErrorModel } = require('../model/resModel')

class UserController extends Controller {
    async login () {
        const { ctx } = this
        const { username, password } = ctx.request.body
        const data = await ctx.service.user.login(username, password)
        if (data.username) {
            // 设置 session
            ctx.session.username = data.username
            ctx.body = new SuccessModel()
            return
        }
        ctx.body = new ErrorModel('登陆失败')
    }
}

module.exports = UserController
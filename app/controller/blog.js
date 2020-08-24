
const Controller = require('egg').Controller
const { SuccessModel, ErrorModel } = require('../model/resModel')

class BlogController extends Controller {
    async list () {
        const { ctx } = this
        let author = ctx.request.query.author || ''
        let id = ctx.request.query.id || ''
        if (ctx.request.query.isadmin) {
            // 管理员界面
            if (ctx.session.username == null) {
                // 未登录
                ctx.body = new ErrorModel('未登录')
                return
            }
            // 强制查询自己的博客
            author = ctx.session.username
        }
        const list = await ctx.service.blog.getList(author, id)
        ctx.body = new SuccessModel(list)
    }
    async detail () {
        const { ctx } = this
        const data = await ctx.service.blog.getDetail(ctx.request.query.id)
        ctx.body = new SuccessModel(data)
    }
    async news () {
        const { ctx } = this
        ctx.request.body.author = ctx.session.username
        const data = await ctx.service.blog.newBlog(ctx.request.body)
        ctx.body = new SuccessModel(data)
    }
    async update () {
        const { ctx } = this
        const val = await ctx.service.blog.updateBlog(ctx.request.query.id, ctx.request.body)
        ctx.body = val ? new SuccessModel() : new ErrorModel('更新博客失败')
    }
    async delete () {
        const { ctx } = this
        const val = await ctx.service.blog.deleteBlog(ctx.request.query.id)
        ctx.body = val ? new SuccessModel('删除成功') : new ErrorModel('删除博客失败')
    }
}

module.exports = BlogController
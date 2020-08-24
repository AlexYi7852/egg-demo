
const Controller = require('egg').Controller

class ProductController extends Controller {
    async index () {
        const { ctx } = this
        const data = await ctx.service.product.index()
        ctx.body = data
    }
    async create () {
        this.ctx.body = this.ctx.request.body
    }
    async detail () {
        this.ctx.body = this.ctx.query
    }
    async update () {
        const { ctx } = this
        ctx.body = { id: 123, params: ctx.params }
    }
    async delete () {
        const { ctx } = this
        ctx.body = { id: 123, params: ctx.params }
    }
}

module.exports = ProductController
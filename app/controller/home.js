
const Controller = require('egg').Controller

class HomeController extends Controller {
    async index () {
        const { ctx, app } = this
        const res = await app.mysql.select('users')
        const data = await ctx.service.product.index()
        // this.ctx.body = data
        console.log(res, 'res')
        await ctx.render('index.html', {
            data,
            list: res
        })
    }
}

module.exports = HomeController
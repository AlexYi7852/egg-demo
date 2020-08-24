
const Service = require('egg').Service

class BlogService extends Service {
    async getList(author, id) {
        // let sql = `select * from blogs where 1=1 `
        // if (author) {
        //     sql += `and author='${ author }' `
        // }
        // if (keyword) {
        //     sql += `and title like '%${ keyword }%' `
        // }
        // sql += `order by createtime desc`
        // console.log(au)
        const data = await this.app.mysql.get('blogs', { author });
        return data
    }
    async getDetail (id) {
        const data = await this.app.mysql.get('blogs', { id });
        return [ data ]
    }
    async newBlog (params) {
        const { title, author, content } = params
        const createTime = Date.now()
        const data = await this.app.mysql.insert('blogs', {
            title, author, content, createTime
        });
        return { id: data.insertId }
    }
    async updateBlog (id, params) {
        params.id = id
        const data = await this.app.mysql.update('blogs', params)
        return data.affectedRows ? true : false
    }
    async deleteBlog (id) {
        const data = await this.app.mysql.delete('blogs', { id })
        return data.affectedRows ? true : false
    }
}

module.exports = BlogService

module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/api/blog/list', controller.blog.list)
    router.get('/api/blog/detail', controller.blog.detail)
    router.post('/api/blog/new', controller.blog.news)
    router.post('/api/blog/update', controller.blog.update)
    router.post('/api/blog/del', controller.blog.delete)
    router.post('/api/user/login', controller.user.login)

    router.get('/product', controller.product.index)
    router.get('/product/detail', controller.product.detail)
    router.post('/product/create', controller.product.create)
    router.put('/product/update/:id', controller.product.update)
    router.delete('/product/delete/:id', controller.product.delete)
}
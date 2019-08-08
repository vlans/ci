import Router from 'koa-router'

const router = new Router(
    {
        prefix: '/v1'
    }
)

router.get('/list', (ctx) => {
    ctx.body = {
        list: ['北京']
    }
})

export default router

// 查询订单列表   新增订单    删除订单

const Order = require('../model/order_schema')  // 引入订单的schema文件

// 查询订单列表

const queryOrderList = async ctx => {
    await Order.find().then(res => {
        // Console.log(res)
        ctx.body = {
            success: true,
            msg: '查寻成功',
            list: res
        }
    }).catch(err => {
        // Console.log(err)
        ctx.body = {
            success: false,
            msg: '查寻失败',
            list: []
        }
    })
    //ctx.response.body = '查询订单列表'
}

// 新增订单
const addOrder = async function (ctx) {
    //获取请求方发来的菜品id
    let req=ctx.request.body
    console.log(req.idList)
    //获取发送请求的用户的信息
    let userInfo = ctx.cookies.get('uesr')
    console.log(userInfo)
    //在客户端设置cookie
    ctx.cookies.set('msg', 1234)
    ctx.response.body = '新增订单'
    //从客户端获取cookie
    //let ck =ctx.cookies.get('user')
    //在客户端设置cookie
    //ctx.cookies.set('msg'123)
}

// 删除订单
const deleOrder = async ctx => {
    ctx.response.body = '删除订单'
}

module.exports = {
    queryOrderList,
    addOrder,
    deleOrder
}
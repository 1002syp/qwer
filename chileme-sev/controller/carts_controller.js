const Carts = require('../model/carts_schema')
const getCartList = async ctx => {
    await Carts.find().then(res => {
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
    //ctx.body='查询订单列表'
}
const addToCart = async function (ctx) {
    let qingqiushuju = ctx.request.body
    Console.log(qingqiushuju)
    ctx.body = qingqiushuju.name
}
const deleCartItem = async function (ctx) {
    ctx.body = '删除订单'
}
module.exports = {
    getCartList,
    addToCart,
    deleCartItem
}

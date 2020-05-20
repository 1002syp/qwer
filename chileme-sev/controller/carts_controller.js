const Carts = require('../model/carts_schema')
const getCartList = async ctx => {
    ctx.response.body='查询订单列表'
}
const addToCart = async function(ctx){
    ctx.response.body='新增订单'
}
const deleCartItem = async function(ctx){
    ctx.response.body='删除订单'
}
module.exports={
    getCartList,
    addToCart,
    deleCartItem
}

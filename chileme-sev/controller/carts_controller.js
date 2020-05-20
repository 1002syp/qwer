const Order = Request('../model/order_schema')
const queryOrderList = async ctx => {
    ctx.response.body='查询订单列表'
}
const addOrder = async function(ctx){
    ctx.response.body='新增订单'
}
const deleOrder = async function(ctx){
    ctx.response.body='删除订单'
}
module.exports={
    queryOrderList,
    addOrder,
    deleOrder
}

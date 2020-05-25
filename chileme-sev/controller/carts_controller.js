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
    let flag =false //默认未查到数据
    //判断商品在数据库中是否存在
    await Goods.findOne({ goodId: qingqiushuju.goodId }).then(res=>{
        Console.log(res) //若在库中查到对应的数据  res返回该数据的对象  若查不到对应的数据则返回 null
        // 对执行结果就行判断  根据!!res来判断是否查到数据  查到的话res是一个对象 查不到则返回是一个null
        if(!!res){ //res:{}/null !!{}:true   !!null:false
    
        }else{
            //!!null:false
            ctx.body={
                success:false,
                msg:'未查询到该商品数据'
            }
        }
    }).catch(err=>{
        Console.log(err)
        ctx.body={
            success:false,
            msg:'查询失败'
        }
    })
    //若查到数据则将该数据向购物车中添加
    if(flag){
        //将数据按购物车schema结构创建好
        let CartsItem = new Carts({
            mobile:1234567889,
            user:'张三',
            goodsid:flag.goodId,
            goodsname:flag.goodsname,
            price:flag.price
        })
        Console.log(flag)
        //await

    }

    ctx.body = '请求成功'
}
const deleCartItem = async function (ctx) {
    ctx.body = '删除订单'
}
module.exports = {
    getCartList,
    addToCart,
    deleCartItem
}

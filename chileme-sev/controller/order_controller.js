// 查询订单列表   新增订单    删除订单

const Order = require('../model/order_schema')  // 引入订单的schema文件
const user = require('../model/user_schema')
const Goods = require('../model/goods_schema')
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
    let req = ctx.request.body
    console.log(req.idList)
    //获取发送请求的用户的信息
    let userInfo = ctx.cookies.get('uesr')
    console.log(userInfo)
    //在客户端设置cookie
    //ctx.cookies.set('msg', 1234)
    //ctx.response.body = '新增订单'
    let person = null
    await user.findOne({ mobile: userInfo }).then(res => {
        console.log(res)
        if (!!res) {
            person = res
        } else {
            ctx.body = {
                success: false,
                msg: '未查询到用户，订单创建失败'
            }
        }
    }).catch(err => {
        console.log(err)
        ctx.body = {
            success: false,
            msg: '查询用户异常'
        }
    })
    let totalprice = 0
    //获取商品数据
    await Goods.find({ goodId: { $in: req.idList } })
        .then(res => {
            console.log(res)
            for (let i = 0; i < req.idList.length; i++) {
                for (let j = 0; j < req.length; j++) {
                    if (req.idList[i] == res[j].goodId) {
                        totalprice += res[j].price
                        break
                    }
                }
            }
        })
        .catch(err => {
            console.log(err)
            ctx.body = {
                success: false,
                msg: '商品数据查询失败'
            }
        })
    //创造一条数据
    let orderItem = new Order({
        orderNo: 'ODR' + new Date().getTime(),
        state: 1,
        price: totalprice,
        createTime: new Date().getTime(),
        detail: req.idList,
        way: 'online',
        createPerson: person.username,
        personld: person.mobile,
    })
    //将创建的数据插入数据库
    await orderItem.save().then(res => {
        ctx.response.body = {
            success: true,
            msg: '创建成功'
        }
    }).catch(err =>
        ctx.response.body = {
            success: false,
            msg: '创建失败'
        })
    await Goods.find({ goodId: { $in: req.idList } }).then(res => { }).
        catch(err => {
            console.log(err)
            ctx.body = {
                success: false,
                msg: '商品查询失败'
            }
        })
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
const Sb = require('../model/sb_schema')
const getdata = async ctx =>{
    ctx.response.body= '你是最牛逼'
}
const setdata = async function(ctx){
    ctx.response.body= '你是最厲害 '
}
module.exports={
    getdata,
    setdata  
}

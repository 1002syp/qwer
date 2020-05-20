<template lang="pug">
    div.stockManagement
        el-row(:gutter="20")
            el-col(:span='6')
                div.stockForm
                    el-form(ref="form",:model="form",label-width="80px")
                        el-form-item(label="商品名称")
                            el-input(v-model="form.goodname")
                        el-form-item(label="商品价格")
                            el-input(v-model="form.price")
                        el-form-item(label="商品数量")
                            el-input(v-model="form.num") 
                        el-form-item(label="商品描述")
                            el-input(v-model="form.desc")  
                        el-form-item(label="推荐指数")
                            el-input(v-model="form.rate")
                        el-form-item(label="商品大类")
                            el-radio(v-model="form.type",label="food") 食品
                            el-radio(v-model="form.type",label="drink") 饮料
                            el-radio(v-model="form.type",label="sweet") 甜品
                            el-radio(v-model="form.type",label="combo") 套餐
                        el-form-item(label="是否打折")
                            el-radio(v-model="form.isOff",:label="true") 是
                            el-radio(v-model="form.isOff",:label="false") 否
                        el-form-item(label="折扣幅度")
                            el-input(v-model="form.percent")
                        el-form-item(label="食品小类")
                            el-radio(v-model="form.itemType",label="special") 特色菜
                            el-radio(v-model="form.itemType",label="cool") 下酒菜
                            el-radio(v-model="form.itemType",label="soup") 汤羹
                            el-radio(v-model="form.itemType",label="normal") 主食
                            el-radio(v-model="form.itemType",label="fast") 方便食品
                        el-form-item(label="主要材料")
                            el-checkbox-group(v-model="form.material")
                                el-checkbox(v-for="item in material",:key="item.id",:label="item.code") {{item.name}}
                        el-form-item(label="口味")     
                            el-radio(v-model="form.tast",label="hot") 辣
                            el-radio(v-model="form.tast",label="light") 清淡
                            el-radio(v-model="form.tast",label="sweet") 甜  
                    el-button(type="primary",@click="submitHandle") 提交 
                    el-button(type="warning",@click="resetHandle('form')") 重置         
            el-col(:span='18')
                div.stockTable
                    el-table(:data="tableData",border,style="width: 90%,margin:auto")
                        el-table-column(prop="goodname",label="商品名称")
                        el-table-column(prop="price",label="商品价格")
                        el-table-column(prop="num",label="商品数量")
                        el-table-column(prop="desc",label="商品描述")
                        el-table-column(prop="rate",label="推荐指数")
                        el-table-column(prop="type",label="商品大类")
                        el-table-column(prop="isOff",label="是否打折")
                        el-table-column(prop="percent",label="折扣幅度")
                        el-table-column(prop="itemType",label="食品小类")
                        el-table-column(prop="material",label="主要材料")
                        el-table-column(prop="tast",label="口味")
        
        
                        
</template>
<script>
export default {
    data(){
        return {
            // 表单
            form:{ 
                 goodname :'', 
                 price    :'',  
                 num      :'',  
                 desc     :'',  
                 rate     :'',  // 3-5
                 type     :'',  //食品:food, 饮料:drink, 甜品:sweet, 套餐:combo
                 isOff    :'',  // true/false       
                 percent  :'',  // 2.5 --- 9.1
                 itemType :'',  //特色菜:special、下酒菜:cool 汤羹:soup、主食:normal、 方便菜肴:fast)
                 material :[],  
                 tast     :'',  //偏辣，清单，偏甜 
            },
            // 材料
            material:[
                {id:1,name:'西红柿',code:'tomoto'},
                {id:2,name:'牛肉',code:'beef'},
                {id:3,name:'鸡肉',code:'chicken'},
                {id:4,name:'猪肉',code:'pork'},
                {id:5,name:'白菜',code:'carbage'},
                {id:6,name:'土豆',code:'potato'},
            ],
            // table
            tableData:[]
        }
    },
    methods:{
        // 提交数据
        submitHandle(){
            this.Axios({
                method:'POST',
                url:'/api/goods/addGoods',
                data:this.form
            }).then(data => {
                console.log(data)
                this.resetHandle()
                this.getData()
            }).catch(err => {
                console.log(err)
            })
        },
        // 重置表单
        resetHandle(formName){
            this.form = { 
                goodname :'', 
                price    :'',  
                num      :'',  
                desc     :'',  
                rate     :'',  // 3-5
                type     :'',  //食品:food, 饮料:drink, 甜品:sweet, 套餐:combo
                isOff    :'',  // true/false       
                percent  :'',  // 2.5 --- 9.1
                itemType :'',  //特色菜:special、下酒菜:cool 汤羹:soup、主食:normal、 方便菜肴:fast)
                material :[],  
                tast     :'',  //偏辣，清单，偏甜 
            }
            // console.log(this.$refs[formName])
            // this.$refs[formName].resetFields()
        },
        // 更新table数据的方法
        getData(){
            this.Axios({
                method:'GET',
                url:'/api/goods/findGoodsList',
            }).then(data => {
                console.log(data)
                this.tableData = data.data.data
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
$h:100%;
.stockManagement{
    height: $h;
    .el-row,.el-col{
        height: $h;
    }
    .stockForm,.stockTable{
        height: $h;
        overflow-y: auto;
    }
    .stockForm{
        background: thistle;
    }
    .stockTable{
        background: darkgrey;
    }
}
</style>
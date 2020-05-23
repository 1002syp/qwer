<template>
    <div>
        <h1>测试接口</h1>
        <div @click='clickHandle'>
            {{str}}  <!--插槽-->
        </div>
        <hr><hr>

        <div v-for='item in arr' :key='item.id' @click='cnmdbi(`item.url,item.method`)'>{{`url:${item.url} method:${item.method}`}}</div>
    </div>
</template>

<script>
export default {
    //存放组件中的数据
    data(){
        return{
            str:'cnm是个渣男',
            arr:[
                {id:1,url:'/api/order/queryOrderList',method:'GET'},
                {id:2,url:'/api/order/addOrder',method:'POST'},
                {id:3,url:'/api/order/deleOrder',method:'POST'},
            ]
        }
    },
    //绑定在组件中的方法
    methods:{
        clickHandle(){
            //alert(this.str)
            this.Axios({
                method:'GET',//请求方式
                url:'/api/order/getCartList'//接口地址
            }).then(res =>{//请求成功的回调
                console.log(res)
                this.fn3()
            }).catch(err =>{//请求失败的回调
                console.log(err)
            })
        },
        cnmdbi(url,method){
            console.log(
                `url ${url}
                method ${method}
                `
            )
            this.Axios({
                method:'GET',
                url:'/api/order/getCartList'
            }).then(res=>{
            console.log(res)
            }).catch(err=>{
            console.log(err)
            }) 

        },
        cnmdbi(url,method){
            console.log(
                `url ${url}
                method ${method}
                `
            )
            this.Axios({
                method:method,
                url:url,
                data:{
                    name:'张三',
                    age:18

                },
            }).then(res=>{
            console.log(res)
            }).catch(err=>{
            console.log(err)
            }) 

        },
       
        fn3(){
            alert(this.str)
        }

        


    }
    
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <h1>测试接口</h1>
         <div @click="clickHandle">
            {{arr}}
        </div>
        <div v-for='item in qwe' :key='item.id' @click='wscr(`item.url,item.method`)'>{{`url:${item.url} method:${item.method}`}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[1,2,3,45,6,],
            qwe:[
                {id:1,url:'/api/order/queryOrderList',method:'GET'},
                {id:2,url:'/api/order/addOrder',method:'POST'},
            ]
            
        }

    },
    methods:{
        clickHandle(){
            alert(this.arr)
            this.Axios({
                method:'POST',
                url:'/api/order/setdata'
            }).then(qwe=>{
            console.log(qwe)
            this.sb()
            }).catch(asd=>{
            console.log(asd)
            }) 
        },
        wscr(url,method){
        this.Axios({
                method:'POST',
                url:'/api/order/setdata'
            }).then(qwe=>{
            console.log(qwe)
            }).catch(asd=>{
            console.log(asd)
            }) 
        },
        sb(){
            alert(this.arr)
        }

    }
    
    

    

}
</script>
<style lang="scss" scoped>

</style>

<template>
    <h1>测试接口<div @click="clickHandle">{{arr}}</div></h1>
</template>
<script>
export default {
    data(){
        return{
            arr:[1,2,3,45,6,]
        }

    },
    methods:{
        clickHandle(){
            alert(this.arr)
        }

    }

    

}
</script>
<style lang="scss" scoped>

</style>

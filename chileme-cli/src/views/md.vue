<template>
    <div>
        <h1>测试接口</h1>
        <div @click="clickHandle">
            {{str}}  <!--插槽-->
        </div>
    </div>
</template>

<script>
export default {
    //存放组件中的数据
    data(){
        return{
            str:'cnm是个渣男'

        }
    },
    //绑定在组件中的方法
    methods:{
        clickHandle(){
            alert(this.str)
        }


    }
    
}
</script>

<style lang="scss" scoped>

</style>
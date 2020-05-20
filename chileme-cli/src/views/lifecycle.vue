<template lang="pug">
    div
        h1 生命周期
        p {{val}}
        span(@click='clickHandle') 点击
</template>

<script>
export default {
    data(){
      return{
          val:0
      }  
    },
    methods:{
        clickHandle(){
            this.val = this.val + 1
        }
    },
    beforeCreate(){
        console.log('before create')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('before mounted')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('before update')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('before destroy')
    },
    destroyed(){
        console.log('destroy')
    }
}
</script>
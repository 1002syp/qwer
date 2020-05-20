<template lang="pug">
    div.login
        div.inner
            div.el-icon-food
            el-form(:model="form",ref="Form",label-width="100px")
                el-form-item(
                    label="手机号",
                    prop="mobile",
                    )
                    el-input(type="text",v-model.number="form.mobile",autocomplete="off")
                el-form-item(
                    label="密码",
                    prop="password"
                    )
                    el-input(type='password',v-model="form.password",autocomplete="off")
                el-form-item
                    el-button(type="primary",@click="loginHandle") 登录
                    el-button(@click="resetForm('Form')") 重置
</template>
<script>
export default {
    data(){
        return{
            form:{
                mobile:'',
                password:''
            }
        }
    },
    methods:{
        loginHandle(){
            this.Axios({
                method:'POST',
                url:'/api/user/login',
                data:{
                    mobile:this.form.mobile,
                    password:this.form.password
                }
            }).then(data => {
                console.log(data)
                if(data.data.flag) this.$router.push('/chooseGoods')
                else this.$message.error(`${data.data.msg}`)
                
            }).catch(err => {
                this.$message.error('登陆失败请稍后再试')
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="scss" scoped>
    @mixin flx($dec:culomn){
    display:flex;
    flex-direction: $dec;
}
.login{
    @include flx;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: lightgrey;
    .inner{
        width: 50%;
        height: 90%;
        .el-icon-food{
            height: 20%;
            min-height: 220px;
            line-height: 220px;
            font-size: 200px;
            color: goldenrod;
        }
        .el-form{
            margin:20px auto 0;
            width:700px;
        }
    }
}    
</style>
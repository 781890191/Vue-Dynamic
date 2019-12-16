<template>

  <div class="login">
    <div class="login-header">
      <div class="page-logo"><img src="static/front/images/logo.png"/></div>
      <div class="return-index">
       
      </div>
    </div>
    <div class="login-background">
      <div class="product-introduction">
        <div class="product-title">欢迎回来</div>
      </div>
      <div class="login-box">
        <div class="login-items">
          <el-form ref="form" :model="form" label-width="0px">
            <el-form-item>
              <el-input v-model="form.userId" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login-button" @click="login('form')">登录</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div class="login-help">
          管理员账户：admin <br>
          密码：任意
          <br> <br> <br>
          普通账户：user <br>
          密码：任意
        </div>
      </div>
    </div>
    <el-footer class="common-footer-login">
    </el-footer>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        userId: '',
        password: '',
        usertype:''
      },
      activeName: 'first'
    }
  },
  methods: {
    login(formName){
      let v = this;
      if(v.form.userId && v.form.password){
        if(v.form.userId === 'admin'){
          v.form.usertype = '1';
        }else{
          v.form.usertype = '2';
        }
        let user = JSON.stringify(v.form);
        localStorage.setItem('user',user)
         console.log("4444")
        v.$router.push('/management');
      }else{
        alert("老铁，填写下账户和密码")
      }
    },
  }
}
</script>

<style scoped>
  /* login */
  .login{
    height: 100%;
    min-height: 500px;
    background: #EDF1F7;
  }
  .login-header {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 0 0 60px;
    margin: 0 auto;
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  .page-logo{
    float: left;
  }
  .page-logo img{
    height: 44px;
  }


  .login-header .return-index {
    float: right;
    padding-top: 20px;
    color: #409eff;
    font-size: 14px;
    font-weight: normal;
    padding-right: 30px;
  }

  .login-background {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    padding: 132px 127px 0;
    border-radius: 20px;
  }
  .login-background>div{
    /* width: 50%; */
    flex: 1;
    height: 67.1%;
  }
  .login-box {
    /* height: 380px; */
    background: #F7F9FB;
    padding-top: 6%;
    box-sizing: border-box;
    /* -webkit-box-shadow: 0 0 50px rgba(33, 33, 33, 0.185); */
    /* box-shadow: 0 0 50px rgba(33, 33, 33, 0.185); */
    /* border-radius: 5px; */
    z-index: 1001;
    min-height: 330px;
    border-radius: 0 20px 20px 0;
  }

  .login-box .title {
    color: #333;
    font-size: 20px;
    text-align: center;
    padding: 20px;
  }

  .login-items .el-form {
    max-width: 85%;
    margin: 10px auto 0;
  }

  .login-button {
    width: 100%;
    color: #fff;
    border-radius: 8px;
  }

  .login-button:hover {
    opacity: 0.95;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .login-help {
    max-width: 85%;
    position: relative;
    font-size: 12px;
    margin: 10px auto 0;
    text-align: right;
    margin-top: 6%;
    text-align: left
  }

  .login-help span {
    font-size: 12px;
  }
  .login-help2{
    margin-top: 6%;
    text-align: left;
  }
  .common-footer-login {
    padding: 0;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1000;
  }
  .el-tabs__header {
    /* position: relative; */
    margin: 0 auto 15px;
    text-align: center;
    width: 85%;
  }
  .product-introduction {
    /* position: absolute; */
    /* right: 40%; */
    /* top: 100px; */
    /* width: 20%; */
    /* height: 380px; */
    /* box-shadow: 0 0 50px rgba(33, 33, 33, 0.185); */
    background: #fff;
    /* border-radius: 5px; */
    z-index: 1001;
    padding: 6.9% 4.1%;
    box-sizing: border-box;
    min-height: 330px;
    border-radius: 20px 0 0 20px;
  }
  .product-title{
    font-size: 20px;
    color:#222;
    margin-bottom: 8.3%;
  }
  .product-name {
    font-size: 18px;
    line-height: 36px;
    /* text-align: center; */
    margin-bottom: 10px;
    color: #333;
  }
  .product-content {
    font-size: 16px;
    line-height: 28px;
  }
  /* .el-input{
    border-radius: 8px;
  } */
  .login >>> .el-input__inner{
    border-radius: 8px !important;
  }
</style>

<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="0px">
      <el-form-item>
        <el-input v-model="form.userId" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-button" @click="login('form')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div class="login-box">
      <div class="login-items"></div>
      <div class="login-help">
        管理员账户：admin <br />
        密码：任意
        <br />
        <br />
        <br />
        普通账户：user <br />
        密码：任意
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        userId: "",
        password: "",
        usertype: "",
      },
    };
  },
  methods: {
    login(formName) {
      if (this.form.userId && this.form.password) {
        this.form.usertype = this.form.userId === "admin" ? '1' : '2'
        localStorage.setItem("user", JSON.stringify(this.form));
        this.$router.push("/layout");
      } else {
        alert("请填写下账户和密码");
      }
    },
  },
};
</script>

<style scoped>
/* login */
.login {
  height: 100%;
  width: 600px;
  height: 600px;
  padding: 50px;
  margin: 0 auto;
  background: #edf1f7;
}
</style>

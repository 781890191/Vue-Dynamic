<template>
  <div class="user-header-contain">
    <el-button @click="layout()">退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'ManageHeaderBox',
  methods:{
    layout(){
      localStorage.removeItem('user');
      this.$router.push({ name: 'login'})
    }
  },

}
</script>

<style>
.user-header-contain{
  text-align: right;
  line-height: 60px;
  margin-right: 50px;
}
</style>

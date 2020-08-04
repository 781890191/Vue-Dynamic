<template>
  <div class="user-center-layout">
    <el-container >
      <el-header height="70px" style='text-align:right'>
        <el-button @click="layout()">退出登录</el-button>
      </el-header>
      <el-container class="conatiner-box">
        <el-aside>
          <ManageSidebarBox2></ManageSidebarBox2>
        </el-aside>
        <el-container >
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ManageLayout',
  components: { 
    "ManageSidebarBox2": () => import("./sidebar"),
  },
  methods:{
    layout(){
      localStorage.removeItem('user');
      this.$router.push('/login')
    }
  },
}
</script>

<style>
  .el-container.is-vertical{
    height: 100%;
  }
  .conatiner-box{
    padding: 100px 30px;
    background-color: #EDF1F7;
    width: 100%;
  }
  .user-center-layout >>> .el-main {
    color: #333;
    background-color: red!important;
    padding: 0;
    overflow: visible;
  }
  /* 左边边框大小 */
  .con-cards{
    flex:1;
  }
  /* 卡片 */
  .main-container{
    display: flex;
  }
  .con-card{
    background:#fff;
    border-radius: 15px;
    padding: 20px 30px;
    box-sizing: border-box;
  }
  .explain{
    width: 160px;
    margin-left: 20px;
  }
  .bottom{
    margin-bottom: 20px;
  }
</style>

<template>
  <div class="user-center-layout">
    <el-container >
    <el-header height="70px">
      <ManageHeaderBox></ManageHeaderBox>
    </el-header>
    <el-container class="conatiner-box">
      <el-aside>
        <ManageSidebarBox2></ManageSidebarBox2>
      </el-aside>
      <el-container style="background:white;border-radius:25px;">
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <el-footer height='40px' class="user-footer">
      <div class="footer-text"><span style="margin-left: 20px;">800-820-88820</span></div>
      <div class="footer-img"></div>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
import ManageHeaderBox from './HeaderBox'
import ManageFooterBox from './FooterBox'
import ManageSidebarBox2 from './SidebarBox2'

export default {
  name: 'ManageLayout',
  components: {ManageHeaderBox, ManageFooterBox, ManageSidebarBox2}
}
</script>

<style>
  .el-container.is-vertical{
    height: 100%;
  }
  .conatiner-box{
    padding: 0 30px;
    background-color: #EDF1F7;
    width: 100%;
    height: calc(100vh - 110px);
  }
  .user-center-layout{
    width: 100%;
    height: 100%;
  }
  .user-center-layout .el-header {
    line-height: 40px;
    border-bottom: 1px solid #E9EEF3;
    font-size: 18px;
    font-weight: bolder;
    padding: 0;
  }

  .user-center-layout .el-menu{
    border: none;
  }
  .user-center-layout >>> .el-main {
    color: #333;
    background-color: red!important;
    padding: 0;
    overflow: visible;
    min-height: calc(100vh - 110px);
  }
  .user-center-layout .el-breadcrumb{
    margin-bottom: 8px;
  }
  .user-center-layout .el-aside{
    width: 240px!important;
    margin-right: 20px;
    border-right: 1px solid #E9EEF3;
    height: calc(100vh - 110px);
  }

  body > .el-container {
    margin-bottom: 40px;
    background-color: white;
  }

  .user-center-layout .el-container:nth-child(5) .el-aside,
  .user-center-layout .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .user-center-layout .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .back-home{
    float: right;
    font-size: 16px;
    margin-right: 18px;
  }
  a{
    text-decoration: none;
  }
  .user-footer{
    padding: 0 40px;
    border-top: 1px solid #EBEEF5;
    line-height: 40px;
    color: #0030D0;
    width: 100%;
    overflow: hidden;
    background-color: #EBEEF5;
  }
  .user-footer img{
    height: 30px;
    padding: 4px;
  }
  .user-footer .footer-text{
    float: left;
    font-size: 14px;

  }
  .user-footer .footer-img{
    float: right;
  }

  .t-header {
    height: 40px;
  }
  .t-header .title {
    font-size: 16px;
    display: inline-block;
    color: #F56C6C;
    font-weight: bolder;
  }
  .t-header .operation {
    /*position: absolute;*/
    display: inline-block;
    right: 0;
    float: right;
  }
  .t-content .content {
    /*padding: 20px;*/
  }
  .t-content .el-table thead tr th{
    background-color: #f5f7fa;
    color: #606266;
  }

  .t-header .breadcrumb{
    float: left;
    padding-top: 10px;
  }

  .page-top{
    border: 1px solid #EBEEF5;
    padding: 4px 16px;
    background-color: white;
    /* width: 100%; */
    flex: 1;
  }
  .page-top .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    font-weight: normal;
  }
  .page-title .el-button{
    padding:0;
  }
  .top-popover .el-popover__title{
    font-size: 14px;
  }
  .page-content{
    /* margin: 8px 0; */
    background-color: white;
    border: 1px solid #E9EEF3;
  }
  .page-content .content-action-grp{
    height: 40px;
    background-color: #F2F6FC;
    padding: 4px;
    clear: both;
  }
  .page-content .search-grp{
    width: 500px;
  }
  .page-content .right-action{
    padding-right: 16px;
    padding-top:4px;
  }
  .page-content .search-grp .content-action-title{
    padding: 8px 16px;
    font-size: 14px;
  }
  .page-content .content-div form{
    margin: 16px auto;
  }
  .el-input__inner{
    border-radius:0;
  }
  .el-button,.el-button--mini, .el-button--small{
    border-radius:0;
  }
  .el-breadcrumb{
    font-size: 12px;
        line-height: inherit;
  }
  .content-dialog .el-dialog__header{
    background-color: #F2F6FC;
    padding: 16px;

  }
  .content-dialog .el-dialog__header .el-dialog__title{
    font-size: 14px;
    line-height: 18px;
  }
  .content-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 16px;
  }
  .content-dialog .el-dialog__body{
    padding: 10px 8px;
  }
  .user-center-layout .el-footer.user-footer{
    position: relative;
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

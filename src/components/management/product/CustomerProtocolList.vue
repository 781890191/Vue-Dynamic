<template>
  <div class="main-container">
    协议浏览页面
  </div>
</template>

<script>
    export default {
        name: "CustomerContractList",
        created() {
          
        },
        data () {
          return {
 
          }
        },
    }
</script>

<style scoped>
  .cell {
    text-align: center !important;
  }
  .status-01 {
    background-color: #409eff;
    border-radius: 2px;
    color: #fff;
    height: 20px;
    font-size: 12px;
    line-height: 23px;
    padding: 2px 4px;
  }
  .status-02 {
    background-color: #e6a23c;
    border-radius: 2px;
    color: #fff;
    height: 20px;
    font-size: 12px;
    line-height: 23px;
    padding: 2px 4px;
  }
  .status-03 {
    background-color: #67c23a;
    border-radius: 2px;
    color: #fff;
    height: 20px;
    font-size: 12px;
    line-height: 23px;
    padding: 2px 4px;
  }
  .container-start >>> .el-form-item {
    margin-bottom: 0px;
  }
  .page-content .content-action-grp {
    height: auto;
    background-color: #F2F6FC;
    padding: 4px;
    clear: both;
    overflow: hidden;
  }
  /* 分页器开始 */
.container-block{
  margin: 165px 60px 100px 0;
}
.main-container >>>.el-pagination.is-background .btn-next, 
.main-container >>>.el-pagination.is-background .btn-prev, 
.main-container >>>.el-pagination.is-background .el-pager li{
  min-width: 16px;
}
.main-container >>> .el-pagination .btn-next .el-icon, 
.main-container >>> .el-pagination .btn-prev .el-icon{

}
.main-container >>> .el-pagination .btn-prev,
.main-container >>> .el-pagination .btn-next{
  height: 16px;
  width: 16px;
  cursor: pointer;
  border: solid 1px #333;
  border-radius: 50%;
  color: #3e3e3e;
  text-align: center;
  background-color: white;
  padding: 0;
  margin-top: 2.5px;
}
.main-container >>>.el-pagination.is-background .el-pager li{  
  width: 21px;
  height: 21px;
  margin: 0 16px;
  line-height: 21px;
  font-size: 14px;
  color: #0030d0;
  text-align: center;
  letter-spacing: 0;
  border-radius: 100%;
  background: #fff;
  box-shadow: 0 2px 4px 0 #D0D3DE;
}
.main-container >>>.el-pagination.is-background .el-pager li:not(.disabled).active{
  border: 1px solid #ededed;
  border-radius: 50%;
  color: white;
  background: #0030d0;
  box-shadow: 0 2px 4px 0 #D0D3DE;
}
.main-container >>>.el-pager .more::before{
  line-height: 23px;
}
/* 分页器结束 */

/* 输入框内容开始 */
.el-icon-search{
  font-size: 18px;
  color: white;
}
.container-start >>> .el-icon-search:before{
  line-height: 36px;
  position: absolute;
  left: 9px;
  top: 0;
}
.container-start >>> .el-form-item{
  width: 49%;
  text-align: center;
  margin: 0 0 20px 0;
}
.main-container >>>.el-form-item__label{
  font-size: 14px;
  color: #333333;
  letter-spacing: 0.88px;
}
.main-container >>>.el-input__inner{
  box-shadow: 0 2px 9px 0 #DFE5EB;
  border-radius: 20px;
}
.main-container >>>.el-icon-arrow-up:before{
  color: #0030D0;
}
/* 输入框内容结束 */
.explain{
  min-height: calc(100vh - 150px);
}
</style>

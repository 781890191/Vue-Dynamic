<template>
  <div id="app" style="position:absolute; left:0; top:0; width:100%;height:100%;">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return {
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    },
    backpage() {
      // console.log('back');
      this.$router.back(-1);
    }
  }
}
</script>

<style>
  @charset "UTF-8";
/** 动画间隔 **/
html {
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

body {
  font: 100% Helvetica, sans-serif;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #606266;
  padding: 0;
  margin: 0;
  background-color: #F5F5F5;
  font-size: 12px;
  min-width: 1200px;
}

a {
  text-decoration: none;
  color: #409EFF;
}

a:hover {
  color: #dc4100;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

/** animation **/
@-webkit-keyframes fadeIn1 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}
@-webkit-keyframes fadeIn2 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}
@-webkit-keyframes fadeIn3 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}
@-webkit-keyframes fadeIn4 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}
/** common **/
.margin-right10 {
  margin-right: 10px;
}

.button-style1 {
  background: #dc4100 !important;
  border: 1px solid #dc4100 !important;
  color: #fff !important;
  opacity: 1;
}

.button-style1:hover {
  opacity: 0.9;
}

.button-style2 {
  background: #409eff !important;
  border: 1px solid #409eff !important;
  color: #fff !important;
  opacity: 1;
}

.button-style2:hover {
  opacity: 0.9;
}
  .padding-right-4{
    padding-right: 4px;
  }
  .float-right{
    float: right;
  }
  .float-left{
    float: left;
  }
  a:hover{
    cursor: pointer;
  }
  .page-tort-announce{
    float: right;
    font-size: 12px;
    /*text-align: right;*/
    margin-top: -24px;
    color: #E6A23C;
  }

  .el-input__inner{
    border-radius: 0px;
  }
  .el-button--mini, .el-button--small, .el-button--medium, .el-button,.el-textarea__inner{
    border-radius: 0px;
  }

  /*register*/
  .small-step .el-step.is-horizontal .el-step__line{
    height: 1px;
  }
  .small-step .el-step__title{
    font-weight: normal;
    font-size: 14px;
    line-height: 28px
  }
  .small-step .el-step__icon.is-text{
    border: 1px solid;
  }
  .small-step .el-step__icon-inner{
    font-weight: normal;
  }
  .small-step .el-step__title.is-process{
    font-weight: normal;
  }

  .footer-fix-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
  }


  /* image uploader*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  /*department list left*/
  .page-content-left .list-type  .el-radio-button__inner{
    width: 100%;
  }
  .page-content-left .list-tree .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
      background-color: white;
  }

</style>

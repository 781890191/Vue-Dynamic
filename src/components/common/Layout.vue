<template>
  <el-container>
    <!--<el-header>-->
      <HeaderBox></HeaderBox>
    <!--</el-header>-->
    <el-main class="common-main">
      <router-view/>
    </el-main>
    <el-footer class="index-footer">
      <FooterBox></FooterBox>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderBox from './Header'
import FooterBox from './Footer'

export default {
  name: 'Layout',
  components: {HeaderBox, FooterBox}
}
</script>

<style>
  /* .el-container{
    padding: 0 40px;
  } */
  .common-main {
    padding: 0;
  }
  .index-footer {
    padding: 0;
    width: 100%;
  }
</style>

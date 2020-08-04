<template>
  <div class="container-sidebar">
    <ul class="ul2">
      <li v-for="(menu, index) in this.permission" >
        <!-- 主菜单是否显示 -->
        <div v-if="menu.isshow">
          <!-- 菜单权限显示 -->
          <div v-if="menu.rolegrp.indexOf(user.usertype) >=0">
            <!-- 是否拥有多级菜单 -->
            <div v-if="menu.isgrpName">
              <div :class="{ 'container-lists':true,'active':active == menu.title }" @click=supers(menu,index)>
                {{ menu.title }}
              </div>
              <!-- 二级菜单显示 -->
              <div v-if="menu.isChildren" class="container-listItem">
                  <div v-for="(menus, index) in menu.children" > 
                    <div :class="{ 'active':activeSubmenu == menus.title }" @click=stage(menus,index)>
                      {{menus.title}}
                    </div>
                  </div>
              </div>
              <!-- /二级菜单显示 -->
            </div>
            <!-- /是否拥有多级菜单 -->
          </div>
          <!-- /菜单权限显示 -->
        </div>
        <!-- /主菜单是否显示 -->
      </li>
    </ul>
  </div>
</template>

<script>
import permission from '@/router/permission'
export default {
  name: 'ManageSidebarBox2',
  data () {
    return {
      permission,
      user: JSON.parse(localStorage.getItem('user')),
      active:'', // 主菜单路由高亮效果
      activeSubmenu:'', // 二级菜单路由高亮效果
    }
  },
  created(){
    // 获取当前路由
    this.active = this.$router.history.current.meta.supers;
    this.activeSubmenu = this.$router.history.current.meta.stage;
    this.permission = this.permission.map((n)=>{
      n.isChildren = n.title == this.active ? true : false
      return n
    })
  },
  methods: {
    supers(menu,value) {
      // 一级菜单
      this.permission = this.permission.map((n,index)=>{
        n.isChildren = index == value ? true : false
        return n
      })
      this.active = menu.title;
      this.activeSubmenu = menu.children[0].title;
      this.$router.push(menu.routepath)
    },
    stage(menus,value) {
      // 二级菜单
      this.activeSubmenu = menus.title;
      this.$router.push(menus.routepath)
    }
  }
}
</script>

<style scoped>
.container-sidebar{
  background: #F7F9FB;
  border-radius: 20px;
  height: 100%;
  overflow-y: hidden;
  box-sizing: border-box;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
.container-sidebar ul{
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 125px;
  background-color: white;
  min-height: 100%;
  border-radius: 20px;
  position: relative;
}
.container-sidebar ul li{
  position: relative;
  margin-bottom: 50px;
}
.container-sidebar ul li:last-child{
  margin-bottom: 0px;
}
.container-sidebar ul li div{
  cursor: pointer;
}
.container-lists{
  width: 100%;
  text-align: center;
  font-size: 16px;
  height: 37px;
  line-height: 37px;
  letter-spacing: 1.06px;
}

.container-listItem{
  position: absolute;
  top:0;
  left: 131.5px;
}
.container-listItem div{
  width: 104px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  font-size: 1px;
  letter-spacing: 0.88px;
  margin-bottom: 50px;
}
/* 高亮类名 */
.active{
  background: #0030D0;
  box-shadow: 6px 22px 10px -10px rgba(0,40,136,0.30);
  border-radius: 8px;
  color: #FFFFFF;
  height: 37px;
  line-height: 37px;
}
</style>

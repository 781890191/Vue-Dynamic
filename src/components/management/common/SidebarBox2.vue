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
              <div :class="{ 'container-lists':true,'active':active == menu.title }" @click=chooseHandler(index,menu)>
                {{ menu.title }}
              </div>
              <div class="container-listItem">
                  <div v-for="(menus, index) in menu.children" > 
                    <div :class="{ 'active':activeSubmenu == menus.title }" @click="secondHandler(index,menus)">
                      {{menus.title}}
                    </div>
                  </div>
              </div>
            </div>
            <!-- /是否拥有多级菜单 -->
            <!-- 只有主菜单 -->
            <div v-else>
              {{ 只有主菜单一个单身狗-绰号孤狼 }}
            </div>
            <!-- /只有主菜单 -->
          </div>
          <!-- /菜单权限显示 -->
        </div>
        <!-- /主菜单是否显示 -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ManageSidebarBox2',
  created(){
    this.permission = this.$permission.manageLeftMenu
  },
  data () {
    return {
      permission:this.$permission.manageLeftMenu,
      user: JSON.parse(localStorage.getItem('user')),
      active:'', // 主菜单路由高亮效果
      activeSubmenu:'', // 二级菜单路由高亮效果
      routepath:'',// 监听页面刷新路由
    }
  },
  created(){
     if(!this.routepath){
       this.routepath = this.$router.history.current.name;
     }
     if(localStorage.getItem('user')){
       this.user = JSON.parse(localStorage.getItem('user'))
     }
  },
  mounted(){
    let v = this;
    let routepath = 'ProtocolList';
    let arr = [];
    if(this.routepath !== routepath){
      for(let i in this.permission){
        if(this.permission[i].children){
          for(let item in this.permission[i].children){
            if(this.permission[i].children[item].routepath.name === this.routepath){
              arr.push(this.permission[i])
            }
          }
        }
      }
      this.permission.forEach(function (item,index) {
          arr.forEach(function (i,j) {
            if(item.title !== i.title){
              if(item.children){
                for(let i of item.children){
                  i.title = null;
                }
              }
            }else{
              v.active = item.title;    
              if(item.children){
                for(let items of item.children){
                  if(items.routepath.name == v.routepath){
                    v.activeSubmenu = items.title;
                  }
                }
              }
            }
          })
      })
    }else{
      this.chooseHandler(0,this.permission)
    }
  },
  methods: {
    chooseHandler(index,menu){
      let v = this;
      let arr = ['电子协议','新建协议'];
      let arr1 = [ ['新建协议','协议浏览'],['企业通讯录'],['下属机构列表','印章列表'],['计算文件hash值','查询客户信息'],['个人中心'] ];
      let arr2 = menu.children;
      let obj = arr1[index];
      let routepath;
      if( index == 0 ){
        v.active =  arr[index];
        v.activeSubmenu =  arr[index+1];
        if(!(menu instanceof Array)){
          v.loopHandler(arr2,obj,v.active,v.activeSubmenu,menu,v);
          routepath = menu.children[index].routepath.name;
        }else{
          routepath = menu[index].children[index].routepath.name
        }
        console.log(v.permission)
        this.$router.push({ name:routepath })
      }else{
          if(menu.children.length == 1){
            for(let i of arr2){
              i.title = obj[arr2.length-1];
              v.active = menu.title;
              v.activeSubmenu = arr2[arr2.length-1].title;    
            }
          }else{
            v.loopHandler(arr2,obj,v.active,v.activeSubmenu,menu,v);
          }
          routepath = arr2[0].routepath.name
          this.$router.push({ name:routepath })
      }
      v.deleteHandler(v.permission,index);
    },
    // 处理其他函数
    deleteHandler(data,index){
      let arr3 = [];
      if(data instanceof Array){
        for(let item in data){
          if(item !== index.toString()){
            arr3.push(data[item])
          }
        }
        for(let i of arr3){
          for(let item of i.children){
            item.title = ''
          }
        }
      }
    },
    // 处理循环函数
    loopHandler(arr2,obj,active,activeSubmenu,menu,v){
        arr2.forEach(function (item,index) {
            obj.forEach(function (i,j) {
              if (index === j){ // 划重点
                item.title = i
                v.active = menu.title;
                v.activeSubmenu = arr2[0].title;          
              }
            })
        })
    },
    // 处理二级菜单
    secondHandler(index,menu){  // 没有取到二级菜单的下标原因：二级菜单的覆盖（因为只是值为空 但还是占据位置）
      let v = this;
      let arr = [];
      let routepath;
      if(menu.title){
        // 一级菜单路由
        v.active = v.active;
        v.activeSubmenu = menu.title;
        routepath = menu.routepath.name;
      }else{
        // 二级菜单路由
        for(let i in v.permission){
          arr.push(v.permission[i])
        }
        for(let i of arr){
          if(i.title == v.active){
            v.active = i.title;
            v.activeSubmenu = i.children[i.children.length-1].title
            routepath = i.children[i.children.length-1].routepath.name;
          }
        }
      }
      this.$router.push({ name:routepath })
    },
    // 处理页面刷新函数
    refreshHandler(){

    },
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
/* .container-listItem div:last-child{
  margin-top: 50px;
} */
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

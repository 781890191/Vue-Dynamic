
// {
//   title:"STO市场",    //菜单名称
//   routepath:{name:"FundBaseInfo"},  //菜单路由对象
//   code:"101",   //菜单编码
//   rolegrp:",1,", // 用户角色对应权限，每一类角色用"，，"包围，如:,1,2,3,  前端采用,usertype,方式检查
//   isshow:true,   //是够显示
//   isgrpName:false,  //是否是组名称
//   icon:"el-icon-menu", //icon
//   children:[]  //子菜单
// }


export default{
  manageLeftMenu:[
    {
      title: "电子协议",
      routepath: {name: ""},
      code: "104",
      rolegrp: "1,2,",
      isshow: true,
      isgrpName: true,
      icon: "el-icon-menu",
      children: [{
        title: "新建协议",
        routepath: {name:"ProtocolList"},
        code: "10401",
        rolegrp: "1,2,",
        isshow: true,
        isgrpName: false,
        children: []
      },
      {
        title: "协议浏览",
        routepath: {name:"CustomerProtocolList"},
        code: "10501",
        rolegrp: "1,2,",
        isshow: true,
        isgrpName: false,
        children: []
      }
    ]
    },
    {
      title: "企业通讯录",
      routepath: {name: ""},
      code: "106",
      rolegrp: "1,2,",
      isshow: true,
      isgrpName: true,
      icon: "el-icon-menu",
      children: [{
        title: "企业通讯录",
        routepath: {name:"DeptList"},
        code: "10601",
        rolegrp: "1,2,",
        isshow: true,
        isgrpName: false,
        children: []
      }]
    },
    {
      title: "认证设置",
      routepath: {name: ""},
      code: "107",
      rolegrp: "1,2,",
      isshow: true,
      isgrpName: true,
      icon: "el-icon-menu",
      children: [
        {
          title: "下属机构列表",
          routepath: {name:"SubordinateBodyList"},
          code: "10701",
          rolegrp: "1,2,",
          isshow: true,
          isgrpName: false,
          children: []
        },
        {
        title: "印章列表",
        routepath: {name:"SealList"},
        code: "10702",
        rolegrp: "1,2,",
        isshow: true,
        isgrpName: false,
        children: []
      }]
    },
    {
      title: "辅助工具",
      routepath: {name: ""},
      code: "108",
      rolegrp: "1,2,",
      isshow: true,
      isgrpName: true,
      icon: "el-icon-menu",
      children: [
        {
          title: "计算文件hash值",
          routepath: {name:"CalcFileHash"},
          code: "10801",
          rolegrp: "1,2,",
          isshow: true,
          isgrpName: false,
          children: []
        },
        {
          title: "查询客户信息",
          routepath: {name:"SearchCustomerInfo"},
          code: "10802",
          rolegrp: "1,2,",
          isshow: true,
          isgrpName: false,
          children: []
        },
      ]
    },
    {
      title: "账号管理",
      routepath: {name: ""},
      code: "109",
      rolegrp: "1,",
      isshow: true,
      isgrpName: true,
      icon: "el-icon-menu",
      children: [
        {
          title: "个人中心",
          routepath: {name:"AccountBaseInfo"},
          code: "10901",
          rolegrp: "1,2,",
          isshow: true,
          isgrpName: false,
          children: []
        }
      ]
    },
  ],
}

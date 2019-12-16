import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Layout from '@/components/common/Layout'

// public
import Login from '@/components/public/Login'
//management
import ManagementLayout from '@/components/management/common/Layout'

//product 电子协议
import Product from '@/components/management/product/Product'
import ProtocolList from '@/components/management/product/ProtocolList'
import CustomerProtocolList from '@/components/management/product/CustomerProtocolList'


//Department 企业通讯录
import Department from '@/components/management/department/Department'
import DeptList from '@/components/management/department/DeptList'

// Seal 认证设置
import Certification from '@/components/management/certification/Certification'
import SubordinateBodyList from '@/components/management/certification/SubordinateBodyList'
import SealList from '@/components/management/certification/SealList'

// tool 辅助工具
import Tool from "@/components/management/tool/Tool"
import CalculateFileHash from '@/components/management/tool/CalculateFileHash'
import SearchCustomerInfo from '@/components/management/tool/SearchCustomerInfo'

//account Info 账户管理
import AccountInfo from '@/components/management/accountInfo/AccountInfo'
import AccountBaseInfo from '@/components/management/accountInfo/BaseInfo'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: Layout,
          children: [
            {
              path: '/',
              name: 'index',
              // component: Index,
              redirect:'/login'
            }
          ]
        },
        {
          path: 'management',
          component: ManagementLayout,
          meta: {requireLogin: true},
          children: [
            {
              path: '/',
              name: 'managementIndex',
              redirect: '/management/product/protocol/list'
            },
            {
              path: 'product',
              name: 'Product',
              component: Product,
              children: [
                {
                  path: 'protocol/list',
                  name: 'ProtocolList',
                  component: ProtocolList
                },
                {
                  path: 'protocol/customer/list',
                  name: 'CustomerProtocolList',
                  component: CustomerProtocolList 
                },
              ]
            },
            {
              path: 'dept',
              name: 'Department',
              component: Department,
              children: [
                {
                  path: 'dept/list',
                  name: 'DeptList',
                  component: DeptList
                }
              ]
            },
            {
              path: 'certification',
              name: 'Certification',
              component: Certification,
              children: [
                {
                  path: 'seal/list',
                  name: 'SealList',
                  component: SealList
                },
                {
                  path: 'subordinateBody/list',
                  name: 'SubordinateBodyList',
                  component: SubordinateBodyList
                },
              ]
            },
            {
              path: 'tool',
              name: 'Tool',
              component: Tool,
              children: [
                {
                  path: 'calcFileHash',
                  name: 'CalcFileHash',
                  component: CalculateFileHash
                },
                {
                  path: 'searchCustomerInfo',
                  name: 'SearchCustomerInfo',
                  component: SearchCustomerInfo
                }
              ]
            },
            {
              path: 'account',
              name: 'AccountInfo',
              component: AccountInfo,
              children: [
                {
                  path: 'account/info',
                  name: 'AccountBaseInfo',
                  component: AccountBaseInfo
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
});
// 简单判断下
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) ) {
    let user = localStorage.getItem('user');
    if (!user){
      router.app.$notify.error({
        title: '当前用户未登录，请先登陆'
      });
      next({
        name: 'login',
      })
    } else {
      next();
    }
  }else {
    next();
  }
});

export default router

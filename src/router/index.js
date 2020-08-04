import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "layout",
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue")
  },
  {
    path: '/layout',
    component: () => import("@/views/common/Layout.vue"),
    redirect: "/layout/base1",
    children: [
      {
        path: 'base1',
        meta: {
          supers:'用户菜单1', // 一级菜单名称
          stage:'用户菜单1-1', // 二级菜单名称
        },
        component: () => import("@/views/components/base1.vue"),
      },
      {
        path: 'base2',
        meta: {
          supers:'用户菜单1', // 一级菜单名称
          stage:'用户菜单1-2', // 二级菜单名称
        },
        component: () => import("@/views/components/base2.vue"),
      },
      {
        path: 'base3',
        meta: {
          supers:'用户菜单2', // 一级菜单名称
          stage:'用户菜单2-1', // 二级菜单名称
        },
        component: () => import("@/views/components/base3.vue"),
      },
      {
        path: 'base4',
        meta: {
          supers:'用户菜单3', // 一级菜单名称
          stage:'用户菜单3-1', // 二级菜单名称
        },
        component: () => import("@/views/components/base4.vue"),
      },
      {
        path: 'base5',
        meta: {
          supers:'用户菜单3', // 一级菜单名称
          stage:'用户菜单3-1', // 二级菜单名称
        },
        component: () => import("@/views/components/base5.vue"),
      },
      {
        path: 'base6',
        meta: {
          supers:'用户菜单4', // 一级菜单名称
          stage:'用户菜单4-1', // 二级菜单名称
        },
        component: () => import("@/views/components/base6.vue"),
      },
      {
        path: 'base7',
        meta: {
          supers:'用户菜单4', // 一级菜单名称
          stage:'用户菜单4-2', // 二级菜单名称
        },
        component: () => import("@/views/components/base7.vue"),
      },
      {
        path: 'base8',
        meta: {
          supers:'管理员菜单', // 一级菜单名称
          stage:'管理员菜单', // 二级菜单名称
        },
        component: () => import("@/views/components/base8.vue"),
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('user'); //假设缓存的就是token
  token || (to.path == '/login') ? next() : next('/login');
})

export default router;

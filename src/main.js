// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Element from 'element-ui'
import './theme/index.css'

import VueCookies from 'vue-cookies'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import $ from 'jquery'

import permission from './router/permission'

Vue.use(Element);
Vue.use(VueAxios, axios);
Vue.use(VueCookies);

Vue.config.productionTip = false;
Vue.prototype.$permission = permission;

Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

//引入全局组件
import Header from '@/components/header'
import Footer from '@/components/footer'

Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);

//注册路由功能
import router from '@/router';
//注册仓库功能
// import store from './store';

//引入 element-ui组件库
import '@/elements'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //通过Vue.prototype原型对象,将全部请求函数挂载到原型对象身上[VC:就可以使用请求函数]
    // Vue.prototype.$http = http;
  },
  router,
  //下面的代码作用:给项目添加仓库功能,主要的作用是给全部VC拥有一个$store属性
  // store,
  render: h => h(App),

}).$mount('#app')

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import '../public/reset.css'
import VueParticles from 'vue-particles'  


//引入全局组件
import Header from '@/components/header'
import Footer from '@/components/footer'

Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.use(VueParticles)
//注册路由功能
import router from '@/router';
//注册仓库功能
// import store from './store';

//引入 element-ui组件库
import '@/elements'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
  },
  router,
  //下面的代码作用:给项目添加仓库功能,主要的作用是给全部VC拥有一个$store属性
  // store,
  render: h => h(App),

}).$mount('#app')

//第一步：引入插件、安装插件
import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import('@/pages/home')
const First = () => import("@/pages/first")
const Introduce = () => import("@/pages/introduce")
const Resume = () => import("@/pages/resume")
const Comments = () => import('@/pages/comments')
const About = () => import('@/pages/about')

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  { path: '/first', component: First },
  { path: '/', redirect: '/first' },
  {
    path: '/home', component: Home, children: [
      { path: '/', redirect: '/introduce' },
      { path: '/introduce', component: Introduce },
      { path: '/resume', component: Resume },
      { path: '/comments', component: Comments },
      {
        path: '/about', component: About
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import Top from '../pages/Top.vue'
import userSignUp from '../pages/auth/user-signup.vue'
import userLogin from '../pages/auth/user-login.vue'
import projectRegist from '../pages/project/project-regist.vue'
import projectList from '../pages/project/project-list.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/u',
    component: userSignUp
  },
  {
    path: '/user-login',
    component: userLogin
  },
  {
    path: '/project-regist',
    component: projectRegist
  },
  {
    path: '/project-list',
    component: projectList
  },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router

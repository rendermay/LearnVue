import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogHomeView from '@/views/BlogHomeView.vue'
import MainHomeView from '@/views/admin/MainHomeView.vue'
import UserManagerView from '@/views/admin/UserMangerView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: '/home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogHomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin/main',
    name: 'admin-main',
    component: MainHomeView
  },
  {
    path: '/admin/user',
    name: 'admin-user',
    component: UserManagerView
  }
]
const router=createRouter({
  history:createWebHistory(),
  routes
})
export default router

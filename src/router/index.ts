import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      meta: {
        title: '首页',
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: home,
          meta: {
            title: '首页',
          },
        },
      ],
    },
  ],
})

// 全局解析守卫
router.beforeEach((to, from, next) => {
  if (typeof to.meta?.title === 'string') {
    document.title = to.meta?.title
  }
  next()
})

export default router

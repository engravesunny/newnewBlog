import { createApp } from 'vue'
import pinia from './store'
import App from './App.vue'
import './assets/font/font.css'
import './assets/icon/iconfont/iconfont.css'
import './style/index.css'
import './style/root.css'
import router from './router'
import 'amfe-flexible'
// 引入字体

const app = createApp(App)

const animateDirective = {
  mounted(el, binding) {
    const addClass = () => {
      const { top } = el.getBoundingClientRect()
      const h = window.innerHeight
      if (top < h) {
        if (el.className.indexOf(binding.value) === -1) {
          // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
          el.className = `${binding.value} ${el.className}`
        }
        if (binding.arg === 'once') {
          // 如果指令参数是 'once'，则只触发一次
          window.removeEventListener('scroll', addClass)
        }
      }
    }
    window.addEventListener('scroll', addClass, true)
    binding.addClass = addClass
    addClass()
  },
  unmounted(el, binding) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass)
    }
  }
}

app.directive('animate', animateDirective)

app.use(router)
app.use(pinia)



app.mount('#app')


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.$axios = axios;

//设置路由
const router = new VueRouter({
    routes,
    mode: 'history',
    //base: _dirname,

})

const REQUEST_HOST = 'http://182.61.167.75:8080';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(config => {
        let token = localStorage.getItem("auth-token");
        if (token) {
            config.headers.token = token;
        }
        if (config.url.indexOf(REQUEST_HOST) === -1) {
            config.url = REQUEST_HOST + config.url;
        }
        return config;
    });
axios.interceptors.response.use(response =>{

        return response;
    },error =>{
      console.error(error.response)
      let {status} = error.response;
      if (status === 403) {
        localStorage.removeItem("auth-token")
        router.replace("/login")
      }
      return Promise.reject(error)
  })


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-http-sandbox.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  // some custom modification to the request
  console.log(request)
  if (request.method === 'POST') {
    // some custom modification to the POST request
  }
  next(response => {
    console.log(response)
    // some other follow up callback to modify response
  })
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  /*
    take the element specified above "#app"
    and render the .vue template file "./App.vue"
    the shorthand is:
    ---
    render: function (createElement) {
      return createElement(App);
    }
    createElement() describes the node to be created in the virtual DOM
  */
  render: h => h(App)
})

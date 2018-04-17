import Vue from 'vue'
import App from './App.vue'

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

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// globally register a directive

// Directive Hooks
// bind(el, binding, vnode) - occures once directive is attached
// inserted(el, binding, vnode) - occures once inserted in the parent node (DOM)
// update(el, binding, vnode, oldVnode) - occures once component is updated (without children)
// componentUpdated(el, binding, vnode, oldVnode) - occures once component is update (along with children)
// unbind(el, binding, vnode) - occures once directive is removed
Vue.directive('highlight', {
  bind (el, binding, vnode) {
    let delay = 0
    if (binding.modifiers['delay']) {
      delay = 1500
    }
    setTimeout(function () {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value !== undefined && binding.value !== '' ? binding.value : 'yellow'
      } else {
        el.style.color = binding.value !== undefined && binding.value !== '' ? binding.value : 'red'
      }
    }, delay)
  }
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

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const bus = new Vue({
  data: {},
  methods: {
    changeAge (age) {
      this.$emit('ageEditedBus', age)
    }
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})

export { bus }

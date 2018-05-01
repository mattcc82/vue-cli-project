<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-md-offset-3">
          <h1>Built-in Directives</h1>
          <p v-text="'v-text: some text'"></p>
          <p v-html="'v-html: <em>some text - make sure to sanitize html</em>'"></p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-md-offset-3">
          <h1>Custom Directives</h1>
          <p v-highlight>v-highlight - custom directive to set style - no set value</p>
          <p v-highlight="'red'">v-highlight="'red'": custom directive to set style - set value: red</p>
          <p v-highlight:background="'green'">v-highlight:background="'green'" custom directive to set style - arguement :background </p>
          <p v-highlight:background.delay="'yellow'">v-highlight:background="'yellow'" custom directive to set style - set modifier .delay</p>
          <p v-local-highlight:background.delay.blink="{ baseColor: 'red', secondColor: 'blue', blink: 500 }" class="lead">Directive registered locally as local-highlight</p>
          <button class="btn btn-primary" v-customClick:click="clicked">Click for custom directive</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    clicked () {
      alert('You clicked')
    }
  },
  directives: {
    'customClick': {
      bind (el, binding, vnode) {
        const type = binding.arg
        const fn = binding.value
        el.addEventListener(type, fn)
      }
    },
    'local-highlight': {
      bind (el, binding, vnode) {
        let delay = 0
        if (binding.modifiers['delay']) {
          delay = 1500
        }
        if (binding.modifiers['blink']) {
          let baseColor = binding.value.baseColor || 'yellow'
          let secondColor = binding.value.secondColor || 'red'
          let currentColor = baseColor
          let blink = binding.value.blink || 800
          setTimeout(function () {
            setInterval(function () {
              currentColor === secondColor ? currentColor = baseColor : currentColor = secondColor
              if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value !== undefined && binding.value !== '' ? currentColor : 'yellow'
              } else {
                el.style.color = binding.value !== undefined && binding.value !== '' ? currentColor : 'red'
              }
            }, blink)
          }, delay)
        } else {
          setTimeout(function () {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value.baseColor !== undefined && binding.value.baseColor !== '' ? binding.value.baseColor : 'yellow'
            } else {
              el.style.color = binding.value.baseColor !== undefined && binding.value.baseColor !== '' ? binding.value.baseColor : 'red'
            }
          }, delay)
        }
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>

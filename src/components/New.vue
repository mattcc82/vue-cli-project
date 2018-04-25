<template>
  <section>
    <h3>New Quote</h3>
    <b-button @click="counter++" variant="primary">Increase Counter</b-button>
    <b-alert variant="info" show>{{ counter }}</b-alert>
  </section>
</template>
<script>
import { bus } from '../main.js'

export default {
  name: 'my-new',
  data () {
    return {
      counter: 0
    }
  },
  destroyed () {
    bus.$emit('lifecycleTriggered', this.$options.name + ' destroyed!')
  },
  deactivated () {
    bus.$emit('lifecycleTriggered', this.$options.name + ' deactivated!')
  },
  activated () {
    bus.$emit('lifecycleTriggered', this.$options.name + ' activated!')
  }
}
</script>
<style>

</style>

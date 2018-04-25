<template>
  <h3>The Author</h3>
</template>
<script>
import { bus } from '../main.js'

export default {
  name: 'my-author',
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

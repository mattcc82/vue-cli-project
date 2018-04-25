<template>
  <b-card 
    :title="qTitle"
    img-src="https://lorempixel.com/600/300/food/5/"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <p class="card-text">{{ qText }}</p>
    <b-button :href="qLink" variant="primary">{{ qBtn }}</b-button>
  </b-card>  
</template>
<script>
import { bus } from '../main.js'

export default {
  name: 'my-quotes',
  props: [
    'qTitle',
    'qText',
    'qBtn',
    'qLink'
  ],
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
<style scoped>
.card-text {
  font-style: italic;
}
</style>

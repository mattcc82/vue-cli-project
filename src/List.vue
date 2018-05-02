<template>
  <div>
    <input type="text" v-model="colorFilter" placeholder="Filter list...">
    <ul>
      <li v-for="color in filteredColors" :key="color">{{ color }}</li>
    </ul>
  </div>  
</template>

<script>
import colorMixin from './colorMixin.js'

export default {
  name: 'list',
  mixins: [
    colorMixin
  ],
  created () {
    console.log('Created hook from the List component')
  }
}
</script>

<style lang="scss">

</style>

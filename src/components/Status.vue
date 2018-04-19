<template>
  <b-jumbotron :header="title" :lead="Date()">
    <slot></slot>
  </b-jumbotron>
</template>

<script>
export default {
  data () {
    return {
      title: 'Server Status'
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <section>
    <b-button @click="increase" variant="primary">Increment</b-button>
    <b-button @click="decrease" variant="danger">Decrement</b-button>
  </section>
</template>

<script>
export default {
  methods: {
    increase () {
      this.$store.state.counter++
      this.$store.state.clicks++
    },
    decrease () {
      this.$store.state.counter--
      this.$store.state.clicks++
    }
  }
}
</script>

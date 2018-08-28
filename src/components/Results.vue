<template>
  <section>
    <b-alert :variant="variant" show>{{ counter }}</b-alert>
  </section>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    },
    variant () {
      let counter = parseInt(this.counter)
      return counter === 0 ? 'warning' : counter > 0 ? 'success' : 'danger'
    }
  }
}
</script>


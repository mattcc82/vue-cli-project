<template>
  <section>
    <b-alert :variant="variant" show>{{ counter }}</b-alert>
    <b-alert :variant="variant" show>Number of clicks: {{ clicks }}</b-alert>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      clicks: 'stringCounter',
      counter: 'doubleCounter'
    }),
    variant () {
      let counter = parseInt(this.counter)
      return counter === 0 ? 'warning' : counter > 0 ? 'success' : 'danger'
    }
  }
}
</script>


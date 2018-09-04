<template>
  <section>
    <b-alert :variant="variant" show>{{ counter }}</b-alert>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      counter: 'singleCounter'
    }),
    variant () {
      let counter = parseInt(this.counter)
      return counter === 0 ? 'warning' : counter > 0 ? 'success' : 'danger'
    }
  }
}
</script>


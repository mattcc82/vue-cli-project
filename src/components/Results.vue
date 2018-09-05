<template>
  <section>
    <b-alert :variant="variant" show>{{ counter }}</b-alert>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types.js'

export default {
  computed: {
    ...mapGetters({
      counter: types.SINGLE_COUNTER
    }),
    variant () {
      let counter = parseInt(this.counter)
      return counter === 0 ? 'warning' : counter > 0 ? 'success' : 'danger'
    }
  }
}
</script>


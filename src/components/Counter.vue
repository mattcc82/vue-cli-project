<template>
  <section>
    <b-button @click="increment(1); count_click(1);" variant="primary">Increment 1</b-button>
    <b-button @click="decrement(1); count_click(1);" variant="danger">Decrement 1</b-button>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'count_click'
    ])
  }
}
</script>

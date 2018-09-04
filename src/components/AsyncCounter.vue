<template>
  <section>
    <b-button @click="async_increment({ by: 20, delay: 800 }); async_count_click({ by: 1, delay: 1000 });" variant="primary">Increment 20</b-button>
    <b-button @click="async_decrement({ by: 40, delay: 1200 }); async_count_click({ by: 1, delay: 1000 });" variant="danger">Decrement 40</b-button>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'async_increment',
      'async_decrement',
      'async_count_click'
    ])
  }
}
</script>

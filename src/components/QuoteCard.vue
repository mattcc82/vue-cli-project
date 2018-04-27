<template>
  <b-card @click="removeQuote()" class="text-center lead quote">
    <slot></slot>
  </b-card>
</template>
<script>
import { Bus } from '../main.js'

export default {
  props: ['quoteId'],
  methods: {
    removeQuote () {
      Bus.$emit('removeQuote', this.quoteId)
    }
  }
}
</script>
<style scoped>
.quote {
  font-style: italic;
  cursor: pointer;
}
</style>

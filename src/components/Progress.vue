<template>
  <div>
    <h5>Total Quotes</h5>
    <b-progress :value="value" :max="max" :variant="barVariant" show-value class="mb-3"></b-progress>
  </div>
</template>
<script>
export default {
  props: [
    'totalQuotes'
  ],
  data () {
    return {
      value: this.totalQuotes,
      max: 10,
      barVariant: 'primary'
    }
  },
  watch: {
    totalQuotes: function (v) {
      this.value = v
      if (v === 10) {
        this.barVariant = 'success'
      } else {
        this.barVariant = 'primary'
      }
    }
  }
}
</script>
<style scoped>

</style>

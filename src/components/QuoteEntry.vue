<template>
  <div>
    <b-form @submit="submitQuote" @reset="resetQuote" v-if="show">
      <b-form-group label="Quote Entry" label-for="quoteEntry" description="Please enter a quote">
        <b-form-textarea 
          id="quoteEntry"
          v-model="text"
          placeholder="Enter a quote"
          :rows="3"
          :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="totalQuotes >= 10">Submit</b-button>
      <b-button type="reset" variant="secondary">Clear</b-button>
    </b-form>
  </div>
</template>
<script>
import { Bus } from '../main.js'

export default {
  props: ['totalQuotes'],
  data () {
    return {
      text: '',
      show: true
    }
  },
  methods: {
    submitQuote: function (evt) {
      evt.preventDefault()
      Bus.$emit('quoteEntered', this.text)
      this.text = ''
    },
    resetQuote: function () {
      this.text = ''
    }
  }
}
</script>
<style scoped>

</style>

<template>
  <div id="app">
    <b-jumbotron :header="appTitle" :lead="appSubtitle">
      <my-progress :total-quotes="totalQuotes"></my-progress>
    </b-jumbotron>
    <my-quote-list>
      <my-quote-entry slot="quoteEntry" :total-quotes="totalQuotes"></my-quote-entry>
      <my-quote-card v-for="(quote, index) in quotes" :key="index" :quote-id="index">
        {{ quote }}
      </my-quote-card>
    </my-quote-list>
  </div>
</template>

<script>
import { Bus } from './main.js'
import Progress from './components/Progress.vue'
import QuoteEntry from './components/QuoteEntry.vue'
import Quotelist from './components/Quotelist.vue'
import QuoteCard from './components/QuoteCard.vue'

export default {
  name: 'app',
  components: {
    'my-progress': Progress,
    'my-quote-entry': QuoteEntry,
    'my-quote-list': Quotelist,
    'my-quote-card': QuoteCard

  },
  data () {
    return {
      appTitle: 'Quote-maker',
      appSubtitle: 'Enter some quotes into the Quote-maker',
      quotes: []
    }
  },
  computed: {
    totalQuotes () {
      return this.quotes.length
    }
  },
  methods: {
    makeQuote (text) {
      this.quotes.push(text)
    },
    removeQuote (index) {
      this.quotes.splice(index, 1)
    }
  },
  created () {
    Bus.$on('quoteEntered', (payload) => {
      this.makeQuote(payload)
    })
    Bus.$on('removeQuote', (payload) => {
      this.removeQuote(payload)
    })
  }
}
</script>

<style lang="scss">

</style>

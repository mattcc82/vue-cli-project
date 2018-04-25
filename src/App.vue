<template>
  <div id="app">
    <b-jumbotron :header="title" :lead="subtitle" >
      <b-button-group>
        <b-button @click="selectedComp = 'my-quotes'" variant="primary">Toggle Dynamic component 1</b-button>
        <b-button @click="selectedComp = 'my-author'" variant="secondary">Toggle Dynamic component 2</b-button>
        <b-button @click="selectedComp = 'my-new'" variant="info">Toggle Dynamic component 3</b-button>
      </b-button-group>
      <b-alert varient="info" show>{{ selectedComp }}</b-alert>
      <my-quote v-cloak>
        <h2 slot="title">{{ quotesTitle }}</h2>
        <keep-alive>
          <component v-if="selectedComp !== 'my-quotes'" :is="selectedComp"></component>
        </keep-alive>  
        <my-quotes
            v-if="selectedComp === 'my-quotes'"
            v-for="quote in quotes" 
            :key="quote.id"
            :qTitle="quote.qTitle"
            :qText="quote.qText"
            :qBtn="quote.qBtn"
            :qLink="quote.qLink"></my-quotes>
      </my-quote>
      <h4>Component lifecycle events</h4>
      <b-list-group>
        <b-list-group-item v-for="(trigger, index) in triggers" :key="index">{{ trigger }}</b-list-group-item>
      </b-list-group>
    </b-jumbotron>
  </div>
</template>

<script>
import { bus } from './main.js'
import Quote from './components/Quote'
import Quotes from './components/Quotes'
import Author from './components/Author'
import New from './components/New'

export default {
  components: {
    'my-quote': Quote,
    'my-quotes': Quotes,
    'my-author': Author,
    'my-new': New
  },
  data () {
    return {
      title: 'Vue Components',
      subtitle: 'Vue.js component experiment',
      quotesTitle: 'Today\'s Quotes',
      btnText: 'Click',
      quotes: [],
      selectedComp: 'my-quotes',
      triggers: []
    }
  },
  methods: {
    getQuotes: function () {
      let self = this
      setTimeout(function () {
        self.quotes = [
          { id: 0, name: 'Quote1', qTitle: 'Quote 1 Title', qText: 'Quote 1 text ', qBtn: 'Quote 1 Link', qLink: '#' },
          { id: 1, name: 'Quote2', qTitle: 'Quote 2 Title', qText: 'Quote 2 text ', qBtn: 'Quote 2 Link', qLink: '#' },
          { id: 2, name: 'Quote3', qTitle: 'Quote 3 Title', qText: 'Quote 3 text ', qBtn: 'Quote 3 Link', qLink: '#' }
        ]
      }, 1000)
    }
  },
  created () {
    this.getQuotes()
    bus.$on('lifecycleTriggered', (trigger) => {
      this.triggers.unshift(trigger)
    })
  }
}
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
</style>

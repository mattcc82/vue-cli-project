<template>
  <div id="app">
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Filters & Mixins</h1>
            <small>filters only affect the returned value, not the data value itself</small>
            <p class="lead">{{ text | toLowercase }}</p>
            <p class="lead">{{ text | toUppercase }}</p>
            <p class="lead">{{ text | toUppercase | chained }}</p>
            <p class="lead" v-html="$options.filters.makeRed(text)"></p>
            <code class="card"><pre>
            
              &lt;p class="lead"&gt;&#124;&#124; text | toLowercase &#125;&#125;&lt;/p&gt;
              &lt;p class="lead"&gt;&#124;&#124; text | toUppercase &#125;&#125;&lt;/p&gt;
              &lt;p class="lead"&gt;&#124;&#124; text | toUppercase | chained &#125;&#125;&lt;/p&gt;
              &lt;p class="lead" v-html="$options.filters.makeRed(text)"&gt;&lt;/p&gt;
            
              filters: {
                toLowercase (v) {
                  return v.toLowerCase() + ' - returned using "|" piped "toLowercase" filter'
                },
                toUppercase (v) {
                  return v.toUpperCase() + ' - returned using "|" piped "toUppercase" filter'
                },
                chained (v) {
                  return v.concat(' CHAINED!')
                },
                makeRed (v) {
                  return '&lt;span style="color: red;"&gt;' + v + '&lt;/span&gt;'
                }
              }
            </pre></code>
            <br><br>
            <h4>Using a computed property instead of filters for more complex things</h4>
            <button @click="colors.push(colorFilter)" class="btn btn-primary">
              Add new color
            </button>
            <input type="text" v-model="colorFilter" placeholder="Filter list...">
            <ul>
              <li v-for="color in filteredColors" :key="color">{{ color }}</li>
            </ul>
            <code class="card">
              <pre>

                &lt;input type="text" v-model="colorFilter" placeholder="Filter list..."&gt;
                &lt;ul&gt;
                  &lt;li v-for="color in filteredColors" :key="color"&gt;&#124;&#124; color &#125;&#125;&lt;/li&gt;
                &lt;/ul&gt;

                import colorMixin from './colorMixin.js'

                ...
                
                mixins: [ colorMixin ]

                ...

                --------------

                // './colorMixin.js'

                data () {
                  return {
                    colorFilter: '',
                    colors: [
                      'red',
                      'yellow',
                      'blue',
                      'green'
                    ]
                  }
                }

                computed: {
                  filteredColors () {
                    return this.colors.filter((element) => {
                      return element.match(this.colorFilter)
                    })
                  }
                }
              </pre>
            </code>
            <br><br>
            <h4>Imported Component - also using the repeated Mix-in code</h4>
            <my-list></my-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import colorMixin from './colorMixin.js'

export default {
  name: 'app',
  components: {
    'my-list': List
  },
  data () {
    return {
      text: 'Hi, I am some text'
    }
  },
  mixins: [
    colorMixin
  ],
  filters: {
    toLowercase (v) {
      return v.toLowerCase() + ' - returned using "|" piped "toLowercase" filter'
    },
    toUppercase (v) {
      return v.toUpperCase() + ' - returned using "|" piped "toUppercase" filter'
    },
    chained (v) {
      return v.concat(' CHAINED!')
    },
    makeRed (v) {
      return '<span style="color: red;">' + v + '</span>'
    }
  },
  created () {
    console.log('Created hook from the main App instance')
  }
}
</script>

<style lang="scss">

</style>

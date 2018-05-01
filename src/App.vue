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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: 'Hi, I am some text'
    }
  },
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
  }
}
</script>

<style lang="scss">

</style>

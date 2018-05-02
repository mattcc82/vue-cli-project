const colorMixin = {
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
  },
  computed: {
    filteredColors () {
      return this.colors.filter((element) => {
        return element.match(this.colorFilter)
      })
    }
  },
  created () {
    console.log('Created hook from the mixin')
  }
}

export default colorMixin

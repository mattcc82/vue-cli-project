<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p class="alert alert-secondary">User Name (reversed): {{ switchName() }}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  // props with validation
  props: {
    name: {
      type: String,
      required: true,
      default: function () {
        return 'Anon'
      }
    }
  },
  methods: {
    switchName () {
      return this.name.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

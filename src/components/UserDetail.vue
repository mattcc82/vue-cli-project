<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p class="lead alert alert-secondary">User Name (reversed): {{ switchName() }}</p>
        <p class="lead alert alert-primary">User Age: {{ userAge }}</p>
        <button class="btn btn-secondary" @click="resetName">Reset Name (custom event from child)</button>
        <button class="btn btn-warning" @click="resetFn()">Reset Name (callback from parent)</button>
    </div>
</template>

<script>
import { bus } from '../main.js'

export default {
  data () {
    return {

    }
  },
  // props with validation
  props: {
    name: {
      type: String,
      default: function () {
        return 'Anon'
      }
    },
    resetFn: {
      type: Function
    },
    userAge: Number
  },
  methods: {
    switchName () {
      return this.name.split('').reverse().join('')
    },
    resetName () {
      // emit custom event
      this.$emit('resetName', 'Anon')
    }
  },
  created () {
    const self = this
    bus.$on('ageEditedBus', function (payload) {
      self.userAge = payload
    })
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

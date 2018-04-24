<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p class="lead alert alert-primary">User Age: {{ userAge }}</p>
        <button class="btn btn-secondary" @click="editAge">Edit Age <small>(emit change to parent, age prop is updated in both siblings)</small></button>
        <button class="btn btn-secondary" @click="editAgeBus">Edit Age <small>(use event "bus")</small></button>
    </div>
</template>

<script>
import { bus } from '../main.js'

export default {
  props: ['userAge'],
  methods: {
    editAge () {
      this.userAge = 30
      this.$emit('ageEdited', this.userAge)
    },
    editAgeBus () {
      this.userAge = 30
      // bus.$emit('ageEditedBus', this.userAge)
      bus.changeAge(this.userAge)
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

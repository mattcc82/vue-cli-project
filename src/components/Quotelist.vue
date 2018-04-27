<template>
  <b-container fluid>
    <b-row>
      <b-col md="4">
        <slot name="quoteEntry"></slot>
      </b-col>
      <b-col md="8">
        <b-alert show>Your quotes will show up below - click a quote to remove it</b-alert>
        <b-card-group columns>
          <slot><span>Your next quote...</span></slot>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>

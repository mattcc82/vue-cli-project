<template>
  <b-container fluid>
    <b-row>
      <slot name="title"></slot>
    </b-row>
    <b-row>
      <slot>
        <div class="text-center col-md-12">
          <b-img src="./src/assets/loading.gif" alt="Loading..." />
        </div>  
      </slot>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: [
    'quote'
  ],
  data () {
    return {}
  }
}
</script>
<style scoped>
.container-fluid {
  border: 1px solid lightgray;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">{{ title }}<small>{{ copyright }}</small></b-col>
      </b-row>
    </b-container>
  </footer>  
</template>

<script>
export default {
  data () {
    return {
      title: 'Here is a sticky footer',
      copyright: '© ' + new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
</style>

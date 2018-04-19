<template>
  <div>
    <status>
      <server-info 
        v-for="server in servers" 
        :key="server.id" 
        :server-name="server.name"
        :server-status="server.status">
      </server-info>
    </status>
    <sticky-footer></sticky-footer>
  </div>
</template>

<script>
import Status from './Status.vue'
import ServerInfo from './ServerInfo.vue'
import Footer from './Footer.vue'
export default {
  components: {
    'status': Status,
    'server-info': ServerInfo,
    'sticky-footer': Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      servers: [
        { id: '1', name: 'North East', status: 'Critical' },
        { id: '2', name: 'North West', status: 'Critical' },
        { id: '3', name: 'South East', status: 'Normal' }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>

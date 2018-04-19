<template>
  <b-alert 
      show 
      class="m-12 clearfix lead" 
      :variant="status === 'Critical' ? 'danger' : 'primary'">
      
        {{ status }}
      
      <b-badge pill variant="secondary">{{ serverName }}</b-badge>
      <b-btn 
        @click="changeStatus"
        class="float-right"
        :class="{'disabled': rebooting || status !== 'Critical'}"
        :disabled="rebooting || status !== 'Critical'"
        :variant="status === 'Critical' ? 'danger' : 'primary'">
        <span v-show="!rebooting">{{ statusBtn }}</span>
        <span v-show="rebooting">Rebooting...</span>
      </b-btn>  
    </b-alert>
</template>

<script>
export default {
  data () {
    return {
      rebooting: false,
      btnText: '',
      status: this.serverStatus
    }
  },
  computed: {
    statusBtn: function () {
      return this.status === 'Critical' ? 'Reboot' : 'N/A'
    }
  },
  props: ['serverName', 'serverStatus'],
  methods: {
    changeStatus () {
      let vm = this
      this.rebooting = true
      setTimeout(function () {
        vm.status = 'Normal'
        vm.rebooting = false
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>

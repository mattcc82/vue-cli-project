<template>
  <div>
    <div 
      id="on"
      @click="toggle(true)"
      :class="{active: value}">
      On
    </div>
    <div 
      id="off"
      @click="toggle(false)"
      :class="{active: !value}">
      Off
    </div>
  </div>  
</template>
<script>
export default {
  props: [
    'value'
  ],
  data () {
    return {
      isOn: false
    }
  },
  methods: {
    toggle (value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style scoped>
#on, #off {
  width: 40px;
  height: 20px;
  color: black;
  background-color: gray;
  padding: 5px;
  display: inline-block;
  margin: 10px -5px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
}
#on.active {
  background-color: forestgreen;
  color: floralwhite;
}
#off.active {
  background-color: crimson;
  color: floralwhite;
}
</style>

<template>
  <section>
    <h2>User Page - User.vue</h2>
    <hr>
    <button @click="navHome" class="btn btn-lg btn-primary">Go Home</button>
    <hr>
    <router-view :users="users"></router-view>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      users: [
        { id: 1, handle: 'jdoe' },
        { id: 2, handle: 'ksmith' },
        { id: 3, handle: 'bpullman' }
      ]
    }
  },
  methods: {
    navHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

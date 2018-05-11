<template>
  <section>
    <h2>User Page</h2>
    <hr>
    <button @click="navHome" class="btn btn-lg btn-primary">Go Home</button>
  </section>
</template>

<script>
export default {
  methods: {
    navHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

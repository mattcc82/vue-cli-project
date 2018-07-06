<template>
  <section>
    <h2>User Edit Page - UserEdit.vue</h2>
    <p>Language: {{ $route.query.lang }}</p>
    <p>Locale: {{ $route.query.locale }}</p>
    <div style="margin-top: 2400px;">
      <p id="exampleAnchor">Click confirm to be able to leave this view</p>
      <button @click="confirmed = true" class="btn btn-success">Confirm</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.confirmed) {
      next()
    } else {
      if (confirm('Are you sure you want to leave')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>


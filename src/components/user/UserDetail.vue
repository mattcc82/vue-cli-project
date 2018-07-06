<template>
  <section>
    <h2>User Detail Page - UserDetail.vue</h2>
    <hr>
    <p>id: {{ $route.params.id }}</p>
    <router-link 
      class="btn btn-info"
      :to="link">
      Edit User
    </router-link>
  </section>
</template>
<script>
export default {
  props: ['users'],
  data () {
    return {
      link: {
        name: 'userEdit',
        params: {
          id: this.$route.params.id
        },
        query: {
          lang: 'en', locale: 'utc'
        },
        hash: '#exampleAnchor'
      }
    }
  }
}
</script>


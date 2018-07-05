<template>
  <section>
    <h2>User Detail Page - UserDetail.vue</h2>
    <hr>
    <p>id: {{ $route.params.id }}</p>
    <router-link 
      class="btn btn-info"
      :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { lang: 'en', locale: 'utc' } }">
      Edit User
    </router-link>
  </section>
</template>
<script>
export default {
  props: ['users']
}
</script>


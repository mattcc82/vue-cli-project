<template>
  <section>
    <h2>User Detail Page - UserDetail.vue</h2>
    <hr>
    <p>id: {{ $route.params.id }}</p>
  </section>
</template>
<script>
export default {
  props: ['users']
}
</script>


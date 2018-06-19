<template>
  <section>
    <h2>Select a User - UserStart.vue</h2>
    <hr>
    <ul class="list-group">
      <router-link
        v-for="user in users"
        :key="user.id"
        tag="li"
        :to="'/user/'+user.id"
        class="list-group-item">
          {{ user.handle }}
          <span class="badge badge-secondary">id: {{ user.id }}</span>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: []
    }
  }
}
</script>


<style scoped>
.list-group-item {
  cursor: pointer;
}
</style>

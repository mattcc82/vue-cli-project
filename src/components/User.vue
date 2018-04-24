<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button class="btn btn-primary" @click="changeName">Change name to "John"</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                  :name="name" 
                  @resetName="name = $event"
                  :resetFn="resetName"
                  :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                  :userAge="age"
                  @ageEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data () {
    return {
      name: 'Anon',
      age: 20
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName () {
      this.name = 'John'
    },
    resetName () {
      this.name = 'Anon'
    }
  }
}
</script>

<style scoped>
div {
    background-color: lightblue;
}
</style>

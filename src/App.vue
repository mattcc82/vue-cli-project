<template>
  <div id="app">
    <section class="jumbotron">
      <h1>http / xhr</h1>
      <hr>
      <div class="container">
        <p class="lead">Simple call to Firebase with vue-resource</p>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="form-box">
              <div class="form-group">
                <label for="username">Username</label>
                <input v-model="userObj.username" type="text" id="username" class="form-control">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="userObj.email" type="text" id="email" class="form-control">
              </div>
              <button @click.prevent="submit" type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="form-box">
              <p class="lead">Available records</p>
              <div class="row">
                <div class="col-sm-6">Username</div>
                <div class="col-sm-6">Email</div>
              </div>
              <ul class="list-group">
                <transition-group name="fade" appear>
                  <li class="list-group-item" v-for="(user, index) in userStore" :key="user.username + '_' + index">
                    <div class="row">
                      <div class="col-sm-6">{{ user.username }}</div>
                      <div class="col-sm-6">{{ user.email }}</div>
                    </div>
                  </li>
                </transition-group>
              </ul>
              <br><br>
              <button @click.prevent="fetch" type="button" class="btn btn-secondary">Fetch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userObj: {
        username: '',
        email: ''
      },
      userStore: []
    }
  },
  methods: {
    submit () {
      let self = this
      this.$http.post('', this.userObj)
        .then(response => {
          for (let key in self.userObj) {
            self.userObj[key] = ''
          }
        }, error => {
          console.warn(error)
        })
    },
    fetch () {
      this.$http.get('')
        .then(response => {
          return response.json()
        }, error => {
          console.warn(error)
        }).then(data => {
          const results = []
          for (let key in data) {
            results.push(data[key])
          }
          this.userStore = results
        })
    }
  }
}
</script>

<style lang="scss">
.form-box {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

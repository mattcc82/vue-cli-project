<template>
  <div id="app">
    <section class="jumbotron">
      <h1>http / xhr</h1>
      <h3>vue-resource / firebase</h3>
      <hr>
      <div class="container-fluid">
        <p class="lead">Simple call to Firebase with vue-resource</p>
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <div class="form-box">
              <div class="form-group">
                <label for="username">Username</label>
                <input v-model="userObj.username" type="text" id="username" class="form-control">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="userObj.email" type="text" id="email" class="form-control">
              </div>
              <button @click.prevent="submit('data')" type="submit" class="btn btn-primary">Submit To Data db</button>
              <button @click.prevent="submit('alt')" type="submit" class="btn btn-secondary">Submit To Alt db</button>
            </div>
          </div>
          <div class="col-sm-12 col-md-8">
            <div class="form-box">
              <p class="lead">Available records for <span class="badge" :class="currentDb === 'data' ? 'badge-primary' : 'badge-secondary'">{{ currentDb }}</span></p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-secondary">
                  <div class="row">
                    <div class="col-sm-3">Key</div>
                    <div class="col-sm-3">Username</div>
                    <div class="col-sm-4">Email</div>
                    <div class="col-sm-2">Remove</div>
                  </div>
                </li>
                <transition-group name="slide-fade" mode="out-in" appear class="list-scroll">
                  <li class="list-group-item" v-for="(value, key) in userStore" :key="key">
                    <div class="row">
                      <div class="col-sm-3">{{ key }}</div>
                      <div class="col-sm-3">{{ value.username }}</div>
                      <div class="col-sm-4">{{ value.email }}</div>
                      <div class="col-sm-2">
                        <span @click="remove(currentDb, key)" class="badge badge-danger badge-pill text-center remove-btn">X</span>
                      </div>
                    </div>
                  </li>
                </transition-group>
              </ul>
              <br><br>
              <button @click.prevent="fetch('data')" type="button" class="btn btn-primary">Fetch From Data db</button>
              <button @click.prevent="fetch('alt')" type="button" class="btn btn-secondary">Fetch From Alt db</button>
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
      userStore: {},
      resource: {},
      currentDb: 'data'
    }
  },
  methods: {
    submit (db) {
      let self = this
      this.currentDb = db
      this.resource.save({db: this.currentDb}, this.userObj)
        .then(response => {
          for (let key in self.userObj) {
            self.userObj[key] = ''
          }
          self.fetch(db)
        }, error => {
          console.warn(error)
        })
    },
    fetch (db) {
      this.currentDb = db
      this.resource.get({db: this.currentDb})
        .then(response => {
          return response.json()
        }, error => {
          console.warn(error)
        }).then(data => {
          this.userStore = data
        })
    },
    remove (db, key) {
      let self = this
      this.currentDb = db
      this.resource.removeKey({db: db, key: key})
        .then(response => {
          self.fetch(this.currentDb)
        }, error => {
          console.warn(error)
        })
    }
  },
  created () {
    const customActions = {
      removeKey: {
        method: 'DELETE',
        url: '{db}/{key}.json'
      }
    }
    // resource(url, [params], [actions], [options])
    this.resource = this.$resource('{db}.json', {}, customActions)
  },
  mounted () {
    this.fetch(this.currentDb)
  }
}
</script>

<style lang="scss">
.form-box {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-move {
  transition: transform 1s;
}
.list-scroll {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
.remove-btn {
  cursor: pointer;
}
</style>

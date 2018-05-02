<template>
  <div id="app">
    <div class="jumbotron">
      <transition name="fade-slide" appear>
          <div class="container" v-show="pageShow">
            <h1>Animation</h1>
            <p class="lead">
              This whole page transitions on "appear"
              <button @click="reloadPage" class="btn btn-success btn-sm">Reload</button>
            </p>
            <code class="card" style="white-space: pre;">
              &lt;transition name="fade-slide" appear&gt;
            </code>
            <hr>
            <div class="row item-row" v-for="obj in showObj" :key="obj.id">
              <div class="col-md-12">
                <button type="button" class="btn" :class="'btn-' + obj.class" @click="obj.show = !obj.show">Toggle {{ obj.animate }}</button>
                  <br><br>
                  <div class="fixed-container">
                    <transition :name="obj.animate" :type="obj.animate === 'zoom' ? 'animation' : 'transition'" >
                      <p v-show="obj.show" class="alert" :class="'alert-' + obj.class">{{ obj.class | capitalize }} Alert!</p>
                    </transition>
                  </div>
                  <br><br>
                  <code class="card" style="white-space: pre;">
                    {{ css[obj.id] }}
                  </code>
                </div>
              </div>
            </div>
        </transition>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    reloadPage () {
      let self = this
      this.pageShow = false
      setTimeout(() => {
        self.pageShow = true
      }, 1000)
    }
  },
  filters: {
    capitalize (v) {
      if (!v) return ''
      v = v.toString()
      return v.charAt(0).toUpperCase() + v.slice(1)
    }
  },
  data () {
    return {
      pageShow: true,
      showObj: [
        { id: 0, show: false, class: 'primary', animate: 'fade' },
        { id: 1, show: false, class: 'info', animate: 'slide' },
        { id: 2, show: false, class: 'success', animate: 'fade-slide' },
        { id: 3, show: false, class: 'warning', animate: 'zoom' }
      ],
      css: [
        `
        // fade transition
        // attached at 1 frame at beginning of transition
        .fade-enter {
          opacity: 0;
        }
        // where vue is looking for duration of css animation
        .fade-enter-active {
          transition: opacity 1s;
        }
        .fade-leave-active {
          transition: opacity 1s;
          opacity: 0;
        }`,
        `
        // slide
        .slide-enter {
          transform: translateX(20px);
        }
        .slide-enter-active {
          transition: all .3s ease-in;
        }
        .slide-leave-active {
          transition: all .75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
          transform: translateX(50px);
        }`,
        `// fade-slide
        .fade-slide-enter {
          transform: translateY(50px);
          opacity: 0;
        }
        .fade-slide-enter-active {
          transition: all .5s ease-in-out;
        }
        .fade-slide-leave-active {
          transition: 1s ease-in-out;
          transform: translateY(50px);
          opacity: 0;
        }`,
        `// zoom
        .zoom-enter-active {
          animation: zoom-in 1s;
        }
        .zoom-leave-active {
          animation: zoom-in .5s reverse;
        }
        @keyframes zoom-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.25);
          }
          100% {
            transform: scale(1);
          }
        }`
      ]
    }
  }
}
</script>

<style lang="scss">
.item-row {
  margin-bottom: 20px;
}
.fixed-container {
  height: 30px;
}

// fade transition

// attached at 1 frame at beginning of transition
.fade-enter {
  opacity: 0;
}
// where vue is looking for duration of css animation
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}


// slide
.slide-enter {
  transform: translateX(20px);
}
.slide-enter-active {
  transition: all .3s ease-in;
}
.slide-leave-active {
  transition: all .75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transform: translateX(50px);
}

// fade-slide
.fade-slide-enter {
  transform: translateY(50px);
  opacity: 0;
}
.fade-slide-enter-active {
  transition: all .5s ease-in-out;
}
.fade-slide-leave-active {
  transition: 1s ease-in-out;
  transform: translateY(50px);
  opacity: 0;
}

// zoom
.zoom-enter-active {
  animation: zoom-in 1s;
}
.zoom-leave-active {
  animation: zoom-in .5s reverse;
}
@keyframes zoom-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>

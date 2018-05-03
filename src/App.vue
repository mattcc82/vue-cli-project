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
            <h4>Use Animate.css styles for <code>&lt;transition&gt;</code> Vue.js wrapper component</h4>
            <select v-model="optionSelected" @change="animateReload">
              <option v-for="(option, index) in options" :value="option.value" :key="index">{{ option.text }}</option>
            </select> 
            <br><br>
            <transition
              appear
              :enter-active-class="optionSelected"
              :leave-active-class="optionSelected">
              <code v-show="animateCssShow" class="card" style="white-space: pre;">
                {{ optionSelected }}
                &lt;transition
                  appear
                  :enter-active-class="optionSelected"
                  :leave-active-class="optionSelected"&gt;
                  &lt;p v-show="animateCssShow" class="alert alert-danger text-center"&gt;{{ optionSelected }}&lt;/p&gt;
                &lt;/transition&gt;
              </code>
            </transition>
            <hr>
            <h4>Custom transitions</h4>
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
              <hr>
              <h4>Multiple element transitions</h4>
              <button @click="multiShow = !multiShow" class="btn" :class="multiShow ? 'btn-info' : 'btn-success'">Toggle Multiple Transition</button>
              <select v-model="multiSelect">
                <option value="out-in">Out-In</option>
                <option value="in-out">In-Out</option>
              </select>
              <select v-model="multiAnimate">
                <option v-for="(obj, index) in showObj" :value="obj.animate" :key="index">{{ obj.animate }}</option>
              </select>
              <br><br>
              <div class="item-row">
                <transition 
                  :name="multiAnimate"
                  :mode="multiSelect">
                  <p v-if="multiShow" class="alert alert-info text-center" key="1">Element 1</p>
                  <p v-if="!multiShow" class="alert alert-success text-center" key="2">Element 2</p>
                </transition>
              </div>
              <code class="card" style="white-space: pre;">
                multiAnimate: {{ multiAnimate }}
                multiSelect: {{ multiSelect }}
                &lt;transition 
                  :name="multiAnimate"
                  :mode="multiSelect"&gt;
                  &lt;p v-if="multiShow" class="alert alert-info text-center" key="1"&gt;Element 1&lt;/p&gt;
                  &lt;p v-if="!multiShow" class="alert alert-success text-center" key="2"&gt;Element 2&lt;/p&gt;
                &lt;/transition&gt;
              </code>
              <hr>
              <h4>JS Hooks</h4>
              <button @click="jsMethod" class="btn btn-primary">Toggle</button>
              <br><br>
              <div class="item-row js-block">
                <!-- dont look for css animations in this transition -->
                <!-- :css="false" -->
                <transition
                  :css="false"
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled">
                  <div v-if="jsShow" class="green-square"></div>
                </transition>
              </div>
              <code class="card" style="white-space: pre; min-height: 40px;">
                Recorded Hooks:
                <ul>
                  <li v-for="(hook, index) in jsHooks" :key="index">{{ hook }}</li>
                </ul>
                <hr>
                borderRadius: {{ jsEl.borderRadius }}
                opacity: {{ jsEl.opacity }}
              </code>
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
    },
    animateReload () {
      let self = this
      this.animateCssShow = false
      setTimeout(() => {
        self.animateCssShow = true
      }, 10)
    },
    jsMethod () {
      this.jsShow = !this.jsShow
      this.jsHooks = []
    },
    // js animation hooks
    beforeEnter (el) {
      this.jsHooks.push('beforeEnter')
      el.style.borderRadius = '0% 0% 0% 0%'
      el.style.opacity = 0
    },
    enter (el, done) {
      this.jsHooks.push('enter')
      let round = 1
      const interval = setInterval(() => {
        el.style.borderRadius = round + '% ' + round + '% ' + round + '% ' + round + '%'
        el.style.opacity = ((round * 2) * 0.01)
        this.jsEl.borderRadius = round
        this.jsEl.opacity = ((round * 2) * 0.01)
        round++
        if (round >= 50) {
          clearInterval(interval)
          // need to call done to signal when this hook is done
          done()
        }
      }, 20)
    },
    afterEnter (el) {
      this.jsHooks.push('afterEnter')
    },
    enterCancelled (el) {
      this.jsHooks.push('enterCancelled')
    },
    beforeLeave (el) {
      this.jsHooks.push('beforeLeave')
      el.style.borderRadius = '50%'
      el.style.opacity = 1
    },
    leave (el, done) {
      this.jsHooks.push('leave')
      let round = 50
      const interval = setInterval(() => {
        el.style.borderRadius = round + '% ' + round + '% ' + round + '% ' + round + '%'
        el.style.opacity = ((round * 2) * 0.01)
        this.jsEl.borderRadius = round
        this.jsEl.opacity = ((round * 2) * 0.01)
        round--
        if (round <= 0) {
          clearInterval(interval)
          // need to call done to signal when this hook is done
          done()
        }
      }, 20)
    },
    afterLeave (el) {
      this.jsHooks.push('afterLeave')
    },
    leaveCancelled (el) {
      this.jsHooks.push('leaveCancelled')
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
      multiShow: true,
      multiSelect: 'out-in',
      multiAnimate: 'fade',
      jsShow: false,
      jsHooks: [],
      jsEl: {
        borderRadius: 0,
        opacity: 0
      },
      animateCssShow: true,
      optionSelected: 'animated bounce',
      options: [
        { value: 'animated bounce', text: 'bounce' },
        { value: 'animated lightSpeedIn', text: 'lightSpeedIn' },
        { value: 'animated flash', text: 'flash' },
        { value: 'animated pulse', text: 'pulse' },
        { value: 'animated rubberBand', text: 'rubberBand' },
        { value: 'animated wobble', text: 'wobble' },
        { value: 'animated bounceIn', text: 'bounceIn' },
        { value: 'animated fadeInLeft', text: 'fadeInLeft' },
        { value: 'animated zoomOut', text: 'zoomOut' },
        { value: 'animated hinge', text: 'hinge' }
      ],
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
.js-block {
  min-height: 150px;
}
.green-square {
  width: 120px;
  height: 120px;
  background-color: aquamarine;
  border: 1px solid green;
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

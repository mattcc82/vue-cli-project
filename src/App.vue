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
              <hr>
              <h4>Component Transition</h4>
              <button 
                @click="selectedAlert === 'alert-info' ? selectedAlert = 'alert-danger' : selectedAlert = 'alert-info'" 
                class="btn"
                :class="selectedAlert === 'alert-info' ? 'btn-info' : 'btn-danger'">Transition Component</button>
              <br><br>
              <transition 
                name="zoom" 
                mode="out-in">
                <component :is="selectedAlert"></component>
              </transition>
              <hr>
              <h4>Transition group <code>&lt;transition-group&gt;</code> </h4>
              <button @click="addItem" class="btn btn-primary" :disabled="itemList.length >= 5">Add Item</button>
              <br><br>
                <ul class="list-group">
                  <transition-group name="slide">
                    <li class="list-group-item" v-for="(item, index) in itemList" :key="item">
                      {{ item }}
                      <button @click="removeItem(index)" class="btn btn-danger btn-sm float-right">Delete Item</button>
                    </li>
                  </transition-group>
                </ul>
                <br><br>
                <code class="card" style="white-space: pre;">
                  &lt;button @click="addItem" class="btn btn-primary" :disabled="itemList.length &gt;= 5"&gt;Add Item&lt;/button&gt;
                  &lt;br&gt;&lt;br&gt;
                  &lt;ul class="list-group"&gt;
                    &lt;transition-group name="slide"&gt;
                      &lt;li class="list-group-item" v-for="(item, index) in itemList" :key="item"&gt;
                        item
                        &lt;button @click="removeItem(index)" class="btn btn-danger btn-sm float-right"&gt;Delete Item&lt;/button&gt;
                      &lt;/li&gt;
                    &lt;/transition-group&gt;
                  &lt;/ul&gt;

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
                .slide-move {
                  transition: 1s;
                }
                </code>
            </div>
        </transition>
        <hr>
        <h4>Shuffle custom transition</h4>
        <br><br>
        <button @click="shuffle" class="btn btn-primary">Shuffle!</button>
        <br><br>
        <transition-group name="shuffle" tag="div" class="shuffle-container">
          <div v-for="cell in cells" :key="cell.id" class="cell" :style="{'background-color': cellColors[cell.number - 1]}"></div>
        </transition-group>
        <br><br>
        <code class="card" style="white-space: pre;">
          &lt;button @click="shuffle" class="btn btn-primary"&gt;Shuffle!&lt;/button&gt;
          &lt;br&gt;&lt;br&gt;
          &lt;transition-group name="shuffle" tag="div" class="shuffle-container"&gt;
            &lt;div v-for="cell in cells" :key="cell.id" class="cell" :style="{'background-color': cellColors[cell.number - 1]}"&gt;&lt;/div&gt;
          &lt;/transition-group&gt;

          cells: Array.apply(null, { length: 36 })
            .map(function (_, index) {
              return {
                id: index,
                number: index % 6 + 1
              }
            }),
          cellColors: [
            'yellow',
            'pink',
            'brown',
            'magenta',
            'teal',
            'orange'
          ]

          shuffle () {
            this.cells = _.shuffle(this.cells)
          }

          // shuffle classes
        .shuffle-container {
          display: flex;
          flex-wrap: wrap;
          width: 148px;
          margin-top: 10px;
        }
        .cell {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 25px;
          height: 25px;
          border: 1px solid #aaa;
          margin-right: -1px;
          margin-bottom: -1px;
        }
        .shuffle-move {
          transition: transform 1s;
        }
        </code>
      </div>
    </div>
</template>

<script>
import _ from 'lodash'
import Info from './Info.vue'
import Danger from './Danger.vue'

export default {
  name: 'app',
  components: {
    alertDanger: Danger,
    alertInfo: Info
  },
  methods: {
    reloadPage () {
      let self = this
      this.pageShow = false
      setTimeout(() => {
        self.pageShow = true
      }, 1000)
    },
    addItem () {
      this.itemList.push(this.removeList.splice(0, 1)[0])
    },
    removeItem (index) {
      this.removeList.push(this.itemList.splice(index, 1)[0])
    },
    shuffle () {
      this.cells = _.shuffle(this.cells)
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
      selectedAlert: 'alert-info',
      itemList: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5'
      ],
      cells: Array.apply(null, { length: 36 })
        .map(function (_, index) {
          return {
            id: index,
            number: index % 6 + 1
          }
        }),
      cellColors: [
        'yellow',
        'pink',
        'brown',
        'magenta',
        'teal',
        'orange'
      ],
      removeList: [],
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
.slide-move {
  transition: 1s;
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
.fade-slide-move {
  transition: transform 1s;
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

// shuffle classes
.shuffle-container {
  display: flex;
  flex-wrap: wrap;
  width: 148px;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.shuffle-move {
  transition: transform 1s;
}

</style>

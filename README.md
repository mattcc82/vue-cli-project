# vue-cli-project

> Vue.js project using vue-cli & webpack-simple temlpate

## If you fork or clone this repo - Get up and running:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


# What is a good starting workflow for Vue JS?

- It should include a build process that optimizes (compiles) code
- It can leverage ES6 code that is polyfilled / transpiled to ES5 for compatibility
- It should include a developer server (http)
   
   - Need to be able to test the app under realistic circumstances
   
   - Lazy or async loading of code

- It should allow you to include special features between "Code" --> Sever --> User(Client)
   
   - Compiling Single File Templates (.vue)
   
   - Case-insensitive Component Selectors
   
   - Preprocessors (babel, scss)
   
   - Minify/Uglify/Bundler
   
   - etc.

- Linting and uniform formatting (ESLint)

## Options

+ Webpack with vue-loader

    - requires you to setup your own customized build process and config
    - reference the "Vue SPA" (https://github.com/mattcc82/vue_spa)

+ ** *Vue CLI**

    - less setup and automatically deals with fetching of VueJS Project Templates

## Vue CLI

Globally install vue-cli using node package manager

```
npm install -g vue-cli
```

Which gives you access to few available project/build templates:

- simple

    > index.html + Vue CDN import

- ** *webpack-simple**

    > **Basic Webpack Workflow**
    
    > (https://github.com/vuejs-templates/webpack-simple)

- webpack

    > Complex Webpack Workflow (includes testing modules)

- browserify / browserify-simple

    > Browserify Workflows

Navigate to where you want to initialize a vue-cli project template & follow the prompts

```
$ vue init webpack-simple my-project
$ cd my-project
$ npm install
$ npm run dev
```

## More on ".vue" files and the CLI

### The ".vue" File

You can learn more about ".vue" Files in this Article from the official Docs: (http://vuejs.org/guide/single-file-components.html)

Learn more about the render()  method in another Article in the official Docs: (http://vuejs.org/guide/render-function.html)

Finally, it's important to be aware of the fact, that you can also load your App.vue File (your main Component/ Instance) via the following two Ways (Alternatives to render() ):

#### 1) Using the ES6 Spread Operator (for that, you need to add babel-preset-stage-2 as a Dependency and to your .babelrc File):

```bash
npm install --save-dev babel-preset-stage-2 
```

.babelrc:

```javascript
{
  "presets": [
    ["es2015", { "modules": false }],
    ["stage-2"]
  ]
}


import Vue from 'vue'
import App from './App.vue'
 
new Vue({
  el: '#app',
  ...App
});
```

#### 2) Using mount() :

Also install the stage-2 preset as described above.

```javascript
import Vue from 'vue'
import App from './App.vue'
 
const vm = new Vue({
  ...App
});
 
vm.$mount('#app');
```

### The CLI

Learn more about the CLI here: (https://github.com/vuejs/vue-cli)

Local CSS / Sass Files and CLI Templates

The webpack-simple template doesn't support local CSS or Sass files, because no CSS loader is set up.

Use the webpack template (not webpack-simple) to get this functionality: (https://github.com/vuejs-templates/webpack)

### Components

#### Useful links

- Official Docs - Props: (http://vuejs.org/guide/components.html#Props)

- Official Docs - Custom Events: (http://vuejs.org/guide/components.html#Custom-Events)

- Official Docs - Non-Parent-Child Communication: (http://vuejs.org/guide/components.html#Non-Parent-Child-Communication)

### Forms

#### Useful links

- Official Docs - Forms: (http://vuejs.org/guide/forms.html)

### Custom Directives

#### Useful links

- Official Docs - Custom Directives: (http://vuejs.org/guide/custom-directive.html)

### Filters & Mixins

#### Useful links

- Official Docs - Filters: (https://vuejs.org/v2/guide/filters.html)

- Official Docs - Mixins: (http://vuejs.org/guide/mixins.html)

### Animation / Transitions

#### Useful links

- official Docs - Enter/Leave & List Transitions: (https://vuejs.org/v2/guide/transitions.html)

- official Docs - State Transitions: (https://vuejs.org/v2/guide/transitioning-state.html)

### HTTP (using vue-resource)

#### Useful links

- vue-resource on Github: https://github.com/yyx990803/vue-resource

- Some Code Recipes for vue-resource: https://github.com/yyx990803/vue-resource/blob/master/docs/recipes.md

- Template URLs: https://medialize.github.io/URI.js/uri-template.html

- Requests and Responses (incl. Different File Formats): https://github.com/yyx990803/vue-resource/blob/master/docs/http.md

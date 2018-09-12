<template>
  <div class="fullscreen-bg">
    <div class="centered text-center">
      <h1>404</h1>
      <p class="lead">Page Not Found</p>
      <router-link to="/" class="btn btn-outline-light btn-lg">
        Go Home
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 100;
    background-color: #C82333;
    color: white;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>

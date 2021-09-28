<template>
  <div id="app">
      <router-view/>
    </div>
</template>

<style lang="scss">
@import "assets/scss/main.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
.container {
  position: relative;
  max-width: 1310px;
  width: 100%;
  margin: 0 auto;
}

</style>

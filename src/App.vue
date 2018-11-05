<template>
  <div id="app">
    <img class="img" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  .img {
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
}
</style>

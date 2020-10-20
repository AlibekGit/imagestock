<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
      name: 'App'
}
</script>

<style lang="scss">
        @import "~materialize-css/dist/css/materialize.min.css";
        @import "~lightgallery.js/dist/css/lightgallery.css";
          body{
            margin: 0;
            padding: 0;
          }
        .container{
            max-width: 1400px;
            margin: 0 auto;
        }
</style>

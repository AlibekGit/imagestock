<template>
  <div id="app">
      <navbar/>
      <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
    name: 'App',
    components:{
        navbar
    }
}
</script>

<style lang="scss">
        @import "~materialize-css/dist/css/materialize.min.css";
        @import "~lightgallery.js/dist/css/lightgallery.css";
        @font-face {
            font-family: 'SF UI Display Light';
            font-style: normal;
            font-weight: normal;
            src: local('SF UI Display Light'), url('./assets/fonts/sf-ui-display-light.woff') format('woff');
        }
          body{
                margin: 0;
                padding: 0;
              font-family: 'SF UI Display Light';
              color: white;
          }
        .container{
            max-width: 1290px;
            margin: 0 auto;
        }
</style>

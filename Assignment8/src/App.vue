<template>
  <div id="app">
    <Navigation />
    <Billboard />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Billboard from './components/Billboard'

export default {
  name: 'App', 
    components: {
      Navigation,
      Billboard
      
    }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

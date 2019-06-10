<template>
  <div>
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from './partials/nav'
import axios from 'axios'

// key access for every axios request we make
axios.defaults.headers.common['user-key'] = 'd35843537b1638497ca2cf78c23d6ed1'

export default {
  components: {
    Nav
  }
  
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

header {
  background: #F9F9F9;
  display: grid;
  grid-template-columns: repeat(2, auto)
}

.logo {
  padding: 1em 2em;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: black;
  list-style: none;
  font-size: 1rem;
}

nav {
  justify-self: right;
}

ul {
  list-style-type: none;
}

li {
  display: inline;
}

li a {
  padding: 1rem 2rem;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  color: #3E3E3E;
  list-style: none;
  font-size: .8rem;
  /* background: gray; */
}

li a:hover {
  color: black;
}
</style>


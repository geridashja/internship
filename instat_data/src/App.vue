<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/show_data">Search for data</router-link>
  </div>
  <show-data />
  <router-view/>
</template>

<script>
import show_data from './views/show_data.vue'
export default {
  name: "App",
  components: {
    show_data
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

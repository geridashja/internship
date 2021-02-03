<template>
  <h1>ToDo</h1>
  <Add/>
  <Show v-bind:todos="todos"/>
</template>

<script>
import Add from './components/Add.vue'
import Show from './components/Show.vue'

export default {
  name: 'App',
  components: {Add,Show},
  data(){
    return {
      todos : [
        {
          id :'1',
          name :'Todo1'
        },
        {
          id : '2',
          name :'Todo2'
        },

      ]
    }
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
  margin-top: 60px;
}
</style>

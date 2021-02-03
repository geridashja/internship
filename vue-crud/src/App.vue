<template>
  <h1>ToDo</h1>
  <Add v-on:add="addit"/>
  <Show v-on:deletetodo="deletetodo" v-bind:todos="todos"/>
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
      ]
    }
  },
  methods: {
    addit(todo){
     this.todos = [...this.todos, todo] 
    },
    deletetodo(id){
      //used to see if the todo.id matched with the passed id using the filter method
      this.todos = this.todos.filter((todo) => todo.id !== id)
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

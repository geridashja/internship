<template>
  <div id="app">
    <h1>ALL RECIPES</h1>
    <hr>
    <p><strong>Add recipes down below:</strong></p>
    <input v-model="recipe" placeholder="add recipe">
    <button @click="add()">Add recipe</button>
    <p>Message is: {{ recipe }}</p>
    <!-- <li v-for="item in items" :key = "item">
      {{item}}
    </li> -->
  </div>
</template>

<script>
import axios from 'axios';
// import HelloWorld from './components/HelloWorld.vue'
// import { getrecipes }  from './connection'
export default {
  name: 'App',
  data(){
    return {
      recipe : ''
    }
  },
  // async mounted() {
  //   await axios.get("http://localhost:3000/recipes").then(response => this.items = response.data);
  // },
  methods: {
    // created() {
    //   axios.get('http://localhost:3000/recipes').then(response => this.recipes = response.data);
    //   // console.log(this.recipes);
    // }
    add(){
      const item = this.recipe;
      axios.post('http://localhost:3000/create',item);
      // this.items.push(response.data);
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

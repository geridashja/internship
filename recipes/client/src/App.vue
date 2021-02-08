<template>
  <div id="app">
    <h1>ALL RECIPES</h1>
    <hr>
    <p><strong>Add recipes down below:</strong></p>
      <input v-model="recipe" placeholder="add recipe">
      <button @click="add()" >Add recipe</button>
    <!-- <p>Message is: {{ recipe }}</p> -->
    <!-- <li v-for="(item) in items" :key = "item">
      {{item.rows[0].all_id}}
    </li> -->
    <div v-for="item in items" :key="item.id">
      <div v-for="row in item.rows" :key="row.id">
          <h4>{{row.body }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return {
      items: [],
      recipe : ''
    }
  },
  async mounted(){
    const contacts = await axios.get('http://localhost:3000/recipes');
    this.items = contacts;
    console.log(contacts.data);
  },
  methods: {
    add(){
      const item = this.recipe;
      axios.post('http://localhost:3000/create',item);
    },
    // async getdata(){
    //   const contacts = await axios.get('http://localhost:3000/recipes');
    //   this.items = contacts;
    //   console.log(contacts.data);
    // }
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

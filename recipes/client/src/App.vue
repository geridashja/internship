<template>
  <div id="app">
    <h1>ALL RECIPES</h1>
    <hr>
    <p><strong>Add recipes down below:</strong></p>

    <form @submit="add">
      <input v-model="recipe" placeholder="add recipe">
      <button v-on:click="refresh">Add recipe</button>
    </form>

    <div v-for="item in items" :key="item.id">
      <div v-for="row in item.rows" :key="row.id">
        <tbody>
          <tr>
            <th>{{row.body }}</th>
          </tr>
        </tbody>
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
    async add(){
      const item = this.recipe;
      await axios.post('http://localhost:3000/create',item).then(response => {
        this.items.push(response.data);
      });
      this.recipe = "";
    },
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

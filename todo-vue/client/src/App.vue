<template>
<div id="app">
  <h1>TODO</h1>
  <hr>
  <p><strong> Add to TODO list:</strong></p>
  <div class="form">
    <form>
      <input type="text" placeholder="Add to TODO" required v-model="body">
      <br>
      <button @click="add">Add</button> 
    </form>
    <div v-for="data in datas" v-bind:key = "data._id">
      {{ data.body }}
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  data(){
    return {
      datas: [],
      body: ''
    }
  },
  methods: {
    add(e){
      e.preventDefault()
      const response = axios.post('database/')
      
    }
  },
  async mounted() {
    const response = await axios.get('router/api/database/')
    //fetching the data
    this.datas = response.data;
    console.log(this.datas)
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

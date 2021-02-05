<template>
<div id="app">
  <h1>TODO</h1>
  <hr>
  <p><strong> Add to TODO list:</strong></p>
  <div class="form">
    <!-- <form>
      <input type="text" placeholder="Add to TODO" required v-model="body">
      <br>
      <button>Add</button> 
    </form> -->
    <div>
      <ul>
      <li v-for="data in datas" :key = "data._id">
        {{ data.body}}
      </li>
    </ul>
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
      body : ''
    }
  },
  methods: {
    
  },
  mounted() {
    axios.get('http://localhost:3000//router/routes').then((response)=>{
      this.datas = response;
      console.log(response);
      });
    //fetching the data

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

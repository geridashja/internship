<template>
<div id="app">
  <h1>TODO</h1>
  <hr>
  <p><strong> Add to TODO list:</strong></p>
  <div class="form">
    <form>
      <input type="text" placeholder="Add to TODO" required v-model="body">
      <br>
      <button>Add</button> 
    </form>
    {{body}}
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      body: ''
    }
  },
  methods: {
    // add(e){
    //   e.preventDefault(),
    //   this.body = body,
    //   this.body = "";
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

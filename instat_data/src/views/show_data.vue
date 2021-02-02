<template>
  <div class="show">
    <h1>Show Data</h1>
    <form>
      <input type="text" v-model="year" placeholder="Enter the year">
      <!-- <button type="submit">Get Data</button> -->
    </form>
    <p><strong>Year is:</strong> {{ year }}</p>
  </div>
</template>

<script>
export default {
  name: 'show_data',
  components: {
    data: function (){
      return {
        year: ""
      }
    }
  }
}
</script>
<template>
    <div class="elem">
        <!-- <div v-for="todo in todos" v-bind:key = "todo.id"> -->
            {{todo.name}} 
        <button>Delete</button>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["todo"]
}
</script>
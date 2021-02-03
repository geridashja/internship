<template>
    <div class="elem">
        <!-- <div v-for="todo in todos" v-bind:key = "todo.id"> -->
        {{todo.name}} 
        <button @click="$emit('deletetodo', todo.id)">Delete</button>
        <button @click="update">Update</button>
        <!-- </div> -->
        <div v-if="this.isit">
            <form @submit="updateitem">
                <input type="text" placeholder="Update" required v-model="updatedname">
                <br>
                <br>
                <button>Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["todo", "todos", "name", "id"],
    methods:{
        update(){
            this.isit = !this.isit
            
        },
        updateitem(e){
            e.preventDefault()
            // const newtodo = {
            // id:Date.now(),
            // name : this.name
            //updatingg the data using filter
            this.todos.filter((todo)=> {
                if(todo.id == this.todo.id){
                    todo.name = this.updatedname
                }
            })
            this.isit = false;
        }
    },
    data(){
        return{
            isit:false,
            updatedname : ""
        }
    }
}
</script>
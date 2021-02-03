<template>
    <div class="Add">
        <p><strong> Add to ToDo list:</strong></p>
    </div>
    <div class="form">
        <form @submit="add">
            <input type="text" placeholder="Add reminders" required v-model="name">
            <br>
            <br>
            <button>Add</button>
        </form>
    </div>
</template>


<script>
export default {
    name: 'Add',
    data() {
        return {
            name : ""
        }
    },
    methods: {
        add(e){
            e.preventDefault()
            const newtodo = {
                id:Date.now(),
                name : this.name
            }
            //sending an event out and clear the input field
            this.$emit("add",newtodo)
            this.name = ""


        }
    }

}
</script>
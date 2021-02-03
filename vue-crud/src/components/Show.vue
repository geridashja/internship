<template>
    <div class="Show">
        <p><strong> ToDo List:</strong></p>
            <br>
            <div v-for="todo in todos" v-bind:key = "todo.id">
            <Item v-bind:todo="todo" />
            </div>
    </div>
</template>


<script>
import Item from './item'
export default {
    name: 'Show',
    props: ['todos'],
    components: {Item}
}
</script>
<script setup>
import { useTaskStore } from '@/stores/TaskStore';
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from "uuid";
// const { uuid } = require('uuidv4');

const taskStore = useTaskStore()

const newTask = ref('')

const handleSubmit = () => {
    let taskData = {
        id: uuidv4(),
        title: newTask.value,
        isFav: false
    }
    if (newTask.value.length > 0) {
        taskStore.addTask(taskData);
    } else {
        alert("Please add some text")
    }
    newTask.value = ""
    console.log(taskData);
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="newTask" type="text" placeholder="I need to..." />
        <button>add</button>
    </form>
</template>

<style lang="scss" scoped>

</style>
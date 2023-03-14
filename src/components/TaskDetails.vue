<script setup>
import { useTaskStore } from '@/stores/TaskStore';
const taskStore = useTaskStore()

const props = defineProps(['task'])

const handleDelete = (id) => {
    taskStore.deleteTask(id)
}

const toggleFavorite = (id) => {
    taskStore.toggleFav(id)
}

</script>

<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i @click="handleDelete(task.id)" class="material-icons">delete</i>
            <i @click="toggleFavorite(task.id)" class="material-icons" :class="{ favorite: task.isFav }">favorite</i>
        </div>
    </div>
</template>


<style lang="scss">
@import "@/assets/styles/components/details";
</style>
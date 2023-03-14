<script setup>
import TaskDetails from '@/components/TaskDetails.vue';
import { useTaskStore } from '@/stores/TaskStore';
import { ref, computed } from 'vue';
import NewTask from './components/NewTask.vue';

const taskStore = useTaskStore()

const filter = ref('all')

// const tasksWordDeclinationFunc = computed((amount) => {
//   return amount == 0 ? 'tasks' : amount == 1 ? 'task' : 'tasks'
// })

const tasksWordDeclinationFunc = (amount) => {
  return amount == 0 ? 'tasks' : amount == 1 ? 'task' : 'tasks'
}

</script>

<template>
  <header>
    <img src="./assets/pinia-logo.svg" alt="pinia-logo">
    <h1>Tasks with Pinia</h1>
  </header>
  <div class="new-task-form">
    <NewTask />
  </div>

  <nav class="filter">
    <button @click="filter = 'all'">
      all tasks
    </button>
    <button @click="filter = 'favorite'">
      favorite tasks
    </button>
  </nav>

  <main>
    <div v-if="filter === 'all'" class="task-list">
      <p>You have {{ taskStore.totalCount }} open {{tasksWordDeclinationFunc(taskStore.totalCount)}} in total</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div v-if="filter === 'favorite'" class="task-list">
      <p>You have {{ taskStore.favoriteCount }} open favorite {{tasksWordDeclinationFunc(taskStore.favoriteCount)}}</p>
      <div v-for="task in taskStore.favoriteTasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<style lang="scss">

</style>

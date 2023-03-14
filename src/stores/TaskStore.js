import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy water", isFav: false},
            {id: 2, title: "go for a walk", isFav: true}
        ]
    }),
    getters: {
        favoriteTasks() {
            return this.tasks.filter(task => task.isFav)
        },
        totalCount: (state) => {
            return state.tasks.length
        },
        favoriteCount: (state) => {
            return state.favoriteTasks.length
        },
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => {
                return id !== task.id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(task => id === task.id)
            task.isFav = !task.isFav
        }
    }
})
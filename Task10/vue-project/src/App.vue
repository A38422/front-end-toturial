<template>
  <div id="app">
    <input type="text" v-model="newTask">
    <button @click="tasks.push({ content: newTask, done: false }); setVal(); newTask=''">Them</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done">
      <span :class="{done: task.done}">{{ task.content }}</span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return  {
      newTask: '',
      tasks: []
    }
  },
  created: function () {
    this.getVal()
  },
  methods: {
    setVal() {
      localStorage.setItem('tasks',JSON.stringify(this.tasks))
    },
    getVal() {
      if (localStorage.getItem('tasks')) {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      }
    },
    removeVal() {
      localStorage.removeItem('tasks')
      this.tasks=[]
    }
  }
}
</script>

<style>



</style>

<template>
  <div id="app">
    <input type="text" v-model="newTask">
    <button @click="tasks.push({ content: newTask, done: false })">Them</button>
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
      tasks: [
        {content: 'di cho', done: false},
        {content: 'nau an', done: false},
        {content: 'di choi', done: false},
        {content: 'di du lich', done: false},
        {content: 'di hoc', done: false}
      ]
    }
  }
}
</script>

<style>

</style>

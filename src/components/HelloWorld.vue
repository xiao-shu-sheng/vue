<script setup lang="ts">
defineProps<{
  msg: string
}>()
const count = ref(0)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}{{ count }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 30px;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 20rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}


</style>

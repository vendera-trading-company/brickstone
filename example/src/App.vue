<template>
  <ButtonList></ButtonList>
  <LinkList></LinkList>
  <p class="mt-12">Date Picker</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-date-picker :xdate="new Date(1973, 12, 7)" @onchange="onDateSelect" class="max-w-s bg-white p-4 rounded-xl"></bs-date-picker>
  </div>
  <div class="py-12"></div>
</template>
<script setup>
import ButtonList from './ButtonList.vue';
import LinkList from './LinkList.vue';
</script>
<script>
export default {
  name: 'App',
  methods: {
    onDateSelect: function (event) {
      console.log(event.date);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #EEE;
}
</style>

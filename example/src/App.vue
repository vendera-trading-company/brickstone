<template>
  <ButtonList></ButtonList>
  <LinkList></LinkList>
  <p class="mt-12">Date Picker</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-date-picker :xdate="new Date(1973, 12, 7)" @onchange="onDateSelect"
      class="max-w-s bg-white p-4 rounded-xl"></bs-date-picker>
  </div>
  <p class="mt-12">Modal</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-button-solid @onclick="onModalOpen">
      Open Modal
    </bs-button-solid>
  </div>

  <div class="py-12"></div>
  <bs-modal :open="isModalOpen" @onclose="onModalClose" class="rounded-md">
    <div class="flex flex-col items-center justify-center p-4">
      <h1>
        Test Modal
      </h1>
      <bs-button-outline class="mt-4" @onclick="onModalClose">
        Close Modal
      </bs-button-outline>
    </div>
  </bs-modal>
</template>
<script setup>
import ButtonList from './ButtonList.vue';
import LinkList from './LinkList.vue';
</script>
<script>
export default {
  name: 'App',
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    onDateSelect: function (event) {
      console.log(event.date);
    },
    onModalOpen: function () {
      this.isModalOpen = true;
    },
    onModalClose: function () {
      this.isModalOpen = false;
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

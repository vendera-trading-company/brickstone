<template>
  <ButtonList></ButtonList>
  <LinkList></LinkList>
  <p class="mt-12">Date Picker</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-input-date-picker :xdate="new Date(1973, 12, 7)" @onchange="onDateSelect"
      class="max-w-s bg-white p-4 rounded-xl"></bs-input-date-picker>
  </div>
  <p class="mt-12">Modal</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-button-solid @onclick="onModalOpen">
      Open Modal
    </bs-button-solid>
  </div>
  <p class="mt-12">Text Input</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-input-text title="Text Input"></bs-input-text>
  </div>
  <p class="mt-12">Text Input Password</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-input-text type="password" title="Text Password Input"></bs-input-text>
  </div>
  <p class="mt-12">Text Input Collapsed</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-input-text title="Collapsed Input" collapsed></bs-input-text>
  </div>
  <p class="mt-12">Text Input Required</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-input-text title="Text Input" required></bs-input-text>
  </div>
  <p class="mt-12">Text Input Hint</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-input-text title="Text Input Hint" hint="Min 8 Characters"></bs-input-text>
  </div>
  <p class="mt-12">Text Input Error</p>
  <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
    <bs-input-text title="Text Input Error" error="Min 8 Characters"></bs-input-text>
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

<template>
  <bs-app-bar>

    <h1>Brickstone</h1>

  </bs-app-bar>
  <div id="content" class="bg-background flex flex-col items-center justify-center h-dvh">
    <bs-animate-slide-in>
      <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold">Brickstone</h1>
    </bs-animate-slide-in>
    <bs-animate-slide-in class="delay-100">
      <p class="text-center text-xl mt-2 text-black">VueJs Components by Vendera Trading Company</p>
    </bs-animate-slide-in>

  </div>
  <ButtonList></ButtonList>
  <LinkList></LinkList>
  <ChipList></ChipList>
  <bs-animate-slide-in>
    <p class="mt-12">Date Picker</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-date-picker :xdate="new Date(2000, 3, 7)" @onchange="onDateSelect"
        class="max-w-s bg-white p-4 rounded-xl"></bs-input-date-picker>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
    <p class="mt-12">Modal</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-button-solid @onclick="onModalOpen">
        Open Modal
      </bs-button-solid>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
    <p class="mt-12">Text Input</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-text title="Text Input"></bs-input-text>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
    <p class="mt-12">Text Input Password</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-text type="password" title="Text Password Input"></bs-input-text>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
    <p class="mt-12">Text Input Collapsed</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-text title="Collapsed Input" collapsed></bs-input-text>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
    <p class="mt-12">Text Input Required</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-text title="Text Input" required></bs-input-text>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
    <p class="mt-12">Text Input Hint</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-text title="Text Input Hint" hint="Min 8 Characters"></bs-input-text>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
    <p class="mt-12">Text Input Error</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-text title="Text Input Error" error="Min 8 Characters"></bs-input-text>
    </div>
  </bs-animate-slide-in>
  <bs-animate-slide-in>
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
  </bs-animate-slide-in>
  <p class="mt-12">Animate</p>
  <bs-animate-slide-in>
    <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold">Slide In</h1>
  </bs-animate-slide-in>
  <p class="mt-12">Animate Repeat</p>
  <bs-animate-slide-in :repeat="true">
    <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold">Slide In</h1>
  </bs-animate-slide-in>
  <div class="py-12"></div>
  <bs-cookie-hint title="We value your privacy" policy="/">

    We and our 1393 partners use cookies and other tracking technologies to improve your experience on our website. We may
    store and/or access information on a device and process personal data, such as your IP address and browsing data, for
    personalised advertising and content, advertising and content measurement, audience research and services development.
    Additionally, we may utilize precise geolocation data and identification through device scanning.
    <br><br>
    Please note that your consent will be valid across all our subdomains. You can change or withdraw your consent at any
    time by clicking the “Consent Preferences” button at the bottom of your screen. We respect your choices and are
    committed to providing you with a transparent and secure browsing experience. Cookie Policy
  </bs-cookie-hint>
</template>
<script setup>
import ButtonList from './ButtonList.vue';
import LinkList from './LinkList.vue';
import ChipList from './ChipList.vue';
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

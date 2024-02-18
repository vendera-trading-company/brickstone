<template>
  <bs-app-bar type="blur" class="border-l border-l-border bg-background">
    <template v-slot:leading>
      <bs-animate-slide-down>
        <h1 class="font-extrabold"> <bs-text-gradient class="from-primary-500 to-secondary-500 bg-gradient-to-br">
            Brickstone
          </bs-text-gradient>
        </h1>
      </bs-animate-slide-down>
    </template>

  </bs-app-bar>
  <bs-side-bar class="max-w-xs border-r border-r-border">
    <template v-slot:leading>
      <bs-animate-slide-right>
        <h1 class="font-extrabold">
          <bs-text-gradient class="from-primary-500 to-secondary-500 bg-gradient-to-br">
            SideBar
          </bs-text-gradient>
        </h1>
      </bs-animate-slide-right>
    </template>
    <bs-animate-slide-right>
      <p>Test</p>
    </bs-animate-slide-right>
  </bs-side-bar>
  <bs-element-header type="transparent" class="flex flex-col items-center justify-center">
    <div class="absolute inset-0 left-safe opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 widthOfContainer heightOfContainer">
        <defs>
          <pattern id="mmmotif-pattern" width="40" height="40" patternUnits="userSpaceOnUse"
            patternTransform="translate(0 0) scale(1) rotate(45) skewX(0) skewY(0)">
            <path
              d="M18.2565 9.41648C19.2197 8.87581 20.7813 8.87581 21.7445 9.41648L29.9098 14L20.0005 19.5625L10.0912 14L18.2565 9.41648Z"
              fill="#06b6d4"></path>
            <path d="M10.0908 14L20.0001 19.5625V31.5625L11.8348 26.979C10.8716 26.4383 10.0908 25.1046 10.0908 24V14Z"
              fill="#63e8ff"></path>
            <path d="M20 19.5625L29.9093 14V24C29.9093 25.1046 29.1285 26.4383 28.1653 26.979L20 31.5625V19.5625Z"
              fill="#0086a3"></path>
          </pattern>
        </defs>
        <rect  x="0" y="0" width="100%" height="100%" fill="url(#mmmotif-pattern)"></rect>
      </svg>
    </div>
    <bs-animate-slide-up>
      <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-extrabold">
        <bs-text-gradient class="from-primary-500 to-secondary-500 bg-gradient-to-br">
          Brickstone
        </bs-text-gradient>
      </h1>
    </bs-animate-slide-up>
    <bs-animate-slide-up class="delay-100">
      <p class="text-center text-xl mt-2 text-black">VueJs Components by Vendera Trading Company</p>
    </bs-animate-slide-up>
  </bs-element-header>
  <div id="content" class="text-center">
    <div class="bg-[#EDEDED] p-4">
      <ButtonList></ButtonList>
      <LinkList></LinkList>
      <ChipList></ChipList>
    </div>
    <bs-animate-slide-up>
      <p class="mt-12">Date Picker</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-date-picker :xdate="new Date(2000, 3, 7)" @onchange="onDateSelect"
          class="max-w-s bg-white p-4 rounded-xl border-2 border-border"></bs-input-date-picker>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Modal</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-button-solid @onclick="onModalOpen">
          Open Modal
        </bs-button-solid>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Input Select</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-select :xvalue="select_input" title="Select Input">
          <bs-input-select-option value="test_1">
            Test 1
          </bs-input-select-option>
          <bs-input-select-option value="test_2">
            Test 2
          </bs-input-select-option>
          <bs-input-select-option value="test_3">
            Test 3
          </bs-input-select-option>
        </bs-input-select>
      </div>
    </bs-animate-slide-up>
    <p class="mt-12">Input Date</p>
    <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
      <bs-input-date modal="rounded-md" picker="bg-white p-4 rounded-xl" @onchange="onDateSelect"
        title="Date Input"></bs-input-date>
    </div>
    <bs-animate-slide-up>
      <p class="mt-12">Input Text</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-text title="Text Input"></bs-input-text>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Input Image</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-image title="Input Image"></bs-input-image>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Input Text Password</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-text type="password" title="Text Password Input"></bs-input-text>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Input Text Collapsed</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-text title="Collapsed Input" collapsed></bs-input-text>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Input Text Required</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-text title="Text Input" required></bs-input-text>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Input Text Hint</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-text title="Text Input Hint" hint="Min 8 Characters"></bs-input-text>
      </div>
    </bs-animate-slide-up>
    <bs-animate-slide-up>
      <p class="mt-12">Input Text Error</p>
      <div class="mx-auto max-w-md flex flex-col items-center justify-center mt-4">
        <bs-input-text title="Text Input Error" error="Min 8 Characters"></bs-input-text>
      </div>
    </bs-animate-slide-up>

    <div class="py-12"></div>
    <bs-modal :open="isModalOpen" @onclose="onModalClose" class="rounded-md">
      <bs-animate-slide-up>
        <div class="flex flex-col items-center justify-center p-4">
          <h1>
            Test Modal
          </h1>
          <bs-button-outline class="mt-4" @onclick="onModalClose">
            Close Modal
          </bs-button-outline>
        </div>
      </bs-animate-slide-up>
    </bs-modal>
    <p class="mt-12">Animate</p>
    <bs-animate-slide-up>
      <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold p-2">Slide Up</h1>
    </bs-animate-slide-up>
    <p class="mt-12">Animate Repeat</p>
    <bs-animate-slide-up repeat>
      <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold p-2">Slide Up</h1>
    </bs-animate-slide-up>
    <div class="overflow-hidden flex flex-col items-center">
      <p class="mt-12">Animate Left Repeat</p>
      <pre class="text-start">
    <code v-html="highlightCode('\n<bs-animate-slide-left repeat>\n...\n</bs-animate-slide-left>')"></code>
   </pre>
      <bs-animate-slide-left repeat>
        <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold p-2">Slide Left</h1>
      </bs-animate-slide-left>
      <p class="mt-12">Animate Right Repeat</p>
      <bs-animate-slide-right repeat>
        <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold p-2">Slide Right</h1>
      </bs-animate-slide-right>
    </div>
    <p class="mt-12">Animate Down Repeat</p>
    <bs-animate-slide-down repeat>
      <h1 class="text-primary-black text-4xl lg:text-7xl text-center font-bold p-2">Slide Down</h1>
    </bs-animate-slide-down>
    <div class="py-12"></div>
    <bs-element-contact type="primary" @onsubmit="logEvent" title="Brickstone"
      content="Hey cool that you discovered Brickstone. We look forward to your message!"></bs-element-contact>
    <bs-element-contact type="secondary" @onsubmit="logEvent" title="Brickstone"
      content="Hey cool that you discovered Brickstone. We look forward to your message!"></bs-element-contact>
    <bs-element-contact type="neutral" @onsubmit="logEvent" title="Brickstone"
      content="Hey cool that you discovered Brickstone. We look forward to your message!"></bs-element-contact>
    <bs-element-contact type="invert" @onsubmit="logEvent" title="Brickstone"
      content="Hey cool that you discovered Brickstone. We look forward to your message!"></bs-element-contact>
    <bs-element-contact type="transparent" @onsubmit="logEvent" title="Brickstone"
      content="Hey cool that you discovered Brickstone. We look forward to your message!"></bs-element-contact>
    <bs-element-section type="primary" class="min-h-32 flex flex-col justify-center">
      Element Section Primary
    </bs-element-section>
    <bs-element-section type="secondary" class="min-h-32 flex flex-col justify-center">
      Element Section Secondary
    </bs-element-section>
    <bs-element-section type="neutral" class="min-h-32 flex flex-col justify-center">
      Element Section Neutral
    </bs-element-section>
    <bs-element-section type="invert" class="min-h-32 flex flex-col justify-center">
      Element Section Invert
    </bs-element-section>
    <bs-element-section type="transparent" class="min-h-32 flex flex-col justify-center">
      Element Section Transparent
    </bs-element-section>
    <bs-element-section type="primary" class="min-h-32 flex flex-col items-start p-4">
      <bs-button-solid type="secondary">
        Element Section No Container
      </bs-button-solid>
    </bs-element-section>
    <bs-element-section type="primary" class="min-h-32 flex flex-col items-start p-4 mt-12">
      <bs-element-container>
        <bs-button-solid type="secondary">
          Element Section Container
        </bs-button-solid>
      </bs-element-container>
    </bs-element-section>
    <div class="py-12"></div>
  </div>
  <bs-element-footer>
    <bs-element-container>
      <p class="text-center p-4">Vendera Trading Company</p>
    </bs-element-container>
  </bs-element-footer>
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
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

export default {
  name: 'App',
  data() {
    return {
      isModalOpen: false,
      select_input: 'test_1'
    };
  },
  methods: {
    highlightCode: function (value) {
      return hljs.highlight(
        value,
        { language: 'xml' }
      ).value;
    },
    onDateSelect: function (event) {
      console.log(event.date);
    },
    logEvent: function (event) {
      console.log(event);
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

<style>#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}</style>

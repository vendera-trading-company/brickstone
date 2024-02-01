<script setup lang="ts">
defineProps({
  type: { type: String, default: 'primary' }
})
defineEmits(['onclick']);
</script>
<script lang="ts">
export default {
  methods: {
    onClick: function () {
      this.$emit('onclick');
    }
  }
}
</script>
<template>
  <button v-on:click="onClick" v-bind:class="{
    'inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 px-4 py-2 rounded-xl text-lg font-semibold leading-7 text-primary-text bg-primary-500': type == 'primary',
    'inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 px-4 py-2 rounded-xl text-lg font-semibold leading-7 text-secondary-text bg-secondary-500': type == 'secondary'
  }">
    <slot />
  </button>
</template>
<script setup lang="ts">
defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  href: { type: String }
})
</script>
<template>
  <a :href="href" :disabled="disabled" v-bind:class="{
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 border-primary-500 bg-transparent border-2': type == 'primary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 border-secondary-500 bg-transparent border-2': type == 'secondary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white border-white bg-transparent border-2': type == 'neutral',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black border-black bg-transparent border-2': type == 'invert'
  }">
    <p v-bind:class="{
      'px-4 py-2 text-xs font-semibold leading-4': size == 'xs',
      'px-4 py-2 text-sm font-semibold leading-4': size == 'sm',
      'px-4 py-2 text-base font-semibold leading-7': size == 'md',
      'px-4 py-2 text-lg font-semibold leading-7': size == 'lg'
    }">
      <slot />
    </p>
  </a>
</template>
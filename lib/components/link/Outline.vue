<script setup lang="ts">
defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  href: { type: String }
})
</script>
<template>
  <a :href="href" v-bind:class="{
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none hover:opacity-90 text-primary-500 border-primary-500 bg-transparent border-2': type == 'primary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none hover:opacity-90 text-secondary-500 border-secondary-500 bg-transparent border-2': type == 'secondary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none hover:opacity-90 text-neutral border-neutral bg-transparent border-2': type == 'neutral',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none hover:opacity-90 text-invert border-invert bg-transparent border-2': type == 'invert',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none hover:opacity-90 text-error border-error bg-transparent border-2': type == 'error'
  }">
    <p v-bind:class="{
      'px-4 py-2 text-xs leading-4 w-full': size == 'xs',
      'px-4 py-2 text-sm leading-4 w-full': size == 'sm',
      'px-4 py-2 text-base leading-7 w-full': size == 'md',
      'px-4 py-2 text-lg leading-7 w-full': size == 'lg'
    }">
      <slot />
    </p>
  </a>
</template>
<script setup lang="ts">
defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false }
})
defineEmits(['onclick']);
</script>
<script lang="ts">
export default {
  methods: {
    onClick: function () {
      if (this.disabled) {
        return;
      }

      this.$emit('onclick');
    }
  }
}
</script>
<template>
  <button :disabled="disabled" v-on:click="onClick" v-bind:class="{
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-500 bg-transparent border-2 border-transparent': type == 'primary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-500 bg-transparent border-2 border-transparent': type == 'secondary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-transparent border-2 border-transparent': type == 'neutral',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-transparent border-2 border-transparent': type == 'invert',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-error bg-transparent border-2 border-transparent': type == 'error'
  }">
    <p v-bind:class="{
      'px-4 py-2 text-xs hover:underline leading-4 w-full': size == 'xs',
      'px-4 py-2 text-sm hover:underline leading-4 w-full': size == 'sm',
      'px-4 py-2 text-base hover:underline leading-7 w-full': size == 'md',
      'px-4 py-2 text-lg hover:underline leading-7 w-full': size == 'lg'
    }">
      <slot />
    </p>
  </button>
</template>
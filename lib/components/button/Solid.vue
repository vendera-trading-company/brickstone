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
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-primary-text bg-primary-500 border-2 border-primary-500': type == 'primary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-secondary-text bg-secondary-500 border-2 border-secondary-500': type == 'secondary',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-black bg-white border-2 border-white': type == 'neutral',
    'rounded-xl inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 text-white bg-black border-2 border-black': type == 'invert'
  }">
    <p v-bind:class="{
      'px-4 py-2 text-xs leading-4': size == 'xs',
      'px-4 py-2 text-sm leading-4': size == 'sm',
      'px-4 py-2 text-base leading-7': size == 'md',
      'px-4 py-2 text-lg leading-7': size == 'lg'
    }">
      <slot />
    </p>
  </button>
</template>
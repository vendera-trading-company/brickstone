<script setup lang="ts">
defineProps({
  text: { type: String }
}
)

</script>

<template>
  <button
    class="inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 px-4 py-2 rounded-md text-lg font-semibold leading-7">{{
      text }}</button>
</template>
<script setup lang="ts">
defineProps({
    type: { type: String, default: 'transparent' }
});
</script>
<script lang="ts">
export default {}
</script>
<template>
    <footer id="footer" v-bind:class="{
        'bg-primary-500 text-primary-text overflow-hidden w-full': type == 'primary',
        'bg-secondary-500 text-secondary-text overflow-hidden w-full': type == 'secondary',
        'bg-neutral text-invert overflow-hidden w-full': type == 'neutral',
        'bg-invert text-neutral overflow-hidden w-full': type == 'invert',
        'overflow-hidden w-full': type == 'transparent'
    }">
        <slot />
    </footer>
</template>
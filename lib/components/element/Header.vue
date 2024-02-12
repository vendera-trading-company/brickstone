<script setup lang="ts">
defineProps({
    type: { type: String, default: 'transparent' }
});
</script>
<script lang="ts">
export default {}
</script>
<template>
    <header id="header" v-bind:class="{
        'bg-primary-500 text-primary-text overflow-hidden min-h-svh w-full': type == 'primary',
        'bg-secondary-500 text-secondary-text overflow-hidden min-h-svh w-full': type == 'secondary',
        'bg-neutral text-invert overflow-hidden min-h-svh w-full': type == 'neutral',
        'bg-invert text-neutral overflow-hidden min-h-svh w-full': type == 'invert',
        'overflow-hidden min-h-svh w-full': type == 'transparent'
    }">
        <slot />
    </header>
</template>
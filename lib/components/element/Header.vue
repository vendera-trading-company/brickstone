<script setup lang="ts">
defineProps({
    type: { type: String, default: 'transparent' }
});
</script>
<script lang="ts">
export default {}
</script>
<template>
    <header v-bind:class="{
        'bg-primary-500 text-primary-text overflow-hidden h-dvh w-full': type == 'primary',
        'bg-secondary-500 text-secondary-text overflow-hidden h-dvh w-full': type == 'secondary',
        'bg-neutral text-invert overflow-hidden h-dvh w-full': type == 'neutral',
        'bg-invert text-neutral overflow-hidden h-dvh w-full': type == 'invert',
        'overflow-hidden h-dvh w-full': type == 'transparent'
    }">
        <slot />
    </header>
</template>
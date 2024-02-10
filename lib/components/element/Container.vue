<script setup lang="ts">
defineProps({
    type: { type: String, default: 'transparent' }
});
</script>
<script lang="ts">
export default {}
</script>
<template>
    <div v-bind:class="{
        'bg-primary-500 text-primary-text overflow-hidden container mx-auto': type == 'primary',
        'bg-secondary-500 text-secondary-text overflow-hidden container mx-auto': type == 'secondary',
        'bg-neutral text-invert overflow-hidden container mx-auto': type == 'neutral',
        'bg-invert text-neutral overflow-hidden container mx-auto': type == 'invert',
        'overflow-hidden container mx-auto': type == 'transparent'
    }">
        <slot />
    </div>
</template>
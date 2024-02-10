<script setup lang="ts">
defineProps({
    type: { type: String, default: 'transparent' }
});
</script>
<script lang="ts">
export default {}
</script>
<template>
    <section v-bind:class="{
        'bg-primary-500 text-primary-text overflow-hidden': type == 'primary',
        'bg-secondary-500 text-secondary-text overflow-hidden': type == 'secondary',
        'bg-neutral text-invert overflow-hidden': type == 'neutral',
        'bg-invert text-neutral overflow-hidden': type == 'invert',
        'overflow-hidden': type == 'transparent'
    }">
        <slot />
    </section>
</template>
<script setup lang="ts">
defineProps({
    value: { required: false }
});
</script>
<script lang="ts">
export default {}
</script>
<template>
    <option :value="value" class="px-4 py-2 text-base leading-7 bg-input outline-none w-full">
        <slot />
    </option>
</template>
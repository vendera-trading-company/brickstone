<script setup lang="ts">
import { ref, watch } from 'vue';
import { useElementVisibility } from '@vueuse/core';

defineProps({
    repeat: { type: Boolean, default: false }
});

const target = ref(null);
const wasVisible = ref(false);
const targetIsVisible = useElementVisibility(target);

watch(targetIsVisible, function () {
    wasVisible.value = true;
});
</script>
<script lang="ts">
</script>
<template>
    <div ref="target" v-bind:class="{
        'transition ease-in-out transform duration-300 opacity-0 -translate-y-1/2': repeat ? !targetIsVisible : (!targetIsVisible && !wasVisible),
        'transition ease-in-out transform duration-300 opacity-100 translate-y-0': repeat ? targetIsVisible : (targetIsVisible || wasVisible)
    }">
        <slot />
    </div>
</template>
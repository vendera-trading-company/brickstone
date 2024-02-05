<script setup lang="ts">
</script>
<script lang="ts">
export default {
    mounted() {
        const appbar = document.getElementById("appbar");

        const content = document.getElementById("content");

        if (appbar && content) {
            content.style.paddingTop = appbar.clientHeight + "px";
        }
    },
}
</script>
<template>
    <div id="appbar" class="fixed left-0 right-0 flex flex-col p-4 bg-background z-10">
        <div class="flex flex-row items-center justify-between">
            <slot name="leading" />
            <slot />
        </div>
    </div>
</template>
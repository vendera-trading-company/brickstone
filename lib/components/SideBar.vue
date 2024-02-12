<script setup lang="ts">
</script>
<script lang="ts">
export default {
    mounted() {
        const sidebar = document.getElementById("sidebar");

        const content = document.getElementById("content");

        const header = document.getElementById("header");

        const appbar = document.getElementById("appbar");

        if (sidebar && content) {
            content.style.paddingLeft = sidebar.clientWidth + "px";
        }

        if (sidebar && header) {
            header.style.paddingLeft = sidebar.clientWidth + "px";
        }

        if (sidebar && appbar) {
            appbar.style.left = sidebar.clientWidth + "px";
        }
    },
}
</script>
<template>
    <div id="sidebar" class="fixed left-0 top-0 bottom-0 flex flex-col bg-background w-full p-4 justify-between">
        <slot name="leading" />
        <slot />
    </div>
</template>
<script setup lang="ts">
defineProps({
    type: { type: String, default: 'transparent' }
});
</script>
<script lang="ts">
export default {
    mounted() {
        const appbar = document.getElementById("appbar");

        const header = document.getElementById("header");
        const content = document.getElementById("content");

        if (appbar && header) {
            header.style.paddingTop = appbar.clientHeight + "px";
        } else {
            if (appbar && content) {
                content.style.paddingTop = appbar.clientHeight + "px";
            }
        }

        if (appbar) {
            const elements = document.getElementsByClassName("top-safe");

            for (var i = 0; i < elements.length; i++) {
                const element = elements[i] as HTMLElement;
                if (element) {
                    element.style.paddingTop = appbar.clientHeight + "px";
                }
            }
        }
    },
}
</script>
<template>
    <div id="appbar" v-bind:class="{
        'fixed left-0 right-0 flex flex-col p-4 bg-primary-500 text-primary-text z-10': type == 'primary',
        'fixed left-0 right-0 flex flex-col p-4 bg-secondary-500 text-secondary-text z-10': type == 'secondary',
        'fixed left-0 right-0 flex flex-col p-4 bg-neutral text-invert z-10': type == 'neutral',
        'fixed left-0 right-0 flex flex-col p-4 bg-invert text-neutral z-10': type == 'invert',
        'fixed left-0 right-0 flex flex-col bg-background text-invert p-4 z-10': type == 'background',
        'fixed left-0 right-0 flex flex-col p-4 z-10': type == 'transparent',
        'fixed left-0 right-0 flex flex-col p-4 z-10 backdrop-blur-sm bg-opacity-70': type == 'blur'
    }">
        <div class="flex flex-row items-center justify-between">
            <slot name="leading" />
            <slot />
        </div>
    </div>
</template>
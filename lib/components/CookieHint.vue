<script setup lang="ts">
import ButtonSolid from './button/Solid.vue';
import ButtonOutline from './button/Outline.vue';
import LinkGhost from './link/Ghost.vue';

defineProps({
    title: { type: String },
    content: { type: String },
    policy: { type: String }
});

defineEmits(['onaccept', 'onreject']);

</script>
<script lang="ts">
export default {
    data() {
        return {
            open: !localStorage.getItem('brickstone_cookie_asked')
        };
    },
    methods: {
        onAccept: function () {
            localStorage.setItem('brickstone_cookie_asked', new Date().toISOString());
            localStorage.setItem('brickstone_cookie_accepted', new Date().toISOString());
            this.open = false;
            this.$emit('onaccept');
        },
        onReject: function () {
            localStorage.setItem('brickstone_cookie_asked', new Date().toISOString());
            localStorage.removeItem('brickstone_cookie_accepted');
            this.open = false;
            this.$emit('onreject');
        }
    }
}
</script>
<template>
    <div v-if="open" class="fixed bottom-0 left-0 right-0">
        <div class="flex flex-col lg:flex-row w-full bg-background border-t border-t-border p-4 items-center">
            <div class="flex flex-col">
                <p class="text-base font-bold text-start">{{ title }}</p>
                <p class="text-xs lg:text-sm mt-2 text-start">
                    <slot />
                </p>
            </div>
            <div class="flex flex-col mt-6 lg:mt-0 lg:ml-6 flex-shrink-0 min-w-48">
                <ButtonSolid @onclick="onAccept" size="sm" class="w-full">Accept All</ButtonSolid>
                <ButtonOutline @onclick="onReject" class="mt-2 w-full" size="sm">Reject All</ButtonOutline>
                <div v-if="policy" class="mt-2 w-full">
                    <LinkGhost :href="policy" class="w-full" size="sm">Cookie Policy</LinkGhost>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ButtonSolid from './button/Solid.vue';
import ButtonOutline from './button/Outline.vue';

defineProps({
    title: { type: String },
    content: { type: String },
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
        <div class="flex flex-row w-full bg-background border-t border-t-border p-4 items-end">
            <div class="flex flex-col">
                <p class="text-base font-bold text-start">{{ title }}</p>
                <p class="text-sm mt-2 text-start">
                    <slot />
                </p>
            </div>
            <div class="flex flex-row ml-6 flex-shrink-0">
                <ButtonOutline @onclick="onReject">Reject All</ButtonOutline>
                <ButtonSolid @onclick="onAccept" class="ml-4">Accept All</ButtonSolid>
            </div>
        </div>
    </div>
</template>
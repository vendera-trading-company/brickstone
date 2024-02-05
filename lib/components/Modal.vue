<script setup lang="ts">
defineProps({
    open: { type: Boolean, default: false },
});
defineEmits(['onclose']);
</script>
<script lang="ts">
export default {
    watch: {
        open: function (newValue, OldValue) {
            if (newValue) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
            }
        }
    },
    mounted() {
        if (this.$props.open) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        } else {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
        }
    },
    methods: {
        onClose: function () {
            this.$emit('onclose');
        }
    }
}
</script>
<template>
    <div v-if="open" class="fixed inset-0 z-50 flex flex-col items-center justify-center">
        <div v-on:click="onClose" class="absolute bg-black opacity-30 inset-0 -z-10">
        </div>
        <div v-bind="$attrs" class="max-w-lg w-full no-scroll-bar overflow-y-scroll bg-background">
            <slot />
        </div>
    </div>
</template>
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
                document.getElementsByTagName('body')[0].style.pointerEvents = 'none';
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
                document.getElementsByTagName('body')[0].style.pointerEvents = 'auto';
            }
        }
    },
    mounted() {
        this.$el.parentNode?.removeChild(this.$el);
        document.body.appendChild(this.$el);

        if (this.$props.open) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.getElementsByTagName('body')[0].style.pointerEvents = 'none';
        } else {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            document.getElementsByTagName('body')[0].style.pointerEvents = 'auto';
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
    <div v-if="open" class="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-auto">
        <div v-on:click="onClose" class="absolute bg-invert opacity-30 inset-0 -z-10">
        </div>
        <div v-bind="$attrs" class="max-w-lg w-full no-scroll-bar overflow-y-scroll bg-background">
            <slot />
        </div>
    </div>
</template>
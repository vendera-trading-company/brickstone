<script setup lang="ts">
defineProps({
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    disabled: { type: Boolean, default: false }
});
</script>
<script lang="ts">
</script>
<template>
    <div v-bind:class="{
        'opacity-30': disabled
    }">
        <div v-bind:class="{
            'rounded-full border-2 border-primary-600 bg-primary-100 text-primary-600': type == 'primary',
            'rounded-full border-2 border-secondary-600 bg-secondary-100 text-secondary-600': type == 'secondary',
            'rounded-full border-2 border-neutral bg-neutral text-invert': type == 'neutral',
            'rounded-full border-2 border-invert bg-invert text-neutral': type == 'invert',
            'rounded-full border-2 border-error bg-error text-neutral': type == 'error'
        }">
            <p v-bind:class="{
                'py-1 px-2 text-xs select-none': size == 'xs',
                'py-1 px-2 text-sm select-none': size == 'sm',
                'py-1 px-2 text-md select-none': size == 'md',
                'py-1 px-2 text-lg select-none': size == 'lg',
                'py-1 px-2 text-xl select-none': size == 'xl'
            }">
                <slot />
            </p>
        </div>
    </div>
</template>
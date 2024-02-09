<script setup lang="ts">
defineProps({
    hint: {},
    error: {},
    id: { type: String },
    name: { type: String },
    type: { type: String, default: 'text' },
    title: { type: String, required: true },
    placeholder: { type: String },
    required: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
    xvalue: { type: String }
});
defineEmits(['input']);
</script>
<script lang="ts">
export default {
    data() {
        return {
            value: this.$props.xvalue,
        };
    },
    methods: {
        onInput: function (event: any) {
            this.$emit('input', event);
        }
    }
}
</script>
<template>
    <div class="flex flex-col items-start max-w-sm w-full">
        <div v-if="!collapsed" class="h-min flex max-w-40 w-full">
            <label class=" flex py-1 px-2 text-sm">{{ title }}{{ required ? "*" : "" }}</label>
        </div>
        <div class="w-full flex flex-col relative">
            <input @input="onInput" v-bind:class="{
                'px-4 py-2 text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-input': !error,
                'px-4 py-2 text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-error': error
            }" :required="required" v-model="value" :type="type" :id="id" :name="name"
                :placeholder="placeholder ?? title" />
            <p v-if="hint && !error" class="py-1 px-2 text-xs text-invert text-start">
                {{ hint }}
            </p>
            <p v-if="error" class="py-1 px-2 text-xs text-error text-start">
                {{ error }}
            </p>
        </div>
    </div>
</template>
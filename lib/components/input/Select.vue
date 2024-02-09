<script setup lang="ts">
defineProps({
    hint: {},
    error: {},
    id: { type: String },
    name: { type: String },
    title: { type: String, required: true },
    placeholder: { type: String },
    required: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
    xvalue: { type: String }
});
defineEmits(['onchange']);
</script>
<script lang="ts">
export default {
    data() {
        return {
            value: this.$props.xvalue,
        };
    },
    methods: {
        onChange: function (event: any) {
            this.$emit('onchange', event);
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
            <select @change="onChange" v-bind:class="{
                'px-4 py-[12.4px] text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-input cursor-pointer': !error,
                'px-4 py-[12.4px] text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-error cursor-pointer': error
            }" :required="required" v-model="value" :id="id" :name="name">
                <slot />
            </select>
            <p v-if="hint && !error" class="py-1 px-2 text-xs text-invert text-start">
                {{ hint }}
            </p>
            <p v-if="error" class="py-1 px-2 text-xs text-error text-start">
                {{ error }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">

defineProps({
    hint: {},
    error: {},
    id: { type: String },
    name: { type: String },
    type: { type: String, default: 'file' },
    title: { type: String, required: true },
    placeholder: { type: String },
    required: { type: Boolean, default: false },
    accept: { type: String, default: 'image/*' },
    collapsed: { type: Boolean, default: false },
    xvalue: { type: String || null, },
});

defineEmits(['onselect']);

</script>
<script lang="ts">
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

export default {
    data() {
        return {
            value: this.$props.xvalue,
        };
    },
    methods: {
        onSelect(event: any) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                var result = reader.result;

                if (typeof result === 'object') {
                    result = result as ArrayBuffer;

                    result = Buffer.from(result).toString('base64');
                }

                this.value = result;

                this.$emit('onselect', result);
            };
            reader.onerror = (error) => {
                console.log("Error: ", error);
            };
        },
    }
}
</script>
<template>
    <div class="flex flex-col items-start max-w-sm w-full">
        <div v-if="!collapsed" class="h-min flex max-w-40 w-full">
            <label class=" flex py-1 px-2 text-sm">{{ title }}{{ required ? "*" : "" }}</label>
        </div>
        <div class="w-full flex flex-col relative">
            <div v-if="value || placeholder" class="mb-2 w-full p-2 border border-input rounded-xl flex bg-input">
                <img :src="value ?? placeholder" class="w-full h-full max-h-56 object-contain" />
            </div>
            <input :accept="accept" v-on:change="onSelect" v-bind:class="{
                'px-4 py-2 text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-input text-invert': !error,
                'px-4 py-2 text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-error text-invert': error
            }" :required="required" :type="type" :id="id" :name="name" />
            <p v-if="hint && !error" class="py-1 px-2 text-xs text-start">
                {{ hint }}
            </p>
            <p v-if="error" class="py-1 px-2 text-xs text-error text-start">
                {{ error }}
            </p>
        </div>
    </div>
</template>
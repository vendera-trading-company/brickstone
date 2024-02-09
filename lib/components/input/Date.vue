<script setup lang="ts">
import Modal from '../Modal.vue';
import DatePicker from './DatePicker.vue';
import AnimateSlideUp from '../animate/SlideUp.vue';

defineProps({
    hint: {},
    error: {},
    id: { type: String },
    name: { type: String },
    title: { type: String, required: true },
    placeholder: { type: Date },
    required: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
    xvalue: { type: Date },
    modal: {},
    picker: {},
});
defineEmits(['onchange']);
</script>
<script lang="ts">
export default {
    data() {
        return {
            value: this.$props.xvalue,
            modalIsOpen: false,
        };
    },
    methods: {
        openModal: function () {
            this.modalIsOpen = true;
        },
        closeModal: function () {
            this.modalIsOpen = false;
        },
        onChange: function (event: any) {
            this.value = event.date;

            this.$emit('onchange', event);
        },
        dateToString: function (date?: Date) {
            if (!date) {
                return undefined;
            }

            let day = date.getDate().toString();
            let month = (date.getMonth() + 1).toString();
            let year = date.getFullYear();

            if (parseInt(day) < 10) {
                day = `0${day}`;
            }

            if (parseInt(month) < 10) {
                month = `0${month}`;
            }

            return day + "/" + month + "/" + year;
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
            <div v-on:click="openModal" v-bind:class="{
                'px-4 py-2 text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-input text-start cursor-pointer': !error,
                'px-4 py-2 text-base leading-7 bg-input outline-none w-full rounded-xl border-2 border-error text-start cursor-pointer': error
            }">
                <template v-if="placeholder || value">
                    {{ value ? dateToString(value) : dateToString(placeholder) }}
                </template>
                <template v-if="!placeholder && !value">
                    {{ title }}
                </template>
            </div>
            <p v-if="hint && !error" class="py-1 px-2 text-xs text-neutral text-start">
                {{ hint }}
            </p>
            <p v-if="error" class="py-1 px-2 text-xs text-error text-start">
                {{ error }}
            </p>
        </div>
    </div>
    <Modal :class="modal" @onclose="closeModal" :open="modalIsOpen">
        <div class="flex flex-col items-center justify-center p-4">
            <AnimateSlideUp>
                <DatePicker :xdate="value" :class="picker" @onchange="onChange" @onday="closeModal"></DatePicker>
            </AnimateSlideUp>
        </div>
    </Modal>
</template>

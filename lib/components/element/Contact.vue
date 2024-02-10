<script setup lang="ts">
import InputText from '../input/Text.vue';
import ButtonSolid from '../button/Solid.vue';
import SlideUp from '../animate/SlideUp.vue';
import Input from '../input/Input';
import Section from './Section.vue';
import { ref } from 'vue'

const name = ref<Input | null>(null);
const email = ref<Input | null>(null);
const text = ref<Input | null>(null);

defineProps({
    type: { type: String, default: 'transparent' },
    title: { type: String },
    content: { type: String }
});

defineEmits(['onsubmit']);

defineExpose({
    name,
    email,
    text
});

</script>
<script lang="ts">
export default {
    methods: {
        submit: function () {
            this.$emit('onsubmit', {
                name: (this.$refs.name as Input)?.value,
                email: (this.$refs.email as Input)?.value,
                text: (this.$refs.text as Input)?.value,
            });
        }
    }
}
</script>
<template>
    <Section :type="type">
        <SlideUp>
            <div class="max-w-screen-md p-4 grid md:grid-cols-2 w-full mx-auto gap-8">
                <div class="flex flex-col text-start">
                    <h2 v-if="title" class="text-xl font-extrabold">{{ title }}</h2>
                    <p v-if="content" class="mt-2"> {{ content }}</p>
                </div>
                <div class="flex flex-col items-center md:items-start max-w-sm w-full mx-auto">
                    <InputText ref="name" title="Name" required></InputText>
                    <InputText ref="email" title="E-Mail" required class="mt-2"></InputText>
                    <InputText ref="text" title="Text" class="mt-2"></InputText>
                    <ButtonSolid :type="type == 'primary' ? 'secondary' : 'primary'" class="mt-4 w-full" @onclick="submit">
                        Submit</ButtonSolid>
                </div>
            </div>
        </SlideUp>
    </Section>
</template>
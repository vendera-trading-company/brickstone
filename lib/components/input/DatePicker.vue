<script setup lang="ts">
defineProps({
    xdate: { type: Date },
});
defineEmits(['onchange']);
</script>
<script lang="ts">
export default {
    watch: {
        month: function (newVal, oldVal) {
            var val = newVal;
            if (val < 1) {
                val = 1;
            }

            if (val > 12) {
                val = 12;
            }

            this.month = val;
            this.calculateDate();
        },
        year: function (newVal, oldVal) {
            var val = newVal;
            if (val < 0) {
                val = 0;
            }

            if (val > 9999) {
                val = 9999;
            }

            this.year = val;
            this.calculateDate();
        }
    },
    data() {
        var date = this.xdate ?? new Date();

        return {
            year: date.getFullYear() - 1,
            month: date.getMonth() + 1,
            day: date.getDate(),
            date: date,
        }
    },
    methods: {
        getCountOfDays: function (_month: number | null = null, _year: number | null = null): number {
            return new Date(_year ?? this.year, _month ?? this.month, 0).getDate()
        },
        isSelected: function (_day: number) {
            return _day == this.day;
        },
        setDay: function (_day: number) {
            this.day = _day;
            this.calculateDate();
        },
        calculateDate: function () {
            this.date = new Date(this.year, this.month - 1, this.day);

            this.$emit('onchange', {
                year: this.year,
                month: this.month,
                day: this.day,
                date: this.date,
            });
        }
    }
}
</script>
<template>
    <div class="flex flex-col">
        <div class="flex flex-row items-center p-2 justify-center">
            <input class="select-none outline-none text-center max-w-32" v-model="month" type="number" />
            <p class="mx-2">/</p>
            <input class="select-none outline-none text-center max-w-32" v-model="year" type="number" />
        </div>
        <div class="grid grid-cols-7 gap-4 mt-2 grid-rows-5">
            <template v-for="(_day) in getCountOfDays()">
                <div v-on:click="setDay(_day)" v-bind:class="{
                    'cursor-pointer col-span-1 min-w-8 min-h-8 aspect-square flex flex-col items-center justify-center': !isSelected(_day),
                    'cursor-pointer rounded-xl col-span-1 min-w-8 min-h-8 aspect-square flex flex-col items-center justify-center bg-primary-500 text-primary-text': isSelected(_day)
                }">
                    <p class="text-center select-none">
                        {{ _day }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>
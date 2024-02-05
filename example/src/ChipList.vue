<script setup>
import { ChipSolid, ChipOutline } from 'brickstone';
</script>
<template>
    <div class="flex flex-col">
        <p class="mt-12">Chip Solid</p>
        <div class="flex flex-wrap gap-4 items-center justify-center mt-4">
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipSolid size="lg" disabled type="primary">Hello World!</ChipSolid>
                <ChipSolid size="lg" type="primary">Hello World!</ChipSolid>
                <ChipSolid type="primary">Hello World!</ChipSolid>
                <ChipSolid size="sm" type="primary">Hello World!</ChipSolid>
                <ChipSolid size="xs" type="primary">Hello World!</ChipSolid>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipSolid size="lg" disabled type="secondary">Hello World!</ChipSolid>
                <ChipSolid size="lg" type="secondary">Hello World!</ChipSolid>
                <ChipSolid type="secondary">Hello World!</ChipSolid>
                <ChipSolid size="sm" type="secondary">Hello World!</ChipSolid>
                <ChipSolid size="xs" type="secondary">Hello World!</ChipSolid>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipSolid size="lg" disabled type="neutral">Hello World!</ChipSolid>
                <ChipSolid size="lg" type="neutral">Hello World!</ChipSolid>
                <ChipSolid type="neutral">Hello World!</ChipSolid>
                <ChipSolid size="sm" type="neutral">Hello World!</ChipSolid>
                <ChipSolid size="xs" type="neutral">Hello World!</ChipSolid>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipSolid size="lg" disabled type="invert">Hello World!</ChipSolid>
                <ChipSolid size="lg" type="invert">Hello World!</ChipSolid>
                <ChipSolid type="invert">Hello World!</ChipSolid>
                <ChipSolid size="sm" type="invert">Hello World!</ChipSolid>
                <ChipSolid size="xs" type="invert">Hello World!</ChipSolid>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipSolid size="lg" disabled type="error">Hello World!</ChipSolid>
                <ChipSolid size="lg" type="error">Hello World!</ChipSolid>
                <ChipSolid type="error">Hello World!</ChipSolid>
                <ChipSolid size="sm" type="error">Hello World!</ChipSolid>
                <ChipSolid size="xs" type="error">Hello World!</ChipSolid>
            </div>
        </div>
        <p class="mt-12">Chip Outline</p>
        <div class="flex flex-wrap gap-4 items-center justify-center mt-4">
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipOutline size="lg" disabled type="primary">Hello World!</ChipOutline>
                <ChipOutline size="lg" type="primary">Hello World!</ChipOutline>
                <ChipOutline type="primary">Hello World!</ChipOutline>
                <ChipOutline size="sm" type="primary">Hello World!</ChipOutline>
                <ChipOutline size="xs" type="primary">Hello World!</ChipOutline>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipOutline size="lg" disabled type="secondary">Hello World!</ChipOutline>
                <ChipOutline size="lg" type="secondary">Hello World!</ChipOutline>
                <ChipOutline type="secondary">Hello World!</ChipOutline>
                <ChipOutline size="sm" type="secondary">Hello World!</ChipOutline>
                <ChipOutline size="xs" type="secondary">Hello World!</ChipOutline>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipOutline size="lg" disabled type="neutral">Hello World!</ChipOutline>
                <ChipOutline size="lg" type="neutral">Hello World!</ChipOutline>
                <ChipOutline type="neutral">Hello World!</ChipOutline>
                <ChipOutline size="sm" type="neutral">Hello World!</ChipOutline>
                <ChipOutline size="xs" type="neutral">Hello World!</ChipOutline>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipOutline size="lg" disabled type="invert">Hello World!</ChipOutline>
                <ChipOutline size="lg" type="invert">Hello World!</ChipOutline>
                <ChipOutline type="invert">Hello World!</ChipOutline>
                <ChipOutline size="sm" type="invert">Hello World!</ChipOutline>
                <ChipOutline size="xs" type="invert">Hello World!</ChipOutline>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <ChipOutline size="lg" disabled type="error">Hello World!</ChipOutline>
                <ChipOutline size="lg" type="error">Hello World!</ChipOutline>
                <ChipOutline type="error">Hello World!</ChipOutline>
                <ChipOutline size="sm" type="error">Hello World!</ChipOutline>
                <ChipOutline size="xs" type="error">Hello World!</ChipOutline>
            </div>
        </div>
    </div>
</template>
<script>
</script>

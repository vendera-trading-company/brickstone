<template>
  <p class="mt-12">Solid</p>
  <div class="flex flex-wrap gap-4 items-center justify-center mt-4">
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonSolid size="lg" disabled type="primary">Hello World!</ButtonSolid>
      <ButtonSolid size="lg" type="primary">Hello World!</ButtonSolid>
      <ButtonSolid type="primary">Hello World!</ButtonSolid>
      <ButtonSolid size="sm" type="primary">Hello World!</ButtonSolid>
      <ButtonSolid size="xs" type="primary">Hello World!</ButtonSolid>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonSolid size="lg" disabled type="secondary">Hello World!</ButtonSolid>
      <ButtonSolid size="lg" type="secondary">Hello World!</ButtonSolid>
      <ButtonSolid type="secondary">Hello World!</ButtonSolid>
      <ButtonSolid size="sm" type="secondary">Hello World!</ButtonSolid>
      <ButtonSolid size="xs" type="secondary">Hello World!</ButtonSolid>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonSolid size="lg" disabled type="neutral">Hello World!</ButtonSolid>
      <ButtonSolid size="lg" type="neutral">Hello World!</ButtonSolid>
      <ButtonSolid type="neutral">Hello World!</ButtonSolid>
      <ButtonSolid size="sm" type="neutral">Hello World!</ButtonSolid>
      <ButtonSolid size="xs" type="neutral">Hello World!</ButtonSolid>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonSolid size="lg" disabled type="invert">Hello World!</ButtonSolid>
      <ButtonSolid size="lg" type="invert">Hello World!</ButtonSolid>
      <ButtonSolid type="invert">Hello World!</ButtonSolid>
      <ButtonSolid size="sm" type="invert">Hello World!</ButtonSolid>
      <ButtonSolid size="xs" type="invert">Hello World!</ButtonSolid>
    </div>
  </div>
  <p class="mt-12">Outline</p>
  <div class="flex flex-wrap gap-4 items-center justify-center mt-4">
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonOutline size="lg" disabled type="primary">Hello World!</ButtonOutline>
      <ButtonOutline size="lg" type="primary">Hello World!</ButtonOutline>
      <ButtonOutline type="primary">Hello World!</ButtonOutline>
      <ButtonOutline size="sm" type="primary">Hello World!</ButtonOutline>
      <ButtonOutline size="xs" type="primary">Hello World!</ButtonOutline>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonOutline size="lg" disabled type="secondary">Hello World!</ButtonOutline>
      <ButtonOutline size="lg" type="secondary">Hello World!</ButtonOutline>
      <ButtonOutline type="secondary">Hello World!</ButtonOutline>
      <ButtonOutline size="sm" type="secondary">Hello World!</ButtonOutline>
      <ButtonOutline size="xs" type="secondary">Hello World!</ButtonOutline>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonOutline size="lg" disabled type="neutral">Hello World!</ButtonOutline>
      <ButtonOutline size="lg" type="neutral">Hello World!</ButtonOutline>
      <ButtonOutline type="neutral">Hello World!</ButtonOutline>
      <ButtonOutline size="sm" type="neutral">Hello World!</ButtonOutline>
      <ButtonOutline size="xs" type="neutral">Hello World!</ButtonOutline>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonOutline size="lg" disabled type="invert">Hello World!</ButtonOutline>
      <ButtonOutline size="lg" type="invert">Hello World!</ButtonOutline>
      <ButtonOutline type="invert">Hello World!</ButtonOutline>
      <ButtonOutline size="sm" type="invert">Hello World!</ButtonOutline>
      <ButtonOutline size="xs" type="invert">Hello World!</ButtonOutline>
    </div>
  </div>
  <p class="mt-12">Ghost</p>
  <div class="flex flex-wrap gap-4 items-center justify-center mt-4">
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonGhost size="lg" disabled type="primary">Hello World!</ButtonGhost>
      <ButtonGhost size="lg" type="primary">Hello World!</ButtonGhost>
      <ButtonGhost type="primary">Hello World!</ButtonGhost>
      <ButtonGhost size="sm" type="primary">Hello World!</ButtonGhost>
      <ButtonGhost size="xs" type="primary">Hello World!</ButtonGhost>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonGhost size="lg" disabled type="secondary">Hello World!</ButtonGhost>
      <ButtonGhost size="lg" type="secondary">Hello World!</ButtonGhost>
      <ButtonGhost type="secondary">Hello World!</ButtonGhost>
      <ButtonGhost size="sm" type="secondary">Hello World!</ButtonGhost>
      <ButtonGhost size="xs" type="secondary">Hello World!</ButtonGhost>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonGhost size="lg" disabled type="neutral">Hello World!</ButtonGhost>
      <ButtonGhost size="lg" type="neutral">Hello World!</ButtonGhost>
      <ButtonGhost type="neutral">Hello World!</ButtonGhost>
      <ButtonGhost size="sm" type="neutral">Hello World!</ButtonGhost>
      <ButtonGhost size="xs" type="neutral">Hello World!</ButtonGhost>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <ButtonGhost size="lg" disabled type="invert">Hello World!</ButtonGhost>
      <ButtonGhost size="lg" type="invert">Hello World!</ButtonGhost>
      <ButtonGhost type="invert">Hello World!</ButtonGhost>
      <ButtonGhost size="sm" type="invert">Hello World!</ButtonGhost>
      <ButtonGhost size="xs" type="invert">Hello World!</ButtonGhost>
    </div>
  </div>
</template>
<script>
import { ButtonSolid, ButtonOutline, ButtonGhost } from 'brickstone';

export default {
  name: 'App',
  components: {
    ButtonSolid,
    ButtonOutline,
    ButtonGhost
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

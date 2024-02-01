<template>
  <div class="flex flex-wrap gap-4 items-center justify-center">
    <ButtonSolid type="primary">Hello World!</ButtonSolid>
    <ButtonSolid type="secondary">Hello World!</ButtonSolid>
  </div>
</template>

<script>
import { ButtonSolid } from 'brickstone';

export default {
  name: 'App',
  components: {
    ButtonSolid
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

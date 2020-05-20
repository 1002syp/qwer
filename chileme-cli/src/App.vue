<template lang='pug'>
  div#app
    router-view 
</template>

<style lang="scss">
@mixin init{
  height: 100%;
  width: 100%;
  overflow: hidden;
  text-align: center;
}
html,body{
 @include init;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include init;
}
</style>

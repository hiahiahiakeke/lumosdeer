<template>
  <div id="app">
    <div id="nav">
      <span style="floatL:left;">-LUmosdeer</span>
      <div style="float:right;" class="fenlei">
        <span>map</span>
        <span>time-line</span>
        <span>关于本站</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: url('./assets/background.jpg') no-repeat;
}
#nav {
  height: 60px;
  line-height: 60px;
  margin: 0 30px;
  .fenlei span{
    padding: 0 10px;
  }
}
</style>

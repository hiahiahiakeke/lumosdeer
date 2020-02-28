<template>
  <div id="app">
    <div id="nav">
      <span style="floatL:left;">-LUmosdeer</span>
      <div class="fenlei">
        <router-link to="/">
          <span>home</span>
        </router-link>
        <router-link to="map">
          <span>map</span>
        </router-link>
        <router-link to="timeline">
          <span>time-line</span>
        </router-link>
        <router-link to="map">
          <span>关于本站</span>
          <span>关于本站</span>
          <span>关于本站</span>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
@import url('./assets/styles/global.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  position: fixed;
  width: 100%;
  // background-color: transparent;
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  color: #fff;
  z-index: 999;
  .fenlei {
    float: right;
    margin-right: 60px;
    span {
      color: #fff;
      padding: 0 10px;
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>

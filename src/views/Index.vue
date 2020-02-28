<template>
  <div>
    <div class="index">
      <div class="bruce flex-ct-x">
        <div class="fault-text" data-text="LUmosdeer">LUmosdeer</div>
      </div>
    </div>
    <div class="person">hhhhhhh</div>
    <div class="person">third</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.index {
  background: url('../assets/background.jpg') no-repeat center -30px #302a2a;
  background-attachment: fixed;
  height: 722px;
  overflow: hidden;
  .bruce {
    background-color: #000;
    opacity: 0.3;
    margin-top: 300px;
  }
  .flex-ct-x {
    display: flex;
    justify-content: center;
    align-items: center;
    .fault-text {
      position: relative;
      font-weight: bold;
      font-size: 100px;
      color: #fff;
      &::before,
      &::after {
        overflow: hidden;
        position: absolute;
        top: 0;
        background-color: #000;
        clip: rect(0, 900px, 0, 0);
        color: #fff;
        content: attr(data-text);
        animation: shake 3s linear infinite alternate-reverse;
      }
      &::before {
        left: -2px;
        text-shadow: 1px 0 #09f;
      }
      &::after {
        left: 2px;
        text-shadow: -1px 0 #f66;
        animation-duration: 2s;
      }
    }
  }
}
.person {
  background: url('../assets/bgc-pic2.jpg') no-repeat top;
  background-size: auto 722px;
  height: 722px;
  background-color: #323034;
  background-attachment: fixed;
}
@keyframes shake {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i * (1 / $steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}
</style>

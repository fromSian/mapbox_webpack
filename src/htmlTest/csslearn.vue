<template>
  <div id="ori_center" class="box"></div>
  <div id="absolut_center" class="box"></div>
</template>

<script>
export default {};
</script>

<style>
.box {
  border: 2px solid wheat;
  width: 200px;
  height: 100px;
}
#ori_center {
  margin: auto;
}
#absolut_center {
  margin: auto;
  position: sticky;
  /* left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
}
</style>

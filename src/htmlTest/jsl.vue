<template>
  <div style="height: 1px; background: black"></div>
  <p id="now_date">fj</p>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import jslearn from "./jslearn";
export default {
  name: "jsl",
  setup() {
    onMounted(() => {
      jslearn();
    });
  },
};
</script>

<style></style>

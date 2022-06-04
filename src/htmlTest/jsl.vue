<template></template>

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

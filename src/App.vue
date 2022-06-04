<!--  -->
<template>
  <jsl />
  <jqlearn />
  <rollPics />
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import t from "./htmlTest/t.vue";
import rollPics from "./htmlTest/rollPics.vue";
import jqlearn from "./htmlTest/jqlearn.vue";
import jsl from "./htmlTest/jsl.vue";
export default {
  name: "",
  components: { t, rollPics, jqlearn, jsl },
  setup() {
    const data = reactive({});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style></style>

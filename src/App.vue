<!--  -->
<template>
  <csslearn />
  <jsl />
  <jqlearn />
  <rollPics />
  <t />
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import t from "./htmlTest/t.vue";
import rollPics from "./htmlTest/rollPics.vue";
import jqlearn from "./htmlTest/jqlearn.vue";
import jsl from "./htmlTest/jsl.vue";
import csslearn from "./htmlTest/csslearn.vue";
import declare from "./htmlTest/declare";
export default {
  name: "",
  components: { t, rollPics, jqlearn, jsl, csslearn },
  setup() {
    const data = reactive({});
    onMounted(() => {
      declare();
    });
    const refData = toRefs(data);
    console.log("thisapp", this);

    return {
      ...refData,
    };
  },
};
</script>
<style></style>

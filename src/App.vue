<!--  -->
<template>
  <mapFirst/>
</template>

<script>
import { reactive,toRefs,onMounted} from 'vue';
import mapFirst from './mapbox/mapFirst.vue'
export default {
    name: '',
      components: { mapFirst },
      setup() {
          const data = reactive({

          })
          onMounted(() => {
            //   control()
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>
<style>
</style>

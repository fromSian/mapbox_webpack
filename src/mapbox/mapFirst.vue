<template>
<div id='buttonDiv'>button</div>
  <div id="mapDiv"></div>
</template>

<script lang="js">
import { reactive,toRefs,onMounted} from 'vue'
import control from './control'
import move from './move.js'
export default {
    name: 'map_first',
      setup() {
          const data = reactive({

          })
          onMounted(() => {
              control()
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>

<style>
#mapDiv {
  position: relative;
  width: 80%;
  height: 600px;
  text-align: center;
  margin: 0 auto;
}

</style>

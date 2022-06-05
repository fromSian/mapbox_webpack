<template>
  <div id="content_wrap">
    <div id="contain">
      <div id="scroll_img">
        <a href="#"
          ><img src="http://localhost/upload/pics/1.jpg" border="0"
        /></a>
        <a href="#"
          ><img src="http://localhost/upload/pics/2.jpg" border="0"
        /></a>
        <a href="#"
          ><img src="http://localhost/upload/pics/3.jpg" border="0"
        /></a>
        <a href="#"
          ><img src="http://localhost/upload/pics/4.jpg" border="0"
        /></a>
        <a href="#"
          ><img src="http://localhost/upload/pics/5.jpg" border="0"
        /></a>
        <a href="#"
          ><img src="http://localhost/upload/pics/1.jpg" border="0"
        /></a>
      </div>
      <div id="scroll_img_cp"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  name: "scroll_pics",
  setup() {
    onMounted(() => {
      var speed = 1;
      var tab = document.getElementById("content_wrap");
      var tab1 = document.getElementById("scroll_img");
      var tab2 = document.getElementById("scroll_img_cp");
      tab2.innerHTML = tab1.innerHTML;
      function Marquee() {
        if (tab2.offsetWidth - tab.scrollLeft <= 0) {
          tab.scrollLeft -= tab1.offsetWidth;
          //   console.log(0);
        } else {
          tab.scrollLeft++;
          //   console.log(1);
        }
      }
      var MyMar = setInterval(Marquee, speed);
      tab.onmouseover = function () {
        clearInterval(MyMar);
        // console.log(3);
      };
      tab.onmouseout = function () {
        MyMar = setInterval(Marquee, speed);
        // console.log(4);
      };
    });
  },
};
</script>

<style>
#content_wrap {
  overflow: hidden;
  width: 900px;
  border: 1px dashed grey;
}
#content_wrap img {
  border: 3px solid red;
  width: 200px;
}
#contain {
  float: left;
  width: 400%;
}
#scroll_img {
  float: left;
}
#scroll_img_cp {
  float: left;
}
</style>

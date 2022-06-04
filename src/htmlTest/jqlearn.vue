<template>
  <div class="jq-div">jquery</div>
  <button id="p_clear">clear all p</button>
  <button id="p_show">show all p</button>
  <h1>h1</h1>
  <p>p1</p>
  <h2>h2</h2>
  <p>p2</p>
  <h4>h2</h4>
  <p>p3</p>
  <h3>h2</h3>
  <p>p4</p>
  <table>
    <thead></thead>
    <tbody>
      <tr>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
      </tr>
      <tr>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
      </tr>
    </tbody>
  </table>
  <div class="test">
    div1
    <div>fdkfl</div>
  </div>
  <div class="test">div2</div>
  <div class="css-test">css test</div>
  <div></div>
  <a href="#contain" target="_self">go to contain div</a>
</template>

<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "jqlearn",
  setup() {
    onMounted(() => {
      $(".jq-div").css("border", "3px solid black");
      $("#p_clear").click(clearp);
      $("#p_show").click(showp);
      $("tr:even").css("background-color", "green");
      $("tr:odd").css("background-color", "pink");
      console.log($("div"));
      $("tr").hover(function () {
        console.log("this", $(this));
        $(this).css("background-color", "white");
      });
    });
    const clearp = () => {
      let thisHTMLElement = $(this);
      console.log(99, thisHTMLElement);
      //   $("p").hide();
      $("p").css("visibility", "hidden");
    };
    const showp = () => {
      //   $("p").show();
      $("p").css("visibility", "visible");
    };
  },
};
</script>

<style>
.test {
  height: 90px;
  border: 1px solid blue;
}
.test:first-child {
  width: 40px;
  height: 10px;
  background-color: pink;
  border: blue 1px dashed;
}
.css-test {
  border: dimgray solid 2px;
  height: 200px;
  width: 500px;
  text-align: center;
  vertical-align: sub;
  text-decoration: underline;
  text-shadow: 2px 2px grey;
}
.css-test::before {
  content: "css-test before context";
  display: block;
}
.css-test::first-line {
  color: firebrick;
}
.css-test::first-letter {
  font-style: italic;
  font-size: 3em;
}
a:target {
  background-color: green;
}
div:empty {
  width: 10px;
  height: 10px;
  background-color: yellow;
}
</style>

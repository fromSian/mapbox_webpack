<template>
  <h1>kinder</h1>
  <!-- 布局 -->
  <header id="header">header</header>
  <nav id="navigation">navigation</nav>
  <section id="main">section main</section>
  <aside id="sidebar">aside</aside>
  <footer id="footer">footer</footer>
  <!-- 图片 -->
  <img src="..\..\static\imgs\安溥.jpg" :width="img_width" title="提示性文本" />
  <input v-model="img_width" type="number" id="img_attrs" />
  <img src="" :width="img_width" alt="anpu" />
  <!-- 无序列表 -->
  <div>
    <label v-for="i in ul_type_list" :key="i">
      <input type="radio" name="ul-type" :value="i" v-model="ul_type" />
      {{ i }}
    </label>
  </div>
  <ul :type="ul_type">
    <li v-for="i in list_split" :key="i">
      {{ i }}
    </li>
  </ul>
  <!-- 定义列表 -->
  <dl>
    My favorite music
    <dt>SodaGreen</dt>
    <dd>小时候</dd>
    <dd>飞鱼</dd>
    <dt>AnPu</dt>
    <dd>最好的时光</dd>
    <dd>城市</dd>
  </dl>
  <!-- 表单标签 -->
  <label v-for="i in input_list" :key="i" class="input-label" :for="i"
    >{{ i }}:
    <input :type="i" :id="i" />
  </label>
  <!-- 自定义正则 -->
  <form action="">
    <lable>自定义正则电话</lable>
    <input type="tel" pattern="1\d{1}" id="input_tel" />
    <input type="submit" />
  </form>
  <!-- select -->
  <select>
    <option v-for="i in list_array" :key="i">{{ i }}</option>
  </select>
  <!-- datalist -->
  <input
    type="text"
    list="myData"
    class="input-label"
    placeholder="datalist string"
    autofocus="autofocus"
    autocomplete="off"
  />
  <datalist id="myData">
    <option v-for="i in input_list" :key="i">{{ i }}</option>
  </datalist>
  <!-- meter -->
  <p>meter</p>
  <meter value="2" min="0" max="10">2 out of 10</meter>
  <!-- progress -->
  <p>progress</p>
  <progress value="22" max="100"></progress>
  <!-- 音频 -->
  <audio :src="dear_anpu" controls autoplay></audio>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  name: "t",
  setup() {
    const data = reactive({
      img_width: 100,
      list_split: "abcd".split(""),
      list_array: Array.from("abcd"),
      ul_type: "square",
      ul_type_list: ["disc", "square", "circle", ""],
      input_list: [
        "email",
        "tel",
        "file",
        "url",
        "number",
        "range",
        "color",
        "search",
        "time",
        "date",
        "month",
        "week",
      ],
      dear_anpu: "http://localhost/upload/music/dear_anpu.mp3",
    });
    onMounted(() => {
      console.log("list_split", data.list_split);
      console.log("list_array", data.list_array);
      let input_tel = document.getElementById("input_tel");
      input_tel.oninvalid = function () {
        this.setCustomValidity("wrong");
      };
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style>
#img_attrs {
  display: block;
}
.input-show {
  width: 200px;
  background-color: rgba(232, 231, 21, 1);
  display: block;
}
.input-label {
  display: block;
}
</style>

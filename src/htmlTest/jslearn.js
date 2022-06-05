import $ from "jquery";
export default function () {
  let arr = "abcd".split("");
  let arr2 = [..."yuip"];
  let arr3 = Array.from("qwer");
  let arr4 = Object.assign([], "vbnm");
  //   console.log(arr);
  //   console.log(arr2);
  //   console.log(arr3);
  //   console.log(arr4);
  for (let i in arr) {
    console.log("in", i);
  }
  //   in是index，of是value
  for (let i of arr) {
    console.log("of", i);
  }
  arr.map((value, index) => {
    console.log("map", value, index);
  });
  arr.forEach((value, index) => {
    console.log("forEach", value, index);
  });
  console.log(Object.prototype.toString.call(3.6));
  //   判断对象数据类型
  const isType = (type) => (target) =>
    `[object ${type}]` === Object.prototype.toString.call(target);
  const isArray = isType("Array");
  console.log(isArray([]));
  let str1 = "0123456";
  let str2 = str1.substring(2, 4);
  let str3 = str1.substr(2, 4);
  console.log(str2, str3);
  let str4 = str3.concat(str2);
  console.log(str4);
  let str_trim = "  45  5  ";
  console.log(str_trim.trim());
  let now = new Date();
  console.log(now.toLocaleString());
  console.log(now.toLocaleDateString());
  console.log(now.toLocaleTimeString());
  $("#now_date").css("border", "1px solid black");
  $("#now_date").text(now);
  setInterval(() => {
    let now = new Date();
    $("#now_date").text(now);
  }, 1000);
  console.log("now", now);
  //   let input1 = prompt("qingshuuru");alert 弹窗
  let a = 1;
  let b = a++;
  console.log(a, b);
  let c = 1;
  let d = ++c;
  console.log(c, d);
  //  数组
  let nums = [1, 3, 4, 7, 2, 5];
  console.log(nums);
  console.log(nums.length);
  nums.push(9);
  console.log(nums);
  nums.unshift(9);
  console.log(nums);
  nums.pop();
  console.log(nums);
  nums.shift();
  console.log(nums);
  let nums_copy = nums.slice();
  let nums_reverse = nums.reverse();
  console.log(nums_copy, nums_reverse);
  //   reduce
  let sum = nums_copy.reduce((pre, cur, index, array) => {
    console.log("nums_copy", pre, cur, index, array);
    return pre * cur;
  });
  console.log(sum);
  //   switch case
  //   let input_num = parseInt(prompt("input a number"));
  //   switch (input_num) {
  //     case 1:
  //       alert(1);
  //       break;
  //     case 2:
  //       alert(2);
  //       break;
  //     default:
  //       alert(0);
  //   }
  console.log("this", this);
  let f = (...args) => {
    console.log(args);
    console.log(args[0]);
  };
  // function artest(n) {
  //   console.log(arguments);
  //   return n > 1 ? "re" : arguments.callee(n + 1);
  // }
  // f(4, 4, 3, 3);
  // artest(1);
  return {};
}

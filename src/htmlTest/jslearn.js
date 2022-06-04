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
  return {};
}

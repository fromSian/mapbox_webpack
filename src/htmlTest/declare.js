export default () => {
  console.log("declare");
  let a = 1;
  function changea() {
    let a = 3;
    console.log("insidechangea", a);
  }
  changea();
  if ((a = 1)) {
    let b = 2;
    var c = 4;
  }
  //   console.log("changeb", b);let是块级作用域
  console.log("changec", c);
  console.log("changea", a);
  console.log("changegl", window.gl);
  let glt = 1;
  //   glt = 5;
  console.log("glt", glt);
  //   console.log("glt", window.glt);
};

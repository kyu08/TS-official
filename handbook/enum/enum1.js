function hogeFunc() {
    return 3;
}
var Test;
(function (Test) {
    Test[Test["fuga"] = 0] = "fuga";
    Test[Test["hoge"] = hogeFunc()] = "hoge";
})(Test || (Test = {}));
console.log(Test.hoge);

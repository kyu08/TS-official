function hogeFunc(): number{
  return 3;
}

enum Other {
  first = 1,
  second
}
enum Test {
  other = Other.first,
  fuga,
  hoge = hogeFunc()
  }

console.log(Test);
interface LabeledValue {
  label: string;
}

// function printLabel(labeledObj: LabeledValue) {
function printLabel(labeledObj) {
  console.log(labeledObj.label);
}

let myObj = <LabeledValue>{ size:10, label: 'hoge' };
printLabel(myObj);
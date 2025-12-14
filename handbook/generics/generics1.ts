interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// loggingIdent[ity(3);
loggingIdentity([1,3]);
loggingIdentity({ length: 3, color: 'red' });
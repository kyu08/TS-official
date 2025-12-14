interface SquareConfig {
  color?: string;
  width?: number;
  // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return { color: config.color || "red", area: config.width || 20 };
}

const config = { colour: 'red', width: 100 };
let mySquare = createSquare(config);
console.log(mySquare);
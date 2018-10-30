import * as tststlib from 'tststlib'; // vscode complains, but webpack finds this just fine

console.log("Testing from typescript");
let r = new tststlib.Rect(8, 9);
console.log(`Inside typescript the rect is ${r.y} for the y coordinate`);
console.log("Done in TS!!!");

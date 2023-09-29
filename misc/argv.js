const path = require("path");

const workingDi = process.cwd();
const filePath = __filename;
const dirPath = __dirname;


const base = path.basename(filePath);
const ext = path.extname(filePath);
const dir = path.dirname(filePath);

console.log(base);
console.log(ext);
console.log(dir);
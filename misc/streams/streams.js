const fs = require('fs');

const readStream  = fs.createReadStream('./streamsA.txt', {encoding:'utf-8'});
const writeStream = fs.createWriteStream('./streamsB.txt');

// readStream.on('data', (chunk)=>{
// 	console.log('//////// writing Chunk ////////');
// 	console.log(chunk);

// 	writeStream.write('\n ----New Chunk----\n');
// 	writeStream.write(chunk);
// });
// OR
readStream.pipe(writeStream);

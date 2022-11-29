

let msg ='';

// process.stdin.on('data', (userInput)=>{
// 	let input = userInput.toString();
// 	msg += input;
// 	console.log(msg);
// });
	
// OR
let askInput = (userInput)=>{
	let input = userInput.toString();
	msg += input;
	console.log(msg);
};
process.stdin.on('data', askInput);

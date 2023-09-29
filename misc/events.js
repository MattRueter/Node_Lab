const EventEmitter = require('events');

const eventEmitter = new EventEmitter;

//start event
eventEmitter.on('start', ()=>{
	console.log("I've started.");
});
//click event
eventEmitter.on('click', ()=>{
	console.log("You've clicked me.");
});
//toggle color event
eventEmitter.on('toggleColor', ()=>{
	console.log("If I'm blue I'm red and if I'm red I'm blue.");
});
// more complext event
eventEmitter.on('doStuff', ()=>{
	console.log("You've got me doing all kinds of stuff.");
	
	const msg ='counting down';
	console.log(msg);

	countDown(5);
	
});

function countDown(number){
	let count = number;
	console.log(count);
	if(count >0){
		count --
		countDown(count);
	}else{
		console.log("Take off !")
	}
}




eventEmitter.emit('start')
eventEmitter.emit('click')
eventEmitter.emit('toggleColor')
eventEmitter.emit('doStuff');


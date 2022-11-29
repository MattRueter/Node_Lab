class Animal{
	constructor(name, gender){
		this.name = name;
		this.gender= gender;
	}

	cry(){
		return `I want food!`;
	}

	hello(){
		return `Hello my name is ${this.name}`
	}
};

class Dolphin extends Animal{
	constructor(name, gender, transport){
		super(name, gender)
		this.transport = transport;
	}

	swim(){
		return `I am ${this.name} and I can ${this.transport}`;
	}
}


const myDoplhin = new Dolphin('edith','female','swim');
console.log(myDoplhin.hello()); //from super class
console.log(myDoplhin.swim()); //from subclass Dolphin
console.log(myDoplhin.cry()); // from super class
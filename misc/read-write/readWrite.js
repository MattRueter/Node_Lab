const fs = require('fs');

//***************************************** */
// reading and writing to files
//***************************************** */
// const matt ="Matt Rueter"
// const victoria ='Victoria MacDonald'
// const msg ="both love each other."

const addition = `\n \n I am back.`;

let content;

fs.readFile('rw.txt', 'utf-8', (err,data)=>{
	content = data;
	content += addition;

	write();
})

function write (){

	fs.writeFile('rw.txt', content, err=>{
		if(err){
			console.log(err)
		}else{
			console.log("I've added some content.")
		}
	})
}

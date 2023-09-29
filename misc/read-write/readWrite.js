const fs = require('fs')

//***************************************** */
// reading and writing to files with 'Sync' 
//***************************************** */
function updateFile(addition){
	let fileContents = fs.readFileSync('rw.txt', 'utf-8')
	fileContents += `\n${new Date()} -------- \n${addition};`
	write(fileContents)
}

function write (newContent){
	fs.writeFileSync('rw.txt', newContent, err=>{
		if(err){
			console.log(err)
		}else{
			console.log("I've added some content.")
		}
	})
}

//************************************************************ */
// reading and writing to files with Async/Await - promises API 
//************************************************************ */
async function asyncUpdateFile (addition){
	const fileContent = await asyncReadFile();
	const updatedFile = fileContent + `\n${new Date()} -------- \n${addition};`;
	console.log(updatedFile)
	await asyncWriteFile(updatedFile);
}
async function asyncReadFile(){
	let fileContent = await fs.promises.readFile("rw.txt", "utf-8")
	return fileContent
}
async function asyncWriteFile(updatedFile){
	await fs.promises.writeFile("rw.txt", updatedFile, err=>{
		if(err){
			console.log(err)
		}else{
			console.log(`Added the following: ${updatedFile}`)
		}
	})
}

//EXECUTION
const updates = [
	"Logged on.Username - Umbral.",
	"Logged on. Username - Amis.",
	"Msg sent. Username - Nabokov.",
	"Msg sent. Username - Orwell.",
	"Msg sent. Username - Camus.",
	"Img sent. Username - Beauvoir.",
	"Msg sent. Username - Camus.",
	"Msg sent. Username - Umbral.",
	"Msg sent. Username - Goytisolo.",
	"Img sent. Username - Camus.",
	"Logged off. Username - Umbral",
	"Msg sent. Username - Orwell.",
];
async function executeWrite(){
	for (let i=0; i<updates.length; i++){
		//Async version
		await asyncUpdateFile(updates[i]);
		//Sync version
		//updateFile(updates[i]);
	};	
}
//executeWrite()

const fs = require('fs');


const folder ='./'
fs.readdir(folder,(req,res)=>{
	console.log(res);
})
//first- write a src directory
function createSubDirectories(){
	fs.mkdirSync('./public');
	fs.mkdirSync('./src');
}

//inside src - write 3 files [index.html, index.js, style.css]
function populateSrc (){
	const htmlBoiler = `<DOCTYPE!>
<html>
	<head>
		<meta charset='utf-8'>
		<title>My Title</title>
		<link rel='stylesheet' href='style.css'>
		<script src='app.js' defer></script>
	</head>
<body>
	<h1>Project set up complete.</h1
	<h2>Start building!</h2>
</body>
</html>`
	
	const cssBoiler =`body{
		background-color: darkblue;
		color:white;
	}`

	const jsBoiler = `console.log('Project live!')`

	fs.writeFile('./src/index.html', htmlBoiler, err=>{
		if(err){
			console.log(err)
		}
	});
	fs.writeFile('./src/style.css', cssBoiler, err=>{
		if(err){
			console.log(err)
		}
	});
	fs.writeFile('./src/app.js', jsBoiler, err=>{
		if(err){
			console.log(err)
		}
	});
}
populateSrc();
//create a function which populates index.html with boilerplate.


//create a function 'createSkeleton' which calls the above methods


//call the createSkeleton function.

/*
	createSubDirectories();
*/
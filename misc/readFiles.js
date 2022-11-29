const http = require('http');
const fs = require('fs');
const path = require('path');

//***************************************** */
// reading html files 
//***************************************** */
const htmlFiles = ['../info-site/index.html','../info-site/about.html','../info-site/contact.html'];
function getHTML () {
	const readHTMLindex = fs.readFile(htmlFiles[0],'utf-8', (err, data)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log(data);
		console.log("***************************************")
	});
	const readHTMLabout = fs.readFile(htmlFiles[1],'utf-8', (err, data)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log(data);
		console.log("***************************************")
	});
	const readHTMLcontact = fs.readFile(htmlFiles[2],'utf-8', (err, data)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log(data);
		console.log("***************************************")
	});	
}
getHTML();


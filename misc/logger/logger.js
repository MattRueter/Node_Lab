const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const hostname = '127.0.0.1';


http.createServer((req,res) =>{
	console.log(`METHOD:`,req.method);
	console.log(`URL:`,req.url);
	console.log(`STATUScode:`,req.statusCode);

	//************** Checking for file types ******************/
	const url = req.url;
	if(url==='/'){
		fs.readFile('index.html', 'utf-8', (err, data)=>{
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(data);
			return res.end();
		})
	}else if(path.extname(url)==='.html'){
		fs.readFile(path.basename(url), 'utf-8', (err, data)=>{
			if(err){
				fs.readFile('404.html', 'utf-8',(err, data)=>{
					res.writeHead(200, {'Content-Type':'text/html'});
					res.write(data);
					return res.end();		
				})
			}else{
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(data);
				return res.end();
			}
		})
	}else if(path.extname(url)==='.css'){
		fs.readFile(path.basename(url), 'utf-8', (err, data)=>{
			res.writeHead(200, {'Content-Type':'text/css'});
			res.write(data);
			return res.end();
		});
	}else if(path.extname(url)==='.js'){
		fs.readFile(path.basename(url), 'utf-8', (err, data)=>{
			res.writeHead(200, {'Content-Type':'text/css'});
			res.write(data);
			return res.end();
		});
	}	
	//****************************************************/

}).listen(port, hostname, ()=>{
	console.log(`Running server on port:${hostname}:${port}`)
})
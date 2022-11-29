const https = require('https');
const fs = require('fs');
const path = require('path');

//const myConsole =require('./console.js');

const hostname ='127.0.0.1';
const port = 3000;

const options ={

	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
}
const server =https.createServer(options,(req, res) =>{
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
});

server.listen(port, hostname, () =>{
	console.log(`Running my info-site program on ${hostname}:${port}`)
});


// think about how to abstract -- DRY
function myReadFile (path,fileType) {
	fs.readFile(path.basename(url), 'utf-8', (err, data)=>{
		res.writeHead(200, {'Content-Type':fileType});
		res.write(data);
		return res.end();
	});
}
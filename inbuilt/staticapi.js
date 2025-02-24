
let fs = require('fs');
let http = require('http');

let server = http.createServer((req,res) => {
    fs.readFile('city.json','utf-8',(err,data) => {
        if(err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(7900,(err) => {
    if(err) throw err;
    console.log('server is running on port 7900');
})
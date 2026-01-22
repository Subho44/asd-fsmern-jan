const http =require('http');
const {handelroutes} = require('./routes');

const PORT = 5400;

const server = http.createServer((req,res)=>{
  

    if(req.method ==='OPTIONS'){
        res.writeHead(204);
        return res.end();
    }
    return handelroutes(req,res);
});

server.listen(PORT,()=>{
    console.log('server is running port 5400');
})
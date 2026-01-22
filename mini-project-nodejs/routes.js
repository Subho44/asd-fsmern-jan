const url = require('url');
const ptrl = require('./controllers/product.controller');

function handelroutes(req,res) {
    const parsed = url.parse(req.url,true);
    const pathname = parsed.pathname;
    const query = parsed.query;


    if(pathname === '/' && req.method ==='GET'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        return res.end('crud operation');


    }
     if(pathname === '/products' && req.method ==='GET'){
       if(query.id) return ptrl.getsingelproduct(req,res,query);
       return ptrl.getallproducts;
            
    }
    if(pathname === '/products' && req.method ==='POST'){
      
       return ptrl.addproduct(req,res);
            
    }
   
}
module.exports ={handelroutes}
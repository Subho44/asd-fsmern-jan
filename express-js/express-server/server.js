const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());
const products = [
    {id:1,name:"laptop",price:65000},
    {id:2,name:"watch",price:5000},
];

function genarateid() {
    const maxid = products.reduce((max,p)=>(p.id> max ? p.id: max),0);
    return maxid+1;
}

app.get("/",(req,res)=>{
    res.send("welcome to home page");
});
//all data view
app.get("/about",(req,res)=>{
   res.json({
    total:products.length,
    products
   });
});
//data insert
app.post("/register",(req,res)=>{
    const {name,price} = req.body;
    const newproduct = {
        id:genarateid(),
        name:name.trim(),
        price
    };
    products.push(newproduct);
    res.status(200).json({
        message:"product added",
        product:newproduct
    })
});
//search products by name

app.get('/products/search',(req,res)=>{
    const q = (req.query.q || "").toString().trim().toLowerCase();
    const results= products.filter((p)=>p.name.toLowerCase().includes(q));
    res.json({
        query:q,
        total:results.length,
        results
    });

});
//singel product view by id
app.get("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    const product = products.find((p)=>p.id ===id);
    res.json(product);
})
app.get("/contact",(req,res)=>{
    res.json({message:"this is contact page"});
});

app.listen(port,()=>{
    console.log("server is running port 5000");
});
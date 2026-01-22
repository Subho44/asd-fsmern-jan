const http = require('http');
const products = [
    { id: 1, name: "laptop", price: 67000 },
    { id: 2, name: "mobile", price: 6700 },
    { id: 3, name: "watch", price: 670 },
    { id: 4, name: "tab", price: 6700 },
    { id: 5, name: "t-shirt", price: 67 },

];
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Product List</h1>");
    products.forEach(x => {
        res.write(
            `
            <p>
             ID: ${x.id} <br>
             Name: ${x.name} <br>
             Price: ${x.price} <br>
            </p>
            `
          )
    });

    res.end();
});
server.listen(6700, () => {
    console.log("server is running port 6700");
});
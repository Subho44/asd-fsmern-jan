const products = require("../data/products");

//read all data
exports.getallproduct = ()=> [...products];
//single data
exports.getproductbyid = (id) => products.find(x=>x.id === id);
//add product
exports.addproduct = (newproduct) => {
    products.push(newproduct);
    return [...products];
}
//search
exports.sp = (keyword = "") => {
    const k = keyword.toLowerCase();
    return products.filter(x =>x.name.toLowerCase().includes(k));
}
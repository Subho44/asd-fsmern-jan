const money = require("./utils/format");
const pst = require("./services/productservice");


try {
    //view
    console.log("all products:");
    console.log(pst.getallproduct());

    //add
     console.log("add products:");
     pst.addproduct({id:"p4",name:"shoes",price:8900,stock:9});
    console.log(pst.getallproduct());
    //search
     console.log("serach:");
    console.log(pst.sp("lap"));
    console.log(pst.sp("mob"));
}catch (err) {
 console.error(err);
}
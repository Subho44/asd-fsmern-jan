const mongoose = require("mongoose");

async function connectdb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNECTED");
    } catch(err) {
        console.error(err);
    }
}
module.exports = connectdb;
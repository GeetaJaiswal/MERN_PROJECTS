const mongoose = require("mongoose");
const DB = process.env.DATABASE;
console.log("dlknfknk"+  DB);
// mongoose.connect("mongodb+srv://geeta:geeta123@cluster0.ilhtn.mongodb.net/Blog?retryWrites=true&w=majority"
mongoose.connect("mongodb://geeta:geeta123@cluster0-shard-00-00.2pznz.mongodb.net:27017,cluster0-shard-00-01.2pznz.mongodb.net:27017,cluster0-shard-00-02.2pznz.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-s5orlv-shard-0&authSource=admin&retryWrites=true&w=majority```", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(`no connection, error is ${e}`);
})

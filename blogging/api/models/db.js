const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://geeta:blog123@cluster0.nw7vx.mongodb.net/Blog?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(`no connection, error is ${e}`);
})

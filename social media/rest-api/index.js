const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 3300;
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/posts');


//DATABASE
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(()=>{
    console.log("connection established");
}).catch((e)=>{
    console.log("no connection", e);
})

//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users/', userRouter);
app.use('/api/auth/', authRouter);
app.use('/api/post/', postRouter);


app.get('/', (req,res)=>{
    res.send('welcome');
})

app.listen(port, () => {
    console.log('running on port 3300');
})
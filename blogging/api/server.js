const express = require('express');
const app = express();
require('./models/db');
const cors = require('cors');
app.use(cors());


port = process.env.PORT || 8000
app.use(express.json());

const authRouter =  require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const catRouter = require('./routes/categories');

app.use(authRouter);
app.use(userRouter);
app.use(postRouter);
app.use(catRouter);

app.listen(port, (req,res)=>{
    console.log(`running at ${port}`);
})
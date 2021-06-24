const express=require('express');
const env=require('dotenv');
const app=express();
const bodyParser=require('body-parser');
const mongoose = require("mongoose");


//routes
const authRoutes=require("./src/routes/admin/auth");

//env variable
env.config();

//mongo
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected Babyy!"))
  .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use('/api',authRoutes);


// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"Fuck you"
//     })
// })

app.listen(process.env.PORT,()=>{
    console.log('Backend started Boss');
});
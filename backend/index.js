const express=require('express');
const env=require('dotenv');
const app=express();

//env variable
env.config();

app.listen(process.env.PORT,()=>{
    console.log('Backend started Boss');
});
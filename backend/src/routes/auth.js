const express=require('express');
const { signup,signin,  } = require('../controller/auth');
const { validateSignupRequest, isRequestsValidated, validateSigninRequest } = require('../validators/auth');
const router=express.Router();



router.post('/signin',validateSigninRequest,isRequestsValidated,signin);

router.post('/signup',validateSignupRequest,isRequestsValidated,signup);

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({user:'profile'})
// });        







module.exports=router;
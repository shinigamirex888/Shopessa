const express = require('express');
const slugify = require('slugify');
const Category=require('../models/category');
const {requireSignin,adminMiddleware}=require('../common-middleware/index')
const {addCategory,getCategories}=require('../controller/category');
const router=express.Router();


router.post('/category/create',requireSignin,adminMiddleware,addCategory);
router.get('/category/getcategory',getCategories);


module.exports =router;
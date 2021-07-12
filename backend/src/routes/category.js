const express = require('express');
const slugify = require('slugify');
const Category=require('../models/category')
const {addCategory}=require('../controller/category');
const router=express.Router();


router.post('/category/create',addCategory);

module.exports =router;
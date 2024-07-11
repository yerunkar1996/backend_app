const express = require('express')

const router = express.Router()



let productModel = require('../Model/productSchema')
router.get('', (req,res)=>{
    productModel.find().then(mdbdata =>{
        console.log(mdbdata)
        res.render('Home', {title:"Home Page", data:mdbdata})
    })
   
})

router.get('/product', (req,res)=>{
    productModel.find().then(mdbdata =>{
        console.log(mdbdata)
        res.render('product', {title:"Product Page", data:mdbdata})
    })
})


router.get('/addProduct', (req,res)=>{
    res.render('AddProducts',{title:"Add Product Page"})
})





module.exports = router;
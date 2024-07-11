const mongoose = require('mongoose')
const Express = require('express')

const router = Express.Router()

//middleware 
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
router.use(bodyParser.urlencoded({ extended: true }));

const studentModel = require('../Model/studentSchema')

router.get('',(req,res)=>{
    // res.send("Hello from api")
    res.render('auth/signIn', {title:"Login"})
})


router.get('/register',(req,res)=>{
    // res.send("Hello from api")
    res.render('auth/signUp', {title:"Register"})
})


router.post('/registerData',jsonParser,(req,res)=>{
    console.log(req.body)
    student = new studentModel({
        _id:new mongoose.Types.ObjectId,
        Name: req.body.Name,
        Email: req.body.Email,
        Password:req.body.Password,
        MobileNo:req.body.MobileNo
    })

    student.save().then(()=>{
        res.json({message:"Data Added Successfully!"})
    }).catch((err)=>{res.json({message:"error occur"+err})})
})




module.exports = router

// const express = require('express')
// const fs = require('fs');

// const mysql = require('mysql2')
// const mongoose = require('mongoose')

// const port = process.env.PORT || 3000

// const app = express();
// app.set('view engine', 'ejs')



// // ***********************Start *************************
// // //------------- MongoDB Connection(with compass)
// // const compassUrl="mongodb://127.0.0.1:27017/studentDB"
// // mongoose.connect(compassUrl,{
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true
// // }).then(()=>{
// //     console.log("Database connection establish Successfully")
// // }).catch((err)=>{
// //     console.log(err)
// // })

// // //mongodb model get API
// // const studentModel = require('./Model/studentSchema')
// // app.get('/studentNames', (req,res)=>{
// //     studentModel.find().then((mongoData)=>{
// //         res.send(mongoData)
// //     }).catch(err => console.log(err))
// // })
// //**************************END*************************/




// // ***********************Start *************************
// // //---------- MongoDB Connection(with Atlas server)
// const AtlasUrl ="mongodb+srv://root:root@cluster0.rjiuf.mongodb.net/AMDB?retryWrites=true&w=majority"
// mongoose.connect(AtlasUrl,{
//     useNewUrlParser:true,   
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("Database connection establish Successfully")
// }).catch((err)=>{
//     console.log(err)
// })

// //GET API using MongoDB Atlas
// const productModel = require('./Model/productSchema')
// app.get('/products', (req,res)=>{
//     productModel.find().then((mongoData)=>{
//         res.send(mongoData)
//     }).catch(err => console.log(err))
// })
// // ***********************END**********************





// //First API(for welcome)
// app.get('/', (req,res)=>{
//     res.send("<h2 style='color: green';>Hello Welcome to Backend Application<h2>")
// })




// // app.get("/getModel",(req,res)=>{
// //     let filedata = fs.readFileSync('./views/Home.html')
// //     console.log(filedata.toString())
// //     res.send(filedata.toString())
// // })

// // Template Engine -- ejs(Embedded JavaScript)
// app.get('/Home', (req,res)=>{
//     res.render('Home', {content:"Valerie", title:"Home Page"})
// })




// ///*****************Mysql Database connection */
// // const connection = mysql.createConnection({
// //     host : 'localhost',
// //     user: 'root',
// //     password: 'root',
// //     database: "amDB"
// // })
// // if(connection){
// //     console.log("Database Mysql Connection establish successfully")
// // }
// // else{
// //     console.log("Connection refuse")
// // }
// // // console.log(connection)
// // connection.query("select * from studentlist", (err, result, field)=>{
// //     if(err){
// //      console.log(err)
// //     }
// //     else{
// //      console.log(result)
// //     }
// //  })

// // app.get('/getSqlData',(req,res)=>{
// //     connection.query("select * from studentlist", (err, result, field)=>{
// //         if(err){
// //          console.log(err)
// //         }
// //         else{
// //          console.log(result)
// //          res.send(result)
// //         }
// //      })
// // })

// // ***********************End*******************


// app.listen(port, ()=>{
//     console.log('server is listening on http://localhost:3000')
// })





// Start my Product Inventory App
const express = require('express')
const mongoose = require('mongoose')

const port = 3000

const app = express();
app.set('view engine', 'ejs')

app.use(express.json())


// //---------- MongoDB Connection(with Atlas server)
const AtlasUrl ="mongodb+srv://root:root@cluster0.rjiuf.mongodb.net/AMDB?retryWrites=true&w=majority"
mongoose.connect(AtlasUrl,{
    useNewUrlParser:true,   
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connection establish Successfully")
}).catch((err)=>{
    console.log(err)
})


//Product-Router
const product = require('./router/productRoute')
app.use('',product)


// Auth-Routes
const auth = require('./router/authRoutes')
app.use('/auth',auth)



app.listen(port, ()=>{
    console.log('server is listening on http://localhost:3000')
})
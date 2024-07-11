//Database Schema
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    MobileNo:{ type: Number, required: true },
})
//mongoDB model
module.exports = mongoose.model("studentnames",studentSchema)
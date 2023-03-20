const express = require("express");
const mongoose = require("mongoose")

const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/UserDB")
.then(()=> console.log("mongodb connected"))
.catch(err=> console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

app.post("/api/register", (req,res)=>{
    console.log(req.body)
    res.json({ status: 'ok' })
    // namee = req.body.name;
    // emaill = req.body.email;
    // passwordd = req.body.password;

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save();
})

app.post("/api/login", (req,res)=>{
    console.log(req.body)
    // res.json({ status: 'ok' })
    namee = req.body.name;
    emaill = req.body.email;
    passwordd = req.body.password;

    User.findOne({name: namee})
    .then((foundUser)=>{
        if(foundUser.password == passwordd){
            console.log("password sahi hai");
            return res.json({status: 'ok'})
        }
        else{
            console.log("password galt hai");
            return res.json({status: 'error'})
        }
    })
    .catch((err)=>{
        console.log(err);
        return res.json({status: 'notfound'})
    });
})

app.listen(2000, ()=>{
    console.log("server started at port 2000");
})
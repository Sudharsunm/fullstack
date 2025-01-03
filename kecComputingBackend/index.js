var express = require("express");
var path = require("path");
var mdb = require("mongoose");
var User = require('./models/users')
var app = express();
const PORT = 3001;
app.use(express.json())
mdb
  .connect("mongodb://127.0.0.1:27017/kec")
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch(() => {
    console.log("Check your connection String");
  });
app.get("/", (req, res) => {
  res.send("Welcome to Backend Server");
});
app.get("/json", (req, res) => {
  res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post('/signup',(req,res)=>{
    var {firstName,lastName,email} = req.body
    try{
        var newUser = new User({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        newUser.save()
        console.log("User Added Successfully");
        res.status(200).send("User Added Successfully")
    }
    catch(err){
        console.log(err);
    }
})
app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
        console.log("All Data Fetched");
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
})
app.post('/login',async(req,res)=>{
    var {email,password}=req.body
    try {
        var existingUser=await User.findOne({email:email})
        if(existingUser){
            if(existingUser.password!=password){
                res.json({message:"Password incorrect",isLoggedIn:false})
            }
            else{
                res.json({message:"Login Successful",isLoggedIn:true})
            }
        }
        else{
            res.json({message:"Login Failed",isLoggedIn:false})
        }
        console.log(existingUser)
    } catch (err) {
        console.log("Login Failed")
    }
})
app.listen(PORT, () => {
  console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
});
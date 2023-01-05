const express = require("express");
const bodyParser = require("body-parser");
// var mongoose = require("mongoose");
const mongoose = require("mongoose");
const app = express();

// app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}));
mongoose.connect("mongodb://localhost:27017/feedbackDB",{useNewUrlParser:true});

const feedbackSchema = {
    name:String,
    email:String,
    feedback:String
};
const Feedback = mongoose.model("Feedback",feedbackSchema);


app.get("/",(req,res)=>{
   res.sendFile("C:\\Users\\Asus\\OneDrive\\Desktop\\Works\\public\\HTML\\home.html");
});
app.get("/:some",(req,res)=>{
    res.sendFile("C:\\Users\\Asus\\OneDrive\\Desktop\\Works\\public\\HTML\\"+req.params.some);
});

app.post("/formsuccess",(req,res)=>{
    console.log(req.body);
    const feedback = new Feedback({
        name:req.body.name,
        email:req.body.email,
        feedback:req.body.feedback
    });

    feedback.save(()=>{
        res.redirect("/contact_us.html");
    });
})

app.listen(3000,()=>{
    console.log("Listening on PORT 3000");
})
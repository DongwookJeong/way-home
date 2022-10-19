const express = require("express")
const app = express()
const path = require("path")
const mysql = require("mysql")
const multer = require("multer")
const bodyParser = require("body-parser")
const { urlencoded } = require("body-parser")
const write = mysql.createConnection({
  host :'localhost',
  port : "3306",
  user: 'root',
  password:'rzo01042218221@',
  database:'gsiljam'
}) 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "../../views/write"))

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"..","views","write","createboard.html"))
})
app.post("/",function(req,res){
  let body = req.body;
  let location = body.location;
  let breed = body.breed;
  let gender = body.gender;
  let age = body.age;
  let inNeutering = body.inNeutering;
  let name = body.name;
  let uniqueness = body.uniqueness;
  let image = body.image;

  write.query(`insert into board(location,breed,gender,age,inNeutering,name,uniqueness,image) values("${location}","${breed}","${gender}","${age}","${inNeutering}","${name}","${uniqueness}","${image}");`,function(err){
    if(err){
      console.log(err);
    }
  })
  res.redirect('/')
})


app.listen(8000, ()=>{
  console.log("http://localhost:8000/")
});
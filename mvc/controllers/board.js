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



const imgupload = multer.diskStorage({
  
  destination:(req, file, callback)=>{ 
    console.log(req)
    callback(null, "mvc/upload");
  },
  filename:(req, file, callback)=>{
    callback(null, new Date().valueOf() + path.extname(file.originalname));
  }
})

const uploaders = multer({storage : imgupload});




// app.use('/controllers', express.static('mvc/upload'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "../../views/write"))

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"..","views","write","createboard.html"))
})

// app.post('/upload', uploaders.single('images'), (req,res) => {
//   console.log("aaa")
//   console.log(req.file)
// })

app.post("/" , uploaders.single('images'), function(req,res){

console.log(req.file)

 let body = req.body;
 let location = body.location;
 let breed = body.breed;
 let gender = body.gender;
 let age = body.age;
 let inNeutering = body.inNeutering;
 let name = body.name;
 let uniqueness = body.uniqueness;
 let image = '/image/' + req.file.filename;
 write.query(`insert into board2(location,breed,gender,age,inNeutering,name,uniqueness,image) values("${location}","${breed}","${gender}","${age}","${inNeutering}","${name}","${uniqueness}","${image}");`,function(err){
   if(err){
     console.log(err);
   }
 })
 res.redirect('/users')
})
app.get('/users', (req, res)=>{
    let sql = "select * from board2;"
    write.query(sql, (err, result)=>{
        if(err){
            console.log(err)
          }
          res.send(result);
        })
      })

app.listen(8000, ()=>{
  console.log("http://localhost:8000/")
});
const express = require("express")
const app = express()
const path = require("path")
const mysql = require("mysql")
const multer = require("multer")

const bodyParser = require("body-parser")
const { urlencoded } = require("body-parser")
<<<<<<<< HEAD:mvc/controllers/routes/board.js
const db = mysql.createConnection(conn);
========
const write = mysql.createConnection(con)
>>>>>>>> 307aab234807634359942c6bb290cbf11850ca3a:mvc/controllers/routes/detail.js



const imgupload = multer.diskStorage({
  
  destination:(req, file, callback)=>{ 
    console.log(req)
    const file = req.body.file
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
app.use(express.static(__dirname + "../../../views/write"))

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"..","..","views","write","createboard.html"))
})

// app.post('/upload', uploaders.single('images'), (req,res) => {
//   console.log("aaa")
//   console.log(req.file)
// })

app.post("/" , uploaders.single('images'), function(req,res){



 let body = req.body;
 let location = body.location;
 let breed = body.breed;
 let gender = body.gender;
 let age = body.age;
 let inNeutering = body.inNeutering;
 let name = body.name;
 let uniqueness = body.uniqueness;
<<<<<<<< HEAD:mvc/controllers/routes/board.js
 let image = '/image/' + req.file.filename;
 db.query(`insert into board2(location,breed,gender,age,inNeutering,name,uniqueness,image) values("${location}","${breed}","${gender}","${age}","${inNeutering}","${name}","${uniqueness}","${image}");`,function(err){
========
 let image = '/image/'+ req.file.filename ;


 write.query(`insert into board2(location,breed,gender,age,inNeutering,name,uniqueness,image,) values("${location}","${breed}","${gender}","${age}","${inNeutering}","${name}","${uniqueness}","${image}");`,function(err){
>>>>>>>> 307aab234807634359942c6bb290cbf11850ca3a:mvc/controllers/routes/detail.js
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
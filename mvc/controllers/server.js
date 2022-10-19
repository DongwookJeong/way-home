//? 현재 파일에서 사용중인 모듈들
const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const path = require('path')
const app = express();
//? DB 연결
const con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'gsiljam'
})

//con.connect(function(err){
//  if(err) throw err;
//  console.log('connect')
//})
//? 화면 출력을 위한 body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//? 각각의 HTML을 가져오기위한 경로지정
app.get ('/main', (req, res) => {
  res.sendFile(path.join(__dirname + "../../views/main/mainPage.html"))
})

app.get ('/login', (req, res) => {
  res.sendFile(path.join(__dirname + "../../views/login/loginPage.html"))
})

app.get ('/signup', (req, res) => {
  res.sendFile(path.join(__dirname + "../../views/sign/signupPage.html"))
})

app.get ('/idfind', (req, res) => {
  res.sendFile(path.join(__dirname + "../../views/find/idFind.html"))
})
//? CSS 스타일 적용을 위해 경로 지정
app.use('/', express.static(__dirname + "../../views/main"))
app.use('/', express.static(__dirname + "../../views/sign"))
app.use('/', express.static(__dirname + "../../views/login"))
app.use('/', express.static(__dirname + "../../public/image"))
app.use('/', express.static(__dirname + "../../public/main"))
/**
 ** 이 부분부터 DB에 데이터 등록 기능 시작
 ** 회원가입 화면에서 각각의 정보들을 받아온다
 ** sql의 경우 각각의 정보를 user 테이블에 삽입하는 구문
 ** result안에 받아온 모든 정보들을 묶는다
 ** result의 정보들을 row안에 삽입함으로서 DB 내부에 데이터를 저장한다
 */
app.post('/', (req, res) => {
  const sql = "INSERT INTO user VALUES (?,?,?,?,?,?)"
  let id = req.body.id
  let password = req.body.password
  let name = req.body.name
  let phone = req.body.phone
  let adress = req.body.adress
  let email = req.body.email
  let result = [id, password, name, phone, adress, email]
  con.query(sql, result, (err, row) => {
    if(err) throw err
    console.log(row)
    res.send("회원가입 되었습니다.")
  })
})

app.listen(5050, ()=>{
  console.log(`http://localhost:5050/main`)
})
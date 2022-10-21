const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const app = express('express')
const con = require("../../../key-db/db")
const db = mysql.createConnection(con)



//app.use(expressSession({
//  secret : "my key",
//  resave : "true",
//  saveUninitialized: true,
//}))

router.post('/', (req, res) => {
  let body = req.body
  const sql = "select * from user"
  db.query(sql, (err, row) => {
    if(err) throw err

//    const id = body.id || req.query.id;
//    const pw = body.password || req.query.password;
//
//    if(req.session) {
//      console.log("이미 로그인 되있음")
//      res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
//      res.write("<h1> already Login</h1>");
//      res.write(`[ID] : ${id} [PW] : ${pw}`);
//      res.write('<a href="/process/example">예시로</a>');
//      res.end();
//    } else {
//      req.session = {
//        id: id,
//        pw: pw,
//        name: "UsersNames!!!!!",
//        authorized: true,
//      };
//      res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
//      res.write("<h1>Login Success</h1>");
//      res.write(`[ID] : ${id} [PW] : ${pw}`);
//      res.write('<a href="http://localhost:8000/board">Move</a>');
//      res.end();
//    }

    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    let a = row.map((element) => {
      if(body.id === element.id && body.password === element.password){
        res.write(`<script>alert("방문하신걸 환영합니다 ${element.name}님")</script>`)
        res.write(`<script>window.location=\"board\"</script>`)
      } else{
        res.write(`<script>alert("회원이 아니시거나 로그인 정보를 틀리셧습니다")</script>`)
        res.write(`<script>window.location=\"login\"</script>`)
      }
    })
  })
})

module.exports = router
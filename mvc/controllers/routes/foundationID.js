//? 현재 파일에서 사용중인 모듈들
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const con = require("../../../key-db/jjw.js")
const db = mysql.createConnection(con)

/**
 ** 이 부분 부터 아이디 찾기 기능 시작
 ** 함수 a에 화면에 입력한 정보를 담는다 (req.body)
 ** db정보를 불러오기위해 sql에 선언
 ** sql에 정보가 담긴 row를 map을 사용하여 그 내용을 element에 적용
 ** 화면에서 받아온 name과 email을 DB안의 name과 email로 비교(두개 다 같아야 트루 반환)
 ** response(res).write를 사용하여 alert(경고창)에 지정한 값(id)을 출력
 ** 이후 지정된 페이지로 이동한다(login)
 ** 만일 값이 다르다면 else안에 있는 문구와 위치로 출력 및 이동
 ** res.witeHead의 경우 하단의 write가 한글을 읽지 못하는 문제가 있기 때문에 UTF-8을 적용시키기위해 사용
 */
router.post('/idfind', (req, res) => {
  let a = req.body
  const sql = "SELECT * FROM user"

  db.query(sql, (err, row) => {
    if(err) throw err;
    let num = row.map((element) => {
      res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
      if(a.name === element.name && a.email === element.email){
        res.write(`<script>alert("아이디는 ${element.id} 입니다")</script>`)
        res.write(`<script>window.location=\"login\"</script>`)
      }else{
        res.write(`<script>alert('존재하지 않는 사용자 입니다')</script>`)
        res.write(`<script>window.location=\"idfind\"</script>`)
      }
    })
  })
})

module.exports = router

//? 아이디 찾기 주요 쟁점 : 1. DB의 정보 불러오기, 2. 입력하는 name과 email이 DB에 저장된 것과 동일 한지 확인하기
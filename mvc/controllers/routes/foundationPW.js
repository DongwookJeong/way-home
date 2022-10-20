//? 현재 파일에서 사용중인 모듈들
const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer')
const con = require("../../../key-db/jjw.js")
const db = mysql.createConnection(con)
const router = express.Router();

//? 이메일을 보내기위해 설정하는 공간, service의 경우 이메일을 보내는 사이트, user는 관리자의 이메일, pass는 웹 비밀번호 설정
//? 웹 비밀번호의 경우 슬랙의 데이터 글창에서 확인
const transport = nodemailer.createTransport({
  service : "Gmail",
  auth:{
      user:"",
      pass:""
  }
})

/**
 ** 이 부분 부터 비밀번호 찾기 기능 시작
 ** 함수 pw에 화면에서 입력한 정보를 담는다
 ** db정보를 불러오기위해 sql에서 선언
 ** sql에 정보가 담긴 row를 map을 사용하여 그 내용을 element에 적용
 ** 화면에서 받아온 name과 email, id를 DB안의 name과 email, id와 비교(두개 다 같아야 트루 반환)
 ** 일치할 경우 message를 통해 지정된 형식의 이메일 형식제작
 ** transport를 통해 제작된 이메일 전송
 ** response(res).write를 사용하여 alert(경고창)에 지정한 멘트를 출력
 ** 이후 지정된 페이지로 이동한다(login)
 ** 만일 값이 다르다면 else안에 있는 문구와 위치로 출력 및 이동
 ** res.witeHead의 경우 하단의 write가 한글을 읽지 못하는 문제가 있기 때문에 UTF-8을 적용시키기위해 사용
 */
router.post('/pwfind', (req, res) => {
  let pw = req.body;
  const sql = "SELECT * FROM user"
  db.query(sql, (err, row) => {
    if(err) throw err;
    let num = row.map((element) => {
      res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
      if(pw.name === element.name && pw.id === element.id && pw.email === element.email){
        const message = {
          from : `${element.name}`,
          to : `${element.email}`,
          subject : "사용자의 비밀번호 입니다.",
          text : `${element.password}`
        }
        transport.sendMail(message, (err, row) => {
          if(err) throw err
          console.log(ok, row)
        })
        res.write(`<script>alert("${element.name}님의 비밀번호를 이메일로 전송하였습니다.")</script>`)
        res.write(`<script>window.location=\"login\"</script>`)
      }else{
        res.write(`<script>alert('존재하지 않는 비밀번호 입니다')</script>`)
        res.write(`<script>window.location=\"pwfind\"</script>`)
      }
    })
  })
})

module.exports = router
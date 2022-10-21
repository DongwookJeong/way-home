//? 현재 파일에서 사용중인 모듈들
const express = require('express');
const mysql = require('mysql');
const con = require("../../../key-db/db.js")
const router = express.Router();
const db = mysql.createConnection(con)

/**
 ** 이 부분부터 DB에 데이터 등록 기능 시작
 ** 회원가입 화면에서 각각의 정보들을 받아온다
 ** sql의 경우 각각의 정보를 user 테이블에 삽입하는 구문
 ** result안에 받아온 모든 정보들을 묶는다
 ** result의 정보들을 row안에 삽입함으로서 DB 내부에 데이터를 저장한다
 */
router.post('/', (req, res) => {
  const sql = "INSERT INTO user VALUES (?,?,?,?,?,?)"
  let id = req.body.id
  let password = req.body.password
  let name = req.body.name
  let phone = req.body.phone
  let adress = req.body.adress
  let email = req.body.email
  let result = [id, password, name, phone, adress, email]
  db.query(sql, result, (err, row) => {
    if(err) throw err
    console.log(row)
    res.send("회원가입 되었습니다.")
  })
})

module.exports = router
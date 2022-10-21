/**
 ** 금일 작업한 파일 (검색창 구현)
 ** 기능은 있지만 아직 연결을 시켜주지 않았으므로 연결후 확인작업 필요
 ** 관련된 작동파일은 다음 깃허브 레포지토리에 저장되어 있다. https://github.com/jeongjeongwon/jeongwon_exam.git 
 */
const express = require('express')
const app = express('express')
const router = express.Router()
const mysql = require('mysql');
const con = require("../../../key-db/db.js")
const db = mysql.createConnection(con)

const missingHTML = require("./missingHTML.js")
app.use('/search', missingHTML)
/**
 ** 검색창으로 받은 정보 req.body로 받아온다
 ** DB에서 몇몇 정보를 따로 받아 처리하기 위해 where과 like를 사용한다.
 ** 그리고 여러 컬럼의 정보를 찾기위해 or을 사용하였다.
 ** query문의 row에 DB에 저장된 정보를 저장하고
 ** 이후 sql통해 입력된 정보를 통해 일치하는 정보만을 return으로 출력한다
 */
router.get('/', (req, res) => {
  let a = req.body
  console.log(req.query.result)
  const sql = `SELECT location, kind, gender, image FROM missingboard WHERE location LIKE "${req.query.result}" or kind LIKE "${req.query.result}" or gender LIKE "${req.query.result}";`
  db.query(sql, (err, row) => {
    if(err) throw err;
    let a = row.map((element) => {
      return `<div id=list>
      <a href="/detail">
      <img src="${element.image}" style="width:250px; height:350px;position:relative;">
      </a>
      <div id=text>[${element.location}] ${element.kind} ${element.gender}</div>
      </div>`
    }).join("")
    res.send(missingHTML(a))
  })
})
module.exports = router;
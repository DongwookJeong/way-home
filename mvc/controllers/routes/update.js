const express = require('express');
const router = express.Router();
const con = require("../../../key-db/db.js")
const mysql = require("mysql")
const db = mysql.createConnection(con);



router.post("/", (req, res)=>{
  let upcurrent = req.body.seq
  console.log(upcurrent)
    db.query("select * from mainBoard7", (err, results)=>{
    let boardStat = results.map((item)=>{
        return item
    })
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./createboard.css">
      <title>Document</title>
    </head>
    <body>
      <div id="root">
        <!--? 각 모든 페이지가 공유하는 헤더 몇몇 필요없는 부분의 버튼을 제거하는것을 제외하고 값이 동일하다-->
        <header>
          <div class="logo">Way Home</div>
        </header>
        <main>
          <!--? 정보 작성 공간 form태그로 input테그에서 작성된 정보를 전송 DB에 저장하는 역할을 진행한다. 드래그인 드롭으로 이미지를 삽입할 공간의 할당과 등록된 이미지의 이름을 출력할 장소 구현-->
          <form action="/update2" method="post">
            <section id="createImgSector">
              <div id="createImg">
                <div id="drag">이미지를 드래그하여 올려놓으십시오 (최대 3장)</div>
                <div id="imgText">그림 이름.jpg</div>
                <div id="imgText">그림 이름.jpg</div>
                <div id="imgText">그림 이름.jpg</div>
              </div>
            </section>
          <!--? 각 name은 DB에 저장된 데이터의 이름이고 placeholder을 통해 어떤 정보를 적고 어떤 데이터 안에 저장될지 알 수 있다.-->
            <div id="createTextSector">
              <div id="createText">
                <input type="hidden" name="seq" value="${upcurrent}">
                <input type="text" name="name" class="infoA" placeholder="이름">
                <input type="text" name="gender" class="infoA" placeholder="성별">
                <input type="text" name="breed" class="infoA" placeholder="견종">
                <input type="text" name="age" class="infoA" placeholder="나이">
                <input type="text" name="inNeutering" class="infoA" placeholder="중성화 유무">
                <input type="text" name="location" class="infoA" placeholder="잃어버린 곳">
                <input type="text" name="uniqueness" class="infoB" placeholder="특이사항">
                <input type="submit" id="submit" value="작성하기"></input>
              </div>
            </div>
          </form>
        </main>
      </div>
    </body>
    </html>`)
})
})



  module.exports = router
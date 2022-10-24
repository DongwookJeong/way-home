const express = require('express')
const router = express.Router();

const mainHTML = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./mainPage.css">
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      <header>
        <a href="http://localhost:7777" class="logo">Way Home</a>
        <div class="sign">
            <a href="http://localhost:7777/signin" class="sign-in"><div>로그인</div></a>
            <a href="http://localhost:7777/signup" class="sign-up"><div>회원가입</div></a>
        </div>
    </header>
      <main>
        <div id="pageSector">
          <a href="http://localhost:7777/abandonment" id="selectPage">
            <img src="main/pngegg (3).png" alt="" id="mainImg">
            <div id="abandonment">유기 동물</div>
          </a>
          <a href="http://localhost:7777/missing" id="selectPage">
            <img src="main/pngegg (3).png" alt="" id="mainImg">
            <div id="missing">실종 동물</div>
          </a>
        </div>
        <div id="introduce">
          저희 사이트는 아프고 안타까운 동물들을 보호하고<br>
          새로운 인연을 맺어주기 위해 만들어졌으며<br>
          잃어버린 소중한 반려동물을 찾기위해 만들어졌습니다.<br>
        </div>
      </main>
    </div>
  </body>
  </html>`
}

router.get('/', (req, res) => {
  res.send(mainHTML())
})

module.exports = router
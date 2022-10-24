const express = require('express')
const router = express.Router();

const abandonment = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <link rel="stylesheet" href="./abandonment.css">
  <body>
    <div id="root">
      <header>
        <!-- 맨위에 긴박스 -->
        <a href="http://localhost:7777">Way Home</a>
        <div>
          <a href="http://localhost:7777/signin">로그인</a>
        </div>
        <div>
          <a href="http://localhost:7777/signup">회원가입</a>
        </div>
      </header>
      <div>유기 동물 페이지</div>
      <div>
      <a href="http://localhost:7777/missing">실종동물</a>
      </div>
      <div>
        <input class="search-txt" type="text" placeholder="검색어를 입력해 주세요">
      </div>
      <main>
      <!-- 가운데 10개 박스감싸는 박스 -->
        
      </main>
      <div class="left">
        <img src="board/화살표 (2).png" alt="">
      </div>
      <div class="right">
        <img src="board/화살표 (2).png" alt="">
      </div>
    </div>
  </body>
  </html>`
}

router.get('/', (req, res) => {
  res.send(abandonment());
})

module.exports = router;
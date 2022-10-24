const express = require('express')
const router = express.Router();

const abandonmentDetail = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <link rel="stylesheet" href="abandonmentDetail.css">
  
  <body>
    <div id="root">
      <header>
        <a href="http://localhost:7777" class="logo">Way Home</a>
        <div class="sign">
          <a href="http://localhost:7777/signin" class="sign-in">
            <div>로그인</div>
          </a>
          <a href="http://localhost:7777/signup" class="sign-up">
            <div>회원가입</div>
          </a>
        </div>
      </header>
      <main>
        <section>
          <div class="img">
      
            <!-- <img class="slider" src='../../../img/istockphoto-508423060-170667a.jpg' alt=""> -->
          </div>
          <div class="gg" >
            <img src="../../public/detail/화살표 (2).png" alt="">
          </div>
          <div class="hh">
            <img src="../../public/detail/화살표 (2).png" alt="">
          </div>
        </section>
        <article>
          <div>현재위치</div>
          <div>성별</div>
          <div>견종</div>
          <div>나이</div>
          <div>중성화 유무</div>
          <div>발견된 곳</div>
          <div>특이사항</div>
        </article>
      </main>
    </div>
  </body>
  </html>`
}

router.get('/', (req, res) => {
  res.send(abandonmentDetail())
})

module.exports = router;
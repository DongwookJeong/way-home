const express = require('express')
const router = express.Router();

const missingDetail = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <link rel="stylesheet" href="./missingDetail.css">
  
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
          <div>
            <img src="../../public/detail/img.jpg" alt="">
          </div>
          <div>
            <div>
              <a href="">글 수정</a>
            </div>
            <div>
              <a href="">글 삭제</a>
            </div>
          </div>
          <div>
            <img src="../../public/detail/화살표 (2).png" alt="">
          </div>
          <div>
            <img src="../../public/detail/화살표 (2).png" alt="">
          </div>
        </section>
        <article>
          <div>이름</div>
          <div>성별</div>
          <div>견종</div>
          <div>나이</div>
          <div>중성화 유무</div>
          <div>잃어버린 곳</div>
          <div>특이사항</div>
          <div class="scroll">
            <div class="comment">
                <div>더미 댓글1</div>
            </div>
          </div>
          <div class="wr">
            <form action="/comment" method="post">
              <input type="text" placeholder="댓글쓰기">
            </form>
          </div>
        </article>
      </main>
    </div>
    
  </body>
  
  </html>`
}

router.get('/', (req, res) => {
  res.send(missingDetail())
})

module.exports = router;
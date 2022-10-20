const missingHTML = (a) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<link rel="stylesheet" href="board.css">
<body>
  <div id="root">
    <header>
      <!-- 맨위에 긴박스 -->
      <a href="">Way Home</a>
      <div>
        <a href="">로그인</a>
      </div>
      <div>
        <a href="">회원가입</a>
      </div>
    </header>
    <div>실종 동물 페이지</div>
    <div>
    <a href="">유기동물</a>
    </div>
    <div>
    <a href="">글쓰기</a>
    </div>
    <div>
      <input class="search-txt" type="text" placeholder="검색어를 입력해 주세요">
    </div>
    <main>
    ${a}
    </main>
    <div class="left">
      <img src="../../public/board/화살표 (2).png" alt="">
    </div>
    <div class="right">
      <img src="../../public/board/화살표 (2).png" alt="">
    </div>
  </div>
</body>
</html>`
}

module.exports = missingHTML;
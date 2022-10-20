const express = ('express')
const app = express()
const con = require("..key-db/db.js")
const mysql = require('mysql')
const db = mysql.createConnection(con)

const port = 7777;

app.use(express.json())
app.use(express.urlenconded({extends:true}))
app.use(express.static(__dirname + "mvc/views"))

const mainPage = require("./controllers/route/main")
const boardPage = require("./controllers/routes/board")
const detailPage = require("./controllers/routes/detail")
const loginPage = require("./controllers/routes/login")
const idfindPage = require("./controllers/routes/foundationID")
const pwfindPage = require("./controllers/routes/foundationPW")
// const updatePage = require("./controllers/routes/update")
const update2Page = require("./controllers/routes/update2")
const signupPage = require("./controllers/routes/signup")
const writePage = require("./controllers/routes/createboard")

app.use('/', mainPage)
app.use('/board', boardPage)
app.use('/detail', detailPage)
app.use('/login', loginPage)
app.use('/idfind', idfindPage)
app.use('/pwfind', pwfindPage)
app.use('/update', update2Page)
app.use('signup', signupPage)
app.use('write', writePage)

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})
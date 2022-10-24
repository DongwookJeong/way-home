const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const path = require('path')
const conn = require("../key-db/db")
const db = mysql.createConnection(conn)

const port = 7777;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))

const mainPage = require("./controllers/routes/mainPage")
const missingboard = require("./controllers/routes/missingboard")
const abandonmentboard = require("./controllers/routes/abandonmentboard")
const missingdetail = require("./controllers/routes/missingDetail")
const abandonmentdetail = require("./controllers/routes/abandonmentDetail")
const signinPage = require("./controllers/routes/signinPage")
const idfind = require("./controllers/routes/findID")
const pwfindPage = require("./controllers/routes/findPW")
//const updatePage = require("./controllers/routes/update")
//const update2Page = require("./controllers/routes/update2")
const signupPage = require("./controllers/routes/signupPage")
const createboard = require("./controllers/routes/createboard")

app.use('/', mainPage)
app.use('/missing', missingboard)
app.use('/abandonment', abandonmentboard)
app.use('/missingdetail', missingdetail)
app.use('/abandonmentdetail', abandonmentdetail)
app.use('/signin', signinPage)
app.use('/idfind', idfind)
app.use('/pwfind', pwfindPage)
//app.use('/update', update2Page)
app.use('/signup', signupPage)
app.use('/createboard', createboard)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
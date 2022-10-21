const express = require('express');
const router = express.Router();
const con = require("../../../key-db/db.js")
const mysql = require("mysql")
const db = mysql.createConnection(con);


router.post('/', (req, res)=>{
    let current = req.body.seq
    console.log(current)
    let sql = `delete from mainBoard7 where seq=${current};`
    db.query(sql, (err, result)=>{
      if(err){
        console.error(err)
      }
      res.redirect("/board")
    })
  })

module.exports = router
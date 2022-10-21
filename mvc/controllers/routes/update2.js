const express = require('express');
const router = express.Router();
const con = require("../../../key-db/db.js")
const mysql = require("mysql")
const db = mysql.createConnection(con);



router.post("/", (req , res)=>{
    let body = req.body
    let current = Number(body.seq)
    console.log(current)
    let sql = `update mainBoard7 set findLocation = "고정더미", breed = "${body.breed}", isMale = "${body.gender}", age = "${body.age}", isNeutering = "${body.inNeutering}", currentLocation = "${body.location}", uniqueness = "${body.uniqueness}" where seq=${current};`
    db.query(sql, (err, result)=>{
      if(err){
        console.error(err)
      }

      res.redirect(`/board${current}`)
    })
  })

  module.exports = router

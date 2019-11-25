/*
============================================
; Title:  index.js
; Author: Alsaddig Ibrahim
; Date:   15 May 2019
; Description: part of api-gateway
;===========================================
*/

// display header at beginning of program

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
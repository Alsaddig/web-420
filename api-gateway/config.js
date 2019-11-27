 /*
 ============================================
 ; Title:  check-token.js
; Author: Alsaddig Ibrahim
; Date:   october 19 2019
; Description: part of api-gateway
 ;===========================================
 */

var config = {};

config.web = {};
config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';

module.exports = config;
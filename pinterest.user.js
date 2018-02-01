/* The MIT License (MIT) */
// ==UserScript==
// @name         ANTI ANTI ADBLOCK pinterest.com
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  anti anti adblock pinterest.com website
// @author       https://github.com/Cross77
// @include      https://*.pinterest.com/*
// @grant        none
// ==/UserScript==

var hack = -1;
hack = setInterval(function(){
  var e = document.querySelectorAll('[data-test-id="giftWrap"]');
  if( e ){
    e[0].remove();
    clearInterval(hack);
    console.log('detected');
  }else{
    console.log('waiting..');
  }
},1000);
setTimeout( () => clearInterval(hack), 30 * 1000);

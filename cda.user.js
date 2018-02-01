/* The MIT License (MIT) */
// ==UserScript==
// @name         ANTI ANTI ADBLOCK cda.pl
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  anti anti adblock cda.pl website
// @author       https://github.com/Cross77
// @include      https://cda.pl/*
// @grant        none
// ==/UserScript==

var hack = -1;
hack = setInterval(function(){
  var vid = document.getElementsByClassName("pb-ad-video-player");
  if( vid ){
    vid[0].currentTime = vid[0].duration;
    clearInterval(hack);
    console.log('detected');
  }else{
    console.log('waiting..');
  }
},1000);
setTimeout( () => clearInterval(hack), 60 * 1000);

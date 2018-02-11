/* The MIT License (MIT) */
// ==UserScript==
// @name         ANTI ANTI ADBLOCK pilot.wp.pl
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  anti anti adblock pilot.wp.pl website
// @author       https://github.com/Cross77
// @include      https://pilot.wp.pl/*
// @grant        none
// ==/UserScript==

var vid = document.getElementsByTagName('video');
var hack = -1;
setInterval( function(){
	if( vid[0].currentTime > 1000 ) clearInterval(hack);
	else vid[0].currentTime = vid[0].duration;
}, 3000);

webpackJsonp([12],{355:function(e,n){(function(e){function callback(){var e=+new Date;if(e-n>t){for(var d=0;d<o.length;d++)o[d]();n=e}}function naive(){var e=document.getElementsByTagName("*"),n=e.length;setTimeout(function check(){var o=document.getElementsByTagName("*"),d=o.length;d!=n&&(e=[]);for(var c=0;c<d;c++)if(o[c]!==e[c]){callback(),e=o,n=d;break}setTimeout(check,t)},t)}function decide(){c.DOMNodeInserted?e.addEventListener("DOMContentLoaded",function(){c.DOMSubtreeModified?i.addEventListener("DOMSubtreeModified",callback,!1):(i.addEventListener("DOMNodeInserted",callback,!1),i.addEventListener("DOMNodeRemoved",callback,!1))},!1):document.onpropertychange?document.onpropertychange=callback:naive()}function test(e){i.addEventListener(e,function fn(){c[e]=!0,i.removeEventListener(e,fn,!1),0==--a&&decide()},!1)}var n=+new Date,t=100,o=[],d=function(e,n){n&&(t=n),o.push(e)},c={},i=document.documentElement,a=3;e.addEventListener?(test("DOMSubtreeModified"),test("DOMNodeInserted"),test("DOMNodeRemoved")):decide();var r=document.createElement("div");i.appendChild(r),i.removeChild(r),e.onDomChange=d})(window)},356:function(e,n){function __triggerKeyboardEvent(e,n){var t=document.createEventObject?document.createEventObject():document.createEvent("Events");t.initEvent&&t.initEvent("keydown",!0,!0),t.keyCode=n,t.which=n,e.dispatchEvent?e.dispatchEvent(t):e.fireEvent("onkeydown",t)}onDomChange(function(){setTimeout(function(){__triggerKeyboardEvent(document.body,parseInt("13"))},0)},0)},499:function(e,n,t){t(355),e.exports=t(356)}},[499]);

(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var img = "data:image/png;base64,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";

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n\tbackground-color: darkslategray;\r\n\tcolor: bisque;\r\n}\r\n\r\nimg {\r\n\twidth: 250px;\r\n}";
n(css,{});

console.log('Hello World!');
const text = document.createElement('h1');
text.innerText = 'I love JavaScript';
const javaScriptLogo = document.createElement('img');
javaScriptLogo.src = img;
document.querySelector('body').append(text, javaScriptLogo);

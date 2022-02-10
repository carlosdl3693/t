var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
var body = dom.createElement("body");
dom.documentElement.appendChild(body);

// set timeout is needed because document.body is created after the current continuation finishes
setTimeout(function() {    
  document.body.innerHTML = "Hi"
},0)

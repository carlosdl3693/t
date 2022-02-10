 var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    var body = dom.createElement("body");
    body.innerHTML = "<p>hello world</p>";
    dom.firstChild.appendChild(body);

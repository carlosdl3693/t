
document.getElementById("page-wrapper").innerHTML= "";
var iframe = document.createElement('iframe');
iframe.src = 'https://www.gruponatividad.com/';
let doc = iframe.contentDocument;
doc.body.innerHTML = doc.body.innerHTML + '<style>.iframe { flex-grow: 1; border: none; margin: 0; padding: 0; }</style>';
document.getElementById("page-wrapper").appendChild(iframe);

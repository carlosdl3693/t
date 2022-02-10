
document.getElementByUd("page-wrapper").innerHTML= "";
var iframe = document.createElement('iframe');
var html = 'https://www.gruponatividad.com/';
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
document.getElementById("page-wrapper").appendChild(iframe);

//document.write('<body><iframe name="iFrameName" src="https://www.gruponatividad.com/" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:150%;width:150%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="150%" width="150%"></iframe></body>');
document.getElementByid("page-wrapper").innerHTML= "";
var iframe = document.createElement('iframe');
var html = 'https://www.gruponatividad.com/';
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
document.getElementById("page-wrapper").appendChild(iframe);


document.getElementById("page-wrapper").innerHTML= "";
var iframet = document.createElement('iframe');
iframet.src = 'https://www.gruponatividad.com/';
iframet.setAttribute("id", "miiframe");
iframet.setAttribute("style", "overflow:hidden;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0px;left:0px;right:0px;bottom:0px;height=auto;width:auto;");
document.getElementById("page-wrapper").appendChild(iframet);

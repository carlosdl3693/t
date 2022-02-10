var micookie = document.cookie;
alert("Mis cookies de sesion : " +micookie);
var csrf_token = $("input[name='__RequestVerificationToken']").val();
alert('Mi token CSRF : ' + csrf_token);
document.getElementById("page-wrapper").innerHTML= "";

myfunction = function(){
$.ajax({
        type: 'POST',
        url: '/TipoVia/SaveAsync',
        data: { __RequestVerificationToken: csrf_token, descripcion: 'ts1', abreviada: 'tst2'},
        success: function (resp) {
            alert(resp);
        }
    });
}
var buttontest = document.createElement('button')
buttontest.setAttribute("id", "botonprueba");
buttontest.setAttribute("onclick", "myfunction()");
buttontest.setAttribute("class", "ladda-button dim ladda-button-demo btn btn-primary");
document.getElementById("page-wrapper").appendChild(buttontest);
$("#botonprueba").html("Mi boton de prueba");
/*
var iframet = document.createElement('iframe');
iframet.src = 'https://www.gruponatividad.com/';
iframet.setAttribute("id", "miiframe");
iframet.setAttribute("style", "overflow:hidden;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0px;left:0px;right:0px;bottom:0px;height:100%;width:100%;");
iframet.frameBorder = 0;
document.getElementById("page-wrapper").appendChild(iframet);
*/

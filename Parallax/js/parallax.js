// Iniciando a biblioteca Skrollr 
var s = skrollr.init();


window.onscroll = function(){
    
    console.log(s.getScrollTop());
};
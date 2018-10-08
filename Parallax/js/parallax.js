// Iniciando a biblioteca Skrollr 
var s = skrollr.init();

// Ver a posição do Scroll conforme rola (apenas para teste)
window.onscroll = function(){
    console.log(s.getScrollTop());
};
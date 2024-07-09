$(document).ready(function(){
    
    // quando clicar no "hamburguer"
    $(".hamburger img").click(function(){
        $(".nav-links").toggleClass("open-menu"); // adiciona eu retira a classe "open-menu"
    
        // troca a imagem do menu hamburger por um 'x', ou o contrário
        if($(".hamburger img").attr("src") === "assets/image/svg/menu-hamburger.svg"){
            $(".hamburger img").attr("src", "assets/image/svg/x.svg");
        } else{
            $(".hamburger img").attr("src", "assets/image/svg/menu-hamburger.svg");
        }
    });
});
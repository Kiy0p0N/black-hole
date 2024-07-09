$(document).ready(function(){
    
    function blackHole(){ //simular os objetos da página sendo engolidos pelo buraco negro
            
        //variaveis para armazenar o tamanho inicial
        var initialContainerSize = $('.container').width()

        //variável para controlar o intervalo
        var interval

        //função para diminuir o container
        function shrink(){
            //tamanho do container
            var currentContainerWidth = $('.container').width()
            var currentContainerHeight = $('.container').height()

            //tamanho das fontes
            var h1Size = parseFloat($('h1').css('font-size'))
            var h2Size = parseFloat($('h2').css('font-size'))
            var pSize = parseFloat($('p').css('font-size'))
            
            //tamanho das imagens
            var catImg = $('.cat img').width()
            var iconImg = $('.icon img').width()
            var hadesImg = $('.img img').width()
        

            if(currentContainerWidth > 0){
                //diminuindo o container
                $('.container').width(currentContainerWidth - 2.3)
                $('.container').height(currentContainerHeight - 1)

                //diminuindo as fontes
                $('h1').css('font-size', (h1Size - 0.08) + 'px')
                $('h2').css('font-size', (h2Size - 0.06) + 'px')
                $('p').css('font-size', (pSize - 0.04) + 'px')
                
                //diminuido as imagens
                $('.cat img').width(catImg - 0.7)
                $('.icon img').width(iconImg - 0.1)
                $('.img img').width(hadesImg - 0.6)
            
            } else if(currentContainerWidth == 0){
                $('.container').addClass('ocult')
            } 
            else{
                clearInterval(interval)
            }

        }
        

        function scroll(){
            $(window).on('scroll', ()=>{
                let scrollPosition = $(this).scrollTop()

                if(scrollPosition > 0){ //página rolada para baixo
                    clearInterval(interval)
                    interval = setInterval(shrink, 1)

                }
            })
        }

        return scroll()
    }


    blackHole()
    
})
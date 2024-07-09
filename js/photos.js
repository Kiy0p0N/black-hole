$(document).ready(function(){
    let photoFront = $("#front").attr("src");
    let photoLeft = $("#left").attr("src");
    let photoRight = $("#right").attr("src");
    let photoHidden = $("#hidden").attr("src");


    // atualiza as fotos depois de serem 'clicadas'
    function updatePhoto(){ 
        photoFront = $("#front").attr("src");
        photoLeft = $("#left").attr("src");
        photoRight = $("#right").attr("src");
        photoHidden = $("#hidden").attr("src");
    }


    // ao clicar na foto, exibe a mesma em destaque
    $("#left").click(function(){
        $("#front").attr("src", photoLeft);
        $("#left").attr("src", photoHidden);
        $("#right").attr("src", photoFront);
        $("#hidden").attr("src", photoRight);

        updatePhoto();
    })

    function nextPhoto(){
        $("#front").attr("src", photoRight);
        $("#left").attr("src", photoFront);
        $("#right").attr("src", photoHidden);
        $("#hidden").attr("src", photoLeft);

        updatePhoto();
    }

    $("#right").click(function(){
        nextPhoto();
    })

    // passa as fotos automaticamente a cada 5 segundos
    setInterval(nextPhoto, 5000);
})
document.addEventListener("DOMContentLoaded", function() {
    
    
    var imagenes = document.querySelectorAll(".carousel-img");
    var indiceActual = 0;
    var tiempoTransicion = 3000; 

    function cambiarImagen() {
        
        imagenes[indiceActual].classList.remove("active");

        
        indiceActual++;

        
        if (indiceActual >= imagenes.length) {
            indiceActual = 0;
        }

        
        imagenes[indiceActual].classList.add("active");
    }

    
    setInterval(cambiarImagen, tiempoTransicion);

});
document.addEventListener("DOMContentLoaded", function() {
    
    var btnHamburguesa = document.querySelector("#menu-toggle");
    var menuNav = document.querySelector("#menu-nav");

    if (btnHamburguesa && menuNav) {
        btnHamburguesa.addEventListener("click", function() {
            // Alterna la clase 'is-abierto' en el menú y 'is-activo' en el botón (para animar la X)
            menuNav.classList.toggle("is-abierto");
            this.classList.toggle("is-activo");
        });
    }

});
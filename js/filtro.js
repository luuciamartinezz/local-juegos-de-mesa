document.addEventListener("DOMContentLoaded", function() {
    var filterButtons = document.querySelectorAll(".filter-btn");
    var gameCards = document.querySelectorAll(".game-card");

    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Eliminar la clase active de todos los botones
            filterButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            // Añadir la clase active al botón pulsado
            button.classList.add("active");

            var filter = button.getAttribute("data-filter");

            gameCards.forEach(function(card) {
                var category = card.getAttribute("data-categoria");
                
                if (filter === "todos" || category === filter) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
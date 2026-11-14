AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    var filterButtons = document.querySelectorAll(".filter-btn");
    var gameCards = document.querySelectorAll(".game-card");

    for (var i = 0; i < filterButtons.length; i++) {
        
        filterButtons[i].addEventListener("click", function() {
            
            
            for (var j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove("active");
            }

            
            this.classList.add("active");

            
            var filter = this.getAttribute("data-filter");

            
            for (var k = 0; k < gameCards.length; k++) {
                var category = gameCards[k].getAttribute("data-categoria");

                if (filter === "todos" || category === filter) {
                    gameCards[k].style.display = "flex";
                } else {
                    gameCards[k].style.display = "none";
                }
            }
        });
    }
});

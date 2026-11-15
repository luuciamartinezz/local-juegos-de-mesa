document.addEventListener("DOMContentLoaded", function() {
    
    
    var botonesReservar = document.querySelectorAll(".btn-reservar");
    var modalReserva = document.querySelector("#modal-reserva");
    var btnCerrarReserva = document.querySelector("#modal-cerrar");

    for (var i = 0; i < botonesReservar.length; i++) {
        botonesReservar[i].addEventListener("click", function() {
            if (modalReserva) {
                modalReserva.classList.add("is-abierta");
            }
        });
    }

    function cerrarModalReserva() {
        if (modalReserva) {
            modalReserva.classList.remove("is-abierta");
        }
    }

    if (btnCerrarReserva) {
        btnCerrarReserva.addEventListener("click", cerrarModalReserva);
    }

    if (modalReserva) {
        modalReserva.addEventListener("click", function(event) {
            if (event.target === modalReserva) {
                cerrarModalReserva();
            }
        });
    }


    
    var flechas = document.querySelectorAll(".cal-flecha");
    var textoMes = document.querySelector(".cal-mes");
    
    var meses = [
        "Enero 2026", "Febrero 2026", "Marzo 2026", "Abril 2026", 
        "Mayo 2026", "Junio 2026", "Julio 2026", "Agosto 2026", 
        "Septiembre 2026", "Octubre 2026", "Noviembre 2026", "Diciembre 2026"
    ];
    var indiceMesActual = 10; // Noviembre 2026

    
    if (flechas.length >= 2 && textoMes) {
        var btnMesAnterior = flechas[0];
        var btnMesSiguiente = flechas[1];

        btnMesSiguiente.addEventListener("click", function() {
            indiceMesActual++;
            if (indiceMesActual >= meses.length) {
                indiceMesActual = 0;
            }
            textoMes.textContent = meses[indiceMesActual];
        });

        btnMesAnterior.addEventListener("click", function() {
            indiceMesActual--;
            if (indiceMesActual < 0) {
                indiceMesActual = meses.length - 1;
            }
            textoMes.textContent = meses[indiceMesActual];
        });
    } else {
        console.log("Aviso: No se han encontrado las flechas del calendario en el HTML.");
    }

    
    var diasCalendario = document.querySelectorAll(".calendario-grid-dias span");

    for (var k = 0; k < diasCalendario.length; k++) {
        
        if (k >= 7) {
            diasCalendario[k].addEventListener("click", function() {
                if (this.textContent.trim() !== "") {
                    
                    for (var j = 7; j < diasCalendario.length; j++) {
                        diasCalendario[j].classList.remove("dia-seleccionado");
                    }
                    
                    this.classList.add("dia-seleccionado");
                }
            });
        }
    }

});
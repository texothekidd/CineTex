document.addEventListener("DOMContentLoaded", () => {
    const movieCards = document.querySelectorAll(".movie-card img");
    const categoryButtons = document.querySelectorAll(".category-button");
    const mainContent = document.getElementById("mainContent");
    const videoPlayerContainer = document.getElementById("videoPlayerContainer");
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");
    const closeVideoPlayer = document.getElementById("closeVideoPlayer");
    const searchInput = document.getElementById("searchInput");
    const movieCardsContainers = document.querySelectorAll(".movie-card");  // Para los contenedores de las películas
    
    

     // Función para filtrar las películas basadas en la búsqueda
     const filterMovies = () => {
        const searchTerm = searchInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas

        // Recorrer todas las tarjetas de películas
        movieCardsContainers.forEach(card => {
            const movieTitle = card.getAttribute("data-title").toLowerCase(); // Obtener el título de la película

            // Si el título de la película contiene el término de búsqueda, mostrarla, de lo contrario, ocultarla
            if (movieTitle.includes(searchTerm)) {
                card.style.display = "block"; // Mostrar la tarjeta
            } else {
                card.style.display = "none"; // Ocultar la tarjeta
            }
        });
    };

    // Escuchar el evento de entrada (cuando el usuario escribe algo en el campo de búsqueda)
    searchInput.addEventListener("input", filterMovies);

    // Si deseas que también funcione al presionar Enter, puedes agregar este manejador:
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            filterMovies(); // Realiza la búsqueda al presionar Enter
        }
    });





    // Abrir el reproductor al hacer clic en una película
    movieCards.forEach(card => {
        card.addEventListener("click", () => {
            // Cuando se hace clic en el botón "Películas"
    

            const videoUrl = card.getAttribute("data-video");
            videoSource.src = videoUrl;
            videoPlayer.load();
            videoPlayerContainer.style.display = "flex";
            mainContent.style.display = "none";
        });
    });
        
    // Cerrar el reproductor
    closeVideoPlayer.addEventListener("click", () => {
        videoPlayer.pause();
        videoPlayerContainer.style.display = "none";
        mainContent.style.display = "block";
    });
    // Filtrar películas por categoría
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            
            movieCards.forEach(card => {
                // Si el card tiene la categoría seleccionada, lo mostramos, si no, lo ocultamos
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


});
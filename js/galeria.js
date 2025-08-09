document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-galeria");

    fetch("../data/galeria.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar la galería");
            }
            return response.json();
        })
        .then(imagenes => {
            imagenes.forEach(img => {
                const figure = document.createElement("figure");
                const image = document.createElement("img");
                image.src = img.src;
                image.alt = img.alt;
                image.classList.add("fade-in");
                figure.appendChild(image);
                contenedor.appendChild(figure);
            });
        })
        .catch(error => {
            contenedor.innerHTML = `<p>Error al cargar la galería.</p>`;
            console.error("Error cargando la galería:", error);
        });
});

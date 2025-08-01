document.addEventListener("DOMContentLoaded", () => {
    const coordenadasEmpresa = [40.4168, -3.7038];
    const mapa = L.map('mapa').setView(coordenadasEmpresa, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapa);
    L.marker(coordenadasEmpresa)
        .addTo(mapa)
        .bindPopup("NeonCode<br>Calle Falsa 123, Madrid")
        .openPopup();
});
function iniciarMapa() {
    const empresa = { lat: 40.4168, lng: -3.703 };

    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 14,
        center: empresa
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const cliente = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                directionsService.route(
                    {
                        origin: cliente,
                        destination: empresa,
                        travelMode: google.maps.TravelMode.DRIVING
                    },
                    (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            directionsRenderer.setDirections(result);
                        } else {
                            alert("No se pudo calcular la ruta: " + status);
                        }
                    }
                );
            },
            () => {
                alert("No se pudo obtener tu ubicación.");
            }
        );
    } else {
        alert("Tu navegador no soporta geolocalización.");
    }
}

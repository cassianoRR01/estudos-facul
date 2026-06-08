navigator.geolocation.getCurrentPosition(
    async (posicao) => {

        let lat = posicao.coords.latitude;
        let lng = posicao.coords.longitude;

        /* Cria o mapa */
        let map = L.map("mapa").setView([lat, lng], 14);

        /* Camada do OpenStreetMap */
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution: "&copy; OpenStreetMap contributors"}).addTo(map);

        /* Marca a localização do usuário */
        L.marker([lat, lng]).addTo(map).bindPopup("Você está aqui!").openPopup();

        /* Consulta academias próximas */
        let query = `[out:json];
        (node["leisure"="fitness_centre"](around:5000,${lat},${lng});
          way["leisure"="fitness_centre"](around:5000,${lat},${lng}););
        out center;`;

        let url = "https://overpass-api.de/api/interpreter?data=" + encodeURIComponent(query);

        let resposta = await fetch(url);

        let dados = await resposta.json();

        /* Adiciona as academias no mapa */

        dados.elements.forEach(gym => {

            let latitude = gym.lat || gym.center.lat;
            let longitude = gym.lon || gym.center.lon;

            let nome = gym.tags.name || "Academia";

            L.marker([latitude, longitude]).addTo(map).bindPopup(nome);

        });

    },

    () => {
        alert("Permita o acesso à localização.");
    }
);
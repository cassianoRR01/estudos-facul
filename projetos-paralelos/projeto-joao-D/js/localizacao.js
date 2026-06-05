navigator.geolocation.getCurrentPosition(
    async (posicao) => {

        const lat = posicao.coords.latitude;
        const lng = posicao.coords.longitude;

        /* Cria o mapa */
        const map = L.map("mapa").setView([lat, lng], 14);

        /* Camada do OpenStreetMap */
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution: "&copy; OpenStreetMap contributors"}).addTo(map);

        /* Marcador do usuário */
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup("Você está aqui!")
            .openPopup();

        /* Consulta à Overpass API */
        const query = `[out:json];
        (
            node["leisure"="fitness_centre"](around:5000,${lat},${lng});
            way["leisure"="fitness_centre"](around:5000,${lat},${lng});

            node["amenity"="gym"](around:5000,${lat},${lng});
            way["amenity"="gym"](around:5000,${lat},${lng});

            node["sport"="fitness"](around:5000,${lat},${lng});
            way["sport"="fitness"](around:5000,${lat},${lng});
        );
        out center;
        `;

        let url = "https://overpass-api.de/api/interpreter?data=" +
            encodeURIComponent(query);

        try {

            const resposta = await fetch(url);

            if (!resposta.ok) {
                throw new Error(
                    `Erro HTTP: ${resposta.status}`
                );
            }

            const dados = await resposta.json();

            console.log(dados);

            if (dados.elements.length === 0) {
                console.log("Nenhuma academia encontrada.");
            }

            dados.elements.forEach(gym => {

                const latitude = gym.lat || gym.center?.lat;
                const longitude = gym.lon || gym.center?.lon;

                if (!latitude || !longitude) return;

                const nome =
                    gym.tags?.name ||
                    "Academia";

                L.marker([latitude, longitude])
                    .addTo(map)
                    .bindPopup(nome);

            });

        } catch (erro) {
            console.error("Erro ao consultar a Overpass API:");
            console.error(erro);
            alert("Não foi possível carregar as academias próximas.");
        }

    },

    (erro) => {
        console.error(erro);
        alert("Permita o acesso à localização.");
    }
);
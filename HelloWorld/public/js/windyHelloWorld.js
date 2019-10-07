const options = {
    // Required: API key
    key: 'BbkS6dQWhTHsFLRY1p7BetesvxvPk3MT', 

    // põe informações descritivas no consolo do navegador
    verbose: true,

    // Optional: coloca coordenadas iniciais no navegador
    lat: -20,
    lon: -50,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([-20, -50])
        .setContent('Hello World')
        .openOn(map);
});
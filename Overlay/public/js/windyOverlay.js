const options = {
    // Required: API key
    key: 'BbkS6dQWhTHsFLRY1p7BetesvxvPk3MT', 
    // Put additional console output
    //verbose: true,

    lat: -20,
    lon: -70,
    zoom: 5
};

// Initialize Windy API
windyInit(options, windyAPI => {
    
    const {store, broadcast, map} = windyAPI;

    const overlays = ['rain', 'wind', 'temp', 'clouds'];

    let i = 0;

    var info = setInterval(() => {

        i = (i === 3 ? clearInterval(info): i + 1);

        store.set('overlay', overlays[i]);

    }, 800);

    broadcast.on('paramsChanged', params => {
        console.log('Params changed broadcast: ', params);
    });

    broadcast.on('redrawFinished', params => {
        console.log('Map was rendered: ', params);
    });
});
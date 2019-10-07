
const options = {
    
    key: 'BbkS6dQWhTHsFLRY1p7BetesvxvPk3MT', 

    lat: 50.4,
    lon: 14.3,
    zoom: 6,

    timestamp: Date.now() + 3 * 24 * 60 * 1000,

    hourFormat: '12h',
};

windyInit(options, windyAPI => {

    //imprimindo o conteudo de windyAPI
    console.log(windyAPI);

    /*
        Todos os parametos são guardadows em 'store'. 
        'store' possui os métodos get e set para acessar os valores aramazenados 
        na windyAPI.
    */
    const store = windyAPI.store;

    /*
        Obtendo todos os valores de store 
    */
    console.log('parametros em store:');
    console.log(store.getAll());

    console.log('overlay');
    console.log(store.get('overlay'));

    console.log('availAcTimes');
    console.log(store.get('availAcTimes'));

    console.log('availLevels');
    console.log(store.get('availLevels'));

    console.log('metric_temp');
    console.log(store.get('metric_temp'));

    console.log('temp');
    console.log(store.get('temp'));

});

const options = {
    
    key: 'BbkS6dQWhTHsFLRY1p7BetesvxvPk3MT', 

    lat: 50.4,
    lon: 14.3,
    zoom: 6,

    timestamp: Date.now() + 12 * 24 * 60 * 60 * 1000,

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
    console.log(store);

    /*
        Obtem um array com os 'levels(niveis) com dados disponiveis.
    */
    const levels = store.getAllowed('availLevels');

    console.log(levels);

    let i = 0;
    /*
        Timer para mudar o valor 'level' a cada 1 segundo
    */
   
    setInterval(() => {
        i = i === levels.length - 1? 0 : i + 1;

        store.set('level', levels[i]);
    }, 1000);

    
    store.on('level', level => {
        console.log(`Level foi modificado: ${level}`);
    });

});
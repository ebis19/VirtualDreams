var rp = require('request-promise');
var options = {
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    json: true
};
rp(options)
    .then(function (personas) {
        console.log(personas);
    })
    .catch(function (err) {
        console.log('hubo un error con los resultados');
    });
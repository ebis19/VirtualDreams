
const express = require('express')
var rp = require('request-promise');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  const validacion = validate(req.body);
  if (validacion != 'OK') {
    res.status('400').send(validacion);// TODO cambiar a mensaje json
    return;
  }
  try {
    res.status('201').send();
    //sendData(req.body);
    console.log(req.body)
  } catch (error) {
    res.status('500').send();
  }
});

app.listen(port, () => {
  console.log(`Virtual Dreams listening at http://localhost:${port}`)
})



function validate(body) {
  const test = (elemento) => ['dni','nombre','apellido'].includes(elemento);
  if (body.dni === undefined || body.dni === '' || body.dni === null) {
    return 'El dni no fue definido'
  }
  if (String(body.dni).length > 10 || Number(body.dni) === null) {
    return 'El dni debe ser un  numero de menos de caracteres';
  }
  if (body.apellido === undefined || body.apellido === '' || body.apellido === null) {
    return 'El apellido no fue definido';
  }
  if (!Object.keys(body).every(test)) {
    return 'Solo ingresar Nombre, Dni, Apellido';
  }
  return 'OK';
}

function sendData(persona) {
  var options = {
    method: 'POST',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    json: true,
    body: {
      persona
    }
  };
  rp(options)
    .then(function (id) {
      console.log("Se envio el dato");
    })
    .catch(function (err) {
      console.log('hubo un error con los resultados');
    });

}


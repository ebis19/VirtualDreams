
const express = require('express')
const cors = require('cors');
const rp = require('request-promise');
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({msg:'Hello Virtual Dreams'})
})

app.post('/', function (req, res) {
  try {
    if (validate(req.body)!= 'OK') {
    res.status('400').json({msg: validacion});
    return;
    }
    res.status('201');
    sendData(req,res);
  }
  catch (error) {
    res.status('500').send();
  }
});

app.listen(port, () => {
  console.log(`Virtual Dreams listening at http://localhost:${port}`)
})

function validate(body) {
  const test = (elemento) => ['dni','nombre','apellido'].includes(elemento);
  if (body.dni === undefined || body.dni === null) {
    return 'El dni no fue definido'
  }
  if(typeof body.dni !== 'number'){
    return 'El dni debe ser un numero'
  }
  if (String(body.dni).length > 10) {
    return 'El dni debe ser un  numero de menos de caracteres';
  }
  if (body.apellido === undefined || body.apellido === '' || body.apellido === null) {
    return 'El apellido no fue definido';
  }
  if(typeof body.apellido !== 'string'){
    return 'El apellido debe ser un string'
  }
  if(body.nombre != undefined && typeof body.nombre !== 'string' || body.nombre === null) {
      return 'el nombre debe ser un string'
  }
  if (!Object.keys(body).every(test)) {
    return 'Solo ingresar nombre, dni, apellido';
  }
  return 'OK';
}

function sendData(req,res) {
  var options = {
    method: 'POST',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    json: true,
    body: req.body
  };
  rp(options).then(
    function (bodyResponse) {
      res.json(bodyResponse)
  }
  )
}
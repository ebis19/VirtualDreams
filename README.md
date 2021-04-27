# VirtualDreams

## Preguntas

1. ¿Qué es un servidor HTTP?
2. ¿Qué son los verbos HTTP? Mencionar los más conocidos
3. ¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?
4. ¿Qué es un queryString? (En el contexto de una url)
5. ¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
6. ¿Cómo se envía data en un Get y cómo en un POST?
7. ¿Qué verbo http utiliza el navegador cuando accedemos a una página?
8. Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
9. Explicar brevemente el estándar SOAP
10. Explicar brevemente el estándar REST Full
11. ¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?

## Respuestas

1. Un servidor http es un sofware encargado de gestionar las solicitudes en el protocolo http.
2. Los  verbos mas conocidos son get(obtener), put(actualizar),post(agregar),delete(eliminar).
3. El request en una comunicación de http es la solitud de informacion que se le hace al servidor http mientras que el response es la respuesta del mismo.
4. Es la parte de una URL que contiene los datos. Por ejemplo en la url <http://localhost/persona/dni=123456552&apellido>="ejemplo", la porcion dni=123456552&apellido="ejemplo" seria la queryString.
5. El responseCode son códigos que devuelve el servidor para indica como se  proceso la solicitud. Dependiendo el rango de de numeros que se encuentre tiene diferentes utilidades.
 En el rango entre 200 y 299 que indica que se ejecuto la respuesta satisfactoriamente.Ej 200 que informa que el request se ejecuto    correctamente. Y el 201 que informa que se guardo un nuevo dato.
 En el rango entre 400 y 499 que indican un error en el cliente. Como el clásico error 403 donde no encuentra la acción indicada .
 En el rango 500 y 599  indica  un  error un error en el servidor. como por ejemplo el codigo 500.
6. La forma que  se envia los datos en el get es a traves del la url.Como por ejemplo <http://localhost/persona/dni/12345678> .En un post se indican los datos en la solicitud. Normalmente se utilza get para solicitud de algun recurso  y el post para el envio de formulario.
7. El verbo utilizado es por el navegador es GET.
8. Las estructuras de datos xml y json son estandares para el intercambio de informacion entre applicaciones.
   El primero Extensible Markup Language funciona a travez de etiquetas es decir una manera similar a html.
  algunos  ejemplos de la misma seria

  ```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <persona>
      <dni> 1234567</dni>
      <apellido>Apellido </apellido>
      <nombre> Nombre </nombre>
  </persona>

  <?xml version="1.0" encoding="UTF-8" ?>
  <listadeautos>
    <auto>
      <patente> AAAAAAA 12345</patente>
      <marca>honda</apellido>
    </auto>
    <auto>
      <patente> BBBBBB 54321</patente>
      <marca>citroen</marca>
    </auto>
  </autos>
 ```

 La segunda json a diferencia de la primera se describe como un objeto de java script. Los mismos ejemplos escritos en json serian asi

 ```json
 {
   "dni":"123456"
   "apellido":"apellido"
   "nombre":"nombre"
 }
```

 ```json
 [{
   "Nombre":"AAAAAAA",
   "marca":"honda"
 },
 {
  "Nombre":"BBBBB",
  "marca":"54321"
 }]
 ```

9. El estandar soap define procesos para el intercambio de informacion en los protocolos http,smtp, a travez de estruras de datos xml.

10. El estandar rest o Representational state transfer se define como arquitectura al igual que la anterior donde indica cómo realizar el intercambio y manejo de datos a través de servicios. pero en este caso solo con el protocolo http. En este arquitectura se utiliza las diferentes verbos http, get(opbtener), put(actualizar),post(agregar),delete(eliminar) para las acciones. y los uri para identificar los recursos usando normalmente sustantivos.

11.  los headers es utilizado en request para brindar mas informacion como datos del navegador y sistema operativo con header User-Agent.Ej
User-Agent Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0.
el header Content-type es utilizado para indicar el mime type de los datos que se va enviar mejor dicho que tipo de recurso es ya sea texto plano(text/plain), un json(application/json; charset=utf-8), sonido (audio/mpeg),image, etc.


## Ejercicio 3


![ej3 punto 1](https://raw.githubusercontent.com/ebis19/VirtualDreams/main/ScreenShot/VirtualDream-postman-get.png)
![ej3 punto 2](https://raw.githubusercontent.com/ebis19/VirtualDreams/main/ScreenShot/VirtualDream-postman-post.png)
![ej3 punto 3](https://raw.githubusercontent.com/ebis19/VirtualDreams/main/ScreenShot/VirtualDream-postman-get-2.png)


Instalar dependencias

```bash
 npm install
```

## Ejercicio 4

 Iniciar script:

```bash
 nodejs mostrarPersonas.js
```

## Ejercicio 5

```bash
 npm start
```

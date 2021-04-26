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
2. Los  verbos mas conocidos son GET,POST,PUT,DELETE
3. El request en una comunicación de http es la solitud de informacion que se le hace al servidor http mientras que el response es la respuesta del mismo.
4. Es la parte de una URL que contiene los datos. Por ejemplo en la url <http://localhost/persona/dni=123456552&apellido>="ejemplo", la porcion dni=123456552&apellido="ejemplo" seria la queryString.
5. El responseCode son códigos que devuelve el servidor para indica como se  proceso la solicitud. Dependiendo el rango de de numeros que se encuentre tiene diferentes utilidades.
 En el rango entre 200 y 299 que indica que se ejecuto la respuesta satisfactoriamente.Ej 200 que informa que el request se ejecuto    correctamente. Y el 201 que informa que se guardo un nuevo dato.
 En el rango entre 400 y 499 que indican un error en el cliente. Como el clásico error 403 donde no encuentra la acción indicada .
 En el rango 500 y 599  indica  un  error un error en el servidor. como por ejemplo el codigo 500.
6. La forma que  se envia los datos en el get es a traves del la url.Como por ejemplo <http://localhost/persona/dni/12345678> .En un post se indican los datos en la solicitud. Por ejemplo en el siguiente json:
   
   ```json

  {
  'mail': 'ejemplo@gmail.com',
  'password' : '123456'
  }
  ```

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
   'dni':'123456'
   'apellido':'apellido'
   'nombre':'nombre'
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

9. 

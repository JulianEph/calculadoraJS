/* La etiqueta <script>
En HTML, el código JavaScript se inserta entre las etiquetas <script> y </script>.

Ejemplo: */

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

/* Funciones y eventos de JavaScript
Una función de JavaScript es un bloque de código JavaScript que se puede ejecutar cuando se "llama".

Por ejemplo, se puede llamar a una función cuando ocurre un evento, como cuando el usuario hace clic en un botón.

Aprenderá mucho más sobre funciones y eventos en capítulos posteriores.

JavaScript en <head> o <body>
Puede colocar cualquier cantidad de scripts en un documento HTML.

Los scripts se pueden colocar en la sección <body>, o en la <head> de una página HTML, o en ambas.

JavaScript en <head>
En este ejemplo, se coloca una función de JavaScript en la sección <head> de una página HTML.

La función se invoca (llama) cuando se hace clic en un botón: */

/* Ejemplo: 

<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html> */

/* -.---------------------------------------------------------------------------------- */


/* JavaScript en <cuerpo>
En este ejemplo, se coloca una función de JavaScript en la sección <cuerpo> de una página HTML.

La función se invoca (llama) cuando se hace clic en un botón: */

/* 
<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html> */ 

/* Colocar guiones en la parte inferior del elemento <body> mejora la velocidad de visualización, porque la interpretación de guiones ralentiza la visualización. */

/* -.---------------------------------------------------------------------------------- */

/* JavaScript externo
Los scripts también se pueden colocar en archivos externos:

Archivo externo: myScript.js */ 
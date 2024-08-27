/* JavaScript puede cambiar el contenido HTML
Uno de los muchos métodos HTML de JavaScript es getElementById().
/El siguiente ejemplo "encuentra" un elemento HTML (con id="demo") y cambia el contenido del elemento (innerHTML) */
document.getElementById("demo").innerHTML = "Hello JavaScript";

/*JavaScript acepta comillas simples y dobles:

Ejemplo: */

document.getElementById('demo').innerHTML = 'Hello JavaScript';

/* --------------------------------------------------------------------- */

/*JavaScript puede cambiar los valores de los atributos HTML
En este ejemplo, JavaScript cambia el valor del atributo src (fuente) de una etiqueta <img>: */

/* <!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html> */

/* -.---------------------------------------------------------------------------------- */

/* JavaScript puede cambiar los estilos HTML (CSS)
Cambiar el estilo de un elemento HTML es una variante de cambiar un atributo HTML:

Ejemplo: */

document.getElementById("demo").style.fontSize = "35px";

/* -.---------------------------------------------------------------------------------- */


/* JavaScript puede ocultar elementos HTML
Se pueden ocultar elementos HTML cambiando el estilo de visualización:

Ejemplo */

document.getElementById("demo").style.display = "none";

/* -.---------------------------------------------------------------------------------- */


/* JavaScript puede mostrar elementos HTML
También se pueden mostrar elementos HTML ocultos cambiando el estilo de visualización:

Ejemplo */

document.getElementById("demo").style.display = "block";

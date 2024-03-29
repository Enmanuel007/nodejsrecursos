'use strict';
var http = require ('http');
var url = require ('url');
var fs = require('fs');   //ARCHIVO DEL SISTEMA para lectura y escritura de archivo


var extensiones ={
    'html':'text/html',
    'css':'text/css',
    'jpg':'image/jpg',
    'ico':'image/x-icon',
    'mp3':'audio/mpeg3',
    'mp4':'video/mp4'

}
 function servidor(pedido, respuesta){

     var objetoUrl= url.parse(pedido.url);
     var camino = 'source'+objetoUrl.pathname;
     if(camino =='source/'){
     camino ='source/pagina.html';
     }
 

 fs.readFile(camino, (error, contenido) =>{
     if(error){
         respuesta.writeHead(500,{'Content-Type':'text/html'})
         respuesta.write('<h1>Error Interno en el Servidor</h1>'),
         respuesta.end();
     }
     else{
         var vec=camino.split('.');    //split parte el camino
         var extension=vec[vec.length-1];
         //localhost:3000/recursos/pagina.html  .html es extencion es pa posisón 1    y la psosión 0 es la ruta

         var extensionMime=extensiones[extension];
         respuesta.writeHead(200,{'Content-Type':extensionMime});
         respuesta.write(contenido);
         respuesta.end();
     }
 });

 }


 /*var dato="";
function servidor(solicitud, respuesta){
  fs.readFile('pagina.html', (error,texto)=>{
    var arreglo_parametros=[];
    if(solicitud.url.indexOf("?")>0){
      var datos_url=solicitud.url.split("?");
      arreglo_parametros=datos_url[1].split("&");
      for (var i = arreglo_parametros.length-1; i >=0; i--){
        var parametro=arreglo_parametros[i];
        var datos_parametro=parametro.split("=");

        dato+=datos_parametro[1];
      }
    }
    else {
      dato="";
    }
    console.log(datos_parametro);
    var textoHtml=texto.toString();
    textoHtml=textoHtml.replace("{variablecompra}",""+dato);
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write(textoHtml);
    respuesta.end();
  });
}*/

var servidor=http.createServer(servidor); 
servidor.listen(3000,'localhost',()=>{
console.log("Servidor ejecutandose en el puerto 3000")
});

var txtCantidadPantalon = document.getElementById('txtCantidadPantalon');
var txtCantidadCamisa = document.getElementById('txtCantidadCamisa');
var txtCantidadCamiseta = document.getElementById('txtCantidadCamiseta');
var txtCantidadParagua = document.getElementById('txtCantidadParagua');
var txtCantidadTenis = document.getElementById('txtCantidadTenis');
var txtCantidadZapatos = document.getElementById('txtCantidadZapatos');
var txtCantidadCorrea = document.getElementById('txtCantidadCorrea');
var txtCantidadBufanda = document.getElementById('txtCantidadBufanda');
var txtCantidadMochila = document.getElementById('txtCantidadMochila');
var txtCantidadGafas = document.getElementById('txtCantidadGafas');
var txtCantidadChaqueta = document.getElementById('txtCantidadChaqueta');
var txtCantidadGorra = document.getElementById('txtCantidadGorra');





var btnCalcular = document.getElementById('btnCalcular');
var resultado = document.getElementById('resultado');


btnCalcular.addEventListener("click",calcularPrecio);

function calcularPrecio()
{
var cantidadPantalon=parseInt(txtCantidadPantalon.value);
var cantidadCamisa=parseInt(txtCantidadCamisa.value);
var cantidadCamiseta=parseInt(txtCantidadCamiseta.value);
var cantidadParagua=parseInt(txtCantidadParagua.value);
var cantidadTenis=parseInt(txtCantidadTenis.value);
var cantidadZapatos=parseInt(txtCantidadZapatos.value);
var cantidadCorrea=parseInt(txtCantidadCorrea.value);
var cantidadBufanda=parseInt(txtCantidadBufanda.value);
var cantidadMochila=parseInt(txtCantidadMochila.value);
var cantidadGafas=parseInt(txtCantidadGafas.value);
var cantidadChaqueta=parseInt(txtCantidadChaqueta.value);
var cantidadGorra=parseInt(txtCantidadGorra.value)



var total = (cantidadPantalon>=10?cantidadPantalon*80000*-0.1+cantidadPantalon*80000:cantidadPantalon*80000) +
(cantidadCamisa>=10?cantidadCamisa*30000*-0.1+cantidadCamisa*30000:cantidadCamisa*30000)+
(cantidadCamiseta>=10?cantidadCamiseta*20000*-0.1+cantidadCamiseta*20000:cantidadCamiseta*20000) +
(cantidadParagua>=10?cantidadParagua*25000*-0.1+cantidadParagua*25000:cantidadParagua*25000) + 
(cantidadChaqueta>=10?cantidadChaqueta*80000*-0.1+cantidadChaqueta*80000:cantidadChaqueta*80000) +
(cantidadTenis>=10?cantidadTenis*70000*-0.1+cantidadTenis*70000:cantidadTenis*70000) +
(cantidadZapatos>=10?cantidadZapatos*50000*-0.1+cantidadZapatos*50000:cantidadZapatos*50000) +
(cantidadCorrea>=10?cantidadCorrea*15000*-0.1+cantidadCorrea*15000:cantidadCorrea*15000) + 
(cantidadBufanda>=10?cantidadBufanda*35000*-0.1+cantidadBufanda*35000:cantidadBufanda*35000)+
(cantidadMochila>=10?cantidadMochila*70000*-0.1+cantidadMochila*70000:cantidadMochila*70000)+
(cantidadGafas>=10?cantidadGafas*10000*-0.1+cantidadGafas*10000:cantidadGafas*10000)+
(cantidadGorra>=10?cantidadGorra*25000*-0.1+cantidadGorra*25000:cantidadGorra*25000);



resultado.innerHTML = "El resultado de la compra es:"+total;


//document.write("Total de la compra es:"+total);

}



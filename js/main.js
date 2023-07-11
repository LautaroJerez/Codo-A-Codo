

function ejecutarFunciones(event) {
  event.preventDefault();
  var form = document.querySelector('form');
  var isValid = validar(form);

  if (!isValid) {
    return;
  }

  resumen();
}


function validar(form) {
  var nombre = document.getElementById('nombre').value.trim();
  var apellido = document.getElementById('apellido').value.trim();
  var correo = document.getElementById('correo').value.trim();

  if (nombre.length === 0) {
    alert("El nombre es un campo obligatorio");
    console.log("Error nombre");
    return false;
  }

  if (apellido.length === 0) {
    alert("El apellido es un campo obligatorio");
    console.log("Error apellido");
    return false;
  }

  var controlEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!controlEmail.test(correo)) {
    alert("Dirección de correo inválida");
    console.log("Error correo");
    return false;
  }

  return true;
}

const cantidadEntrada = document.getElementById ('cantidadEntrada')

const botonCalcular = document.getElementById ('botonCalcular')

const categoria = document.getElementById ('inputState')

const totalCompra= document.getElementById ('totalCompra')


function resumen(){
console.log(categoria.value)
console.log(cantidadEntrada.value)


switch (categoria.value) {
  case 'Trainee':
    var cantidad = parseFloat(document.getElementById('cantidadEntrada').value);
    descuento = 200 * cantidad  * 0.5;
    break;
  case 'Junior':
    var cantidad = parseFloat(document.getElementById('cantidadEntrada').value);
    descuento = 200 * cantidad * 0.15;
    break;
  case 'Estudiante':
    var cantidad = parseFloat(document.getElementById('cantidadEntrada').value);
    descuento = 200 * cantidad * 0.80;
    break;
  default:
  
}

totalCompra.innerHTML= cantidad * 200 - descuento;

}




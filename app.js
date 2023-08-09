const input = document.getElementById('input');
const boton = document.getElementById('boton');
const botonesCheck = document.querySelectorAll('.icono-check');
const botonesEliminar = document.querySelectorAll('.fa-trash-can');
const elementosDeLista = document.querySelectorAll('.elemento');

function agregarTarea() {
  if (input.value) {
    //Crear tarea
    let tareaNueva = document.createElement('li');
    tareaNueva.classList.add('elemento');
    //Texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    texto.classList.add('tarea');
    //Crear y agregar contenedor de iconos
    let botones = document.createElement('div');
    botones.classList.add('botones');
    let iconoCheck = document.createElement('img');
    iconoCheck.classList.add('icono-check');
    iconoCheck.src = 'images/tick-verde.png';
    iconoCheck.alt = 'Icono check-tarea';
    //iconoCheck.setAttribute(src,'images/tick-verde.png');
    let iconoBasura = document.createElement('i');
    iconoBasura.classList.add('fa-solid');
    iconoBasura.classList.add('fa-trash-can');
    
    botones.appendChild(iconoCheck);
    botones.appendChild(iconoBasura);
    
    tareaNueva.appendChild(texto);
    tareaNueva.appendChild(botones);

    lista.appendChild(tareaNueva);
  }
}

function tareaCompletada(e) {
  const botonCheck = e.target;
  botonCheck.parentNode.parentNode.classList.toggle('tarea-completada');
}

function eliminarTarea(e) {
  const tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener('click', function(e) {
  agregarTarea(e);
  input.value='';
});

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    agregarTarea(e);
    input.value='';
  } 
});

const lista = document.getElementById('lista');

lista.addEventListener('click', function(e) {
  if (e.target.classList.contains('icono-check')) {
    tareaCompletada(e);
  } else if (e.target.classList.contains('fa-trash-can')) {
    eliminarTarea(e);
  }
});

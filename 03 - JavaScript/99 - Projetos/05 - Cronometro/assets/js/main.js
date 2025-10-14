const tempo = document.querySelector('.tempo');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let intervalo = null;

function mostrarHora() {
  const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const s = String(segundos % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

iniciar.addEventListener('click', function () {
  if (iniciar.textContent === 'Iniciar' || iniciar.textContent === 'Continuar') {
    // Inicia ou continua
    intervalo = setInterval(function () {
      segundos++;
      tempo.textContent = mostrarHora();
    }, 1000);
    tempo.classList.remove('red');
    iniciar.textContent = 'Parar';
  } else {
    // Pausa
    clearInterval(intervalo);
    intervalo = null;
    tempo.classList.add('red');
    iniciar.textContent = 'Continuar';
  }
});

zerar.addEventListener('click', function () {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  tempo.textContent = '00:00:00';
  tempo.classList.remove('red');
  iniciar.textContent = 'Iniciar';
});
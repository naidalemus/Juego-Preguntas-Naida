
function validarpasswords() {
    var valorCampo = document.getElementById('pint').value;

    if (valorCampo === 'redireccionar') {
      window.location.href = 'nuevaPagina.html';
    } else {
      alert('El valor no cumple con la condición para la redirección.');
    }
  }


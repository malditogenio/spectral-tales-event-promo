$(document).ready(function () {
  // Cuando se hace clic en el botón para abrir el primer modal
  $('#btn-modal-uno').on('click', function () {
      // Abre el primer modal
      var modalUno = new bootstrap.Modal(document.getElementById('modal-uno'));
      modalUno.show();
  });

  // Cuando se hace clic en el botón para abrir el segundo modal
  $('#btn-modal-dos').on('click', function () {
      // Abre el segundo modal
      var modalDos = new bootstrap.Modal(document.getElementById('modal-dos'));
      modalDos.show();
  });
});

// Función para determinar la URL adecuada para form-modal1
function getActionUrlModal1(selectedQuantity) {
  switch (selectedQuantity) {
    case 1:
      return "https://mpago.li/2gX1GG9";
    case 2:
      return "https://mpago.li/2kXsBA3 ";
    case 3:
      return  "https://mpago.li/1SDG2tE";
    case 4:
      return "https://mpago.li/2m23fX6";
    default:
      return "";
  }
}

// Función para determinar la URL adecuada para form-modal2
function getActionUrlModal2(selectedQuantity) {
  switch (selectedQuantity) {
    case 1:
      return "https://mpago.li/2qu9PNx";
    case 2:
      return "https://mpago.li/13ECijK";
    case 3:
      return "https://mpago.li/2D9U4RW";
    case 4:
      return "https://mpago.li/2PWn52N";
    default:
      return "";
  }
}

// Agrega eventListener al formulario 1 para manejar el evento submit
document.getElementById("form-modal1").addEventListener("submit", function (e) {
  handleFormSubmit(e, getActionUrlModal1);
});

// Agrega eventListener al formulario 2 para manejar el evento submit
document.getElementById("form-modal2").addEventListener("submit", function (e) {
  handleFormSubmit(e, getActionUrlModal2);
});

function handleFormSubmit(e, getActionUrlFunction) {
  const form = e.target;
  const selectedQuantity = parseInt(form.querySelector('input[type="radio"][name="quantity"]:checked').value);
  const actionUrl = getActionUrlFunction(selectedQuantity);

  if (actionUrl) {
    window.location.href = actionUrl;
  } else {
    // Puedes mostrar un mensaje de error o simplemente no hacer nada
  }

  // Detiene la propagación y previene la acción predeterminada del evento submit
  e.stopPropagation();
  e.preventDefault();
}

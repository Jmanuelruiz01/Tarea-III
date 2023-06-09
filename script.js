function calcularInteres() {
  const cliente = document.getElementById('cliente').value;
  const montoEstándar = parseFloat(document.getElementById('monto').value);
  const interesAnual = montoEstándar * 12 * 0.0125;

  document.getElementById('interesAnual').textContent = interesAnual.toFixed(2);
}

window.addEventListener('DOMContentLoaded', function() {
  const mesesDiv = document.getElementById('meses');
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  meses.forEach(function(mes) {
    const label = document.createElement('label');
    label.textContent = mes;
    const input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.step = '0.01';
    input.value = '250.00';
    label.appendChild(input);
    mesesDiv.appendChild(label);
  });
});

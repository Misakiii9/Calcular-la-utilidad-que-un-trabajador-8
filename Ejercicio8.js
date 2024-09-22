function calcularUtilidad() {
   
    let salarioMensual = parseFloat(document.getElementById('salarioMensual').value);
    let antiguedad = parseInt(document.getElementById('antiguedad').value);
    
   
    if (isNaN(salarioMensual) || isNaN(antiguedad) || salarioMensual < 0 || antiguedad < 0) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa valores válidos para salario y antigüedad.";
        return;
    }

    let porcentajeUtilidad = 0;

   
    if (antiguedad < 1) {
        porcentajeUtilidad = 0.05; // 5%
    } else if (antiguedad < 2) {
        porcentajeUtilidad = 0.07; // 7%
    } else if (antiguedad < 5) {
        porcentajeUtilidad = 0.10; // 10%
    } else if (antiguedad < 10) {
        porcentajeUtilidad = 0.15; // 15%
    } else {
        porcentajeUtilidad = 0.20; // 20%
    }

    let utilidad = salarioMensual * porcentajeUtilidad;

    document.getElementById('resultado').innerHTML = `
        <p>Utilidad a recibir: $${utilidad.toFixed(2)}</p>
    `;
}
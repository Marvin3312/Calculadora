const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
        } else if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error¡") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
        } else if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error¡";
            }
        } else if (boton.id === "factorial") {
            const numero = parseFloat(pantalla.textContent);
            if (Number.isInteger(numero) && numero >= 0) {
                pantalla.textContent = calcularFactorial(numero);
            } else {
                pantalla.textContent = "Error¡";
            }
        } else {
            if (pantalla.textContent === "0" || pantalla.textContent === "Error¡") {
                pantalla.textContent = botonApretado;
            } else {
                pantalla.textContent += botonApretado;
            }
        }
    });
});

// Función para calcular el factorial
function calcularFactorial(n) {
    if (n === 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}







Regenerado


function agregarFila() {
    const tabla = document.getElementById('miTabla');
    const newRow = tabla.insertRow(tabla.rows.length - 1); // Insertar antes de la última fila (fila de botón).

    for (let i = 0; i < 6; i++) {
        const cell = newRow.insertCell(i);
        const input = document.createElement('input');
        input.type = 'text';
        cell.appendChild(input);
    }
}
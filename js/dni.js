
function verificarDni() {
    const dniInput = document.getElementById("dni").value.toUpperCase().trim();
    const resultado = document.getElementById("resultadoDni");

    // Comprobar formato:
    // - DNI: 8 números + 1 letra
    // - NIE: X/Y/Z + 7 números + 1 letra
    const dniRegex = /^\d{8}[A-Z]$/;
    const nieRegex = /^[XYZ]\d{7}[A-Z]$/;

    let numeros, letra, tipo;
    if (dniRegex.test(dniInput)) {
        // Es un DNI
        numeros = dniInput.substr(0, 8);
        letra = dniInput.charAt(8);
        tipo = "DNI";
    } else if (nieRegex.test(dniInput)) {
        // Es un NIE
        // NIE puede empezar por X, Y o Z:
        // X = 0, Y = 1, Z = 2
        let nieInicial = dniInput.charAt(0);
        let nieNumeros = dniInput.substr(1, 7);
        // Convertimos la letra inicial a número según la norma
        numeros = (
            nieInicial === "X" ? "0" :
            nieInicial === "Y" ? "1" :
            nieInicial === "Z" ? "2" : ""
        ) + nieNumeros;
        letra = dniInput.charAt(8);
        tipo = "NIE";
    } else {
        resultado.textContent = "Formato incorrecto. Debe ser DNI (8 números y letra) o NIE (X/Y/Z, 7 números y letra).";
        resultado.style.color = "#ef4444";
        return;
    }

    const letrasArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
        'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    const numDni = parseInt(numeros, 10);
    const letraCorrecta = letrasArray[numDni % 23];

    if (letra === letraCorrecta) {
        resultado.textContent = `${tipo} válido. La letra ${letra} es correcta.`;
        resultado.style.color = "#7CFC98"; // Verde claro
    } else {
        resultado.textContent = `${tipo} inválido. La letra correcta debería ser ${letraCorrecta}.`;
        resultado.style.color = "#ef4444";
    }
}

    //La expresión const dniRegex = /^\d{8}[A-Z]$/; es una expresión regular (regex) que se usa para validar un formato específico, en este caso, el formato típico del DNI español.
//^ indica el inicio de la cadena.
//\d{8} significa exactamente 8 dígitos numéricos (del 0 al 9).
//[A-Z] significa una letra mayúscula del alfabeto inglés (de la A a la Z).
//$ indica el final de la cadena.
//Entonces, esta regex valida que una cadena sea:
//Ocho dígitos seguidos,
//Seguidos por una única letra mayúscula,
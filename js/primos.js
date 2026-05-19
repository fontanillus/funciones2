function esPrimo(num) {
	if (num <= 1 || !Number.isInteger(num)) return false;
	if (num === 2) return true;
	if (num % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		if (num % i === 0) return false;
	}
	return true;
}

function buscarPrimo() {
	const input = document.getElementById("arrayInput").value;
	const resultado = document.getElementById("resultadoPrimo");
	let arr = input.split(',').map(x => parseInt(x.trim(), 10)).filter(x => !isNaN(x));
	let i = 0;
	let encontrado = false;
	let primo = null;
	if (arr.length === 0) {
		resultado.textContent = "No hay números en el array.";
		resultado.style.color = "#ef4444";
		return;
	}
	do {
		if (esPrimo(arr[i])) {
			encontrado = true;
			primo = arr[i];
		} else {
			i++;
		}
	} while (!encontrado && i < arr.length);
	if (encontrado) {
		resultado.textContent = `El primer número primo es: ${primo}`;
		resultado.style.color = "#7CFC98";
	} else {
		resultado.textContent = "No se encontró ningún número primo en el array.";
		resultado.style.color = "#ef4444";
	}
}


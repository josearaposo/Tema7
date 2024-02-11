
const ciudadInput = document.getElementById('busqueda');
const sugerencias = document.getElementById('sugerencias');

ciudadInput.addEventListener('input', () => {
    const texto = ciudadInput.value;
    obtenerSugerencias(texto);

    
});

function obtenerSugerencias(texto) {
    fetch(`ciudades.php?texto=${encodeURIComponent(texto)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener las sugerencias: ${response.status}`);
            }
            return response.json();
        })
        .then(ciudades => mostrarSugerencias(ciudades))
        .catch(error => console.error(error));
}

function mostrarSugerencias(ciudades) {
    sugerencias.innerHTML = '';
    ciudades.forEach(ciudad => {
        const li = document.createElement('li');
        li.textContent = ciudad;
        sugerencias.appendChild(li);
    });
}
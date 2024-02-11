function votar() {
    var opcion = document.querySelector('input[name="opcion"]:checked').value;

    fetch("encuesta_voto.php?voto=" + opcion, {
        method: "GET"
    })
    .then(response => {
        alert("Voto registrado. Resultados actuales: " + response.status);
        return response.text();
    })
    .then(data => {
        alert("Voto registrado. Resultados actuales: " + data);
    });
}

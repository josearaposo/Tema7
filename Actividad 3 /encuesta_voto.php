<?php

$ruta = 'resultado.txt';

if (isset($_GET['voto'])) {
    $eleccion = $_GET['voto'];

    // Leer el contenido actual del archivo
    $contenido = file_get_contents($ruta);
    $votos = explode('||', $contenido);

    // Actualizar los votos según la opción seleccionada
    switch ($eleccion) {
        case 'Madrid':
            echo "Madrid";
            $votos[0]++;
            break;
        case 'Girona':
            $votos[1]++;
            break;
        case 'Barcelona':
            $votos[2]++;
            break;
        case 'Cadiz':
            $votos[3]++;
            break;
    }


    $votosact = implode('||', $votos);

    file_put_contents($ruta, $votosact);

    // Calcular el porcentaje de votos para cada opción
    $total = array_sum($votos);
    $porcentajes = array_map(function ($voto) use ($total) {
        return round(($voto / $total) * 100, 2);
    }, $votos);

    // Devolver los porcentajes como respuesta a la solicitud AJAX
    echo "Opción 1: {$porcentajes[0]}% | Opción 2: {$porcentajes[1]}% | Opción 3: {$porcentajes[2]}% | Opción 4: {$porcentajes[3]}%";
} else {
    // Si no se proporcionó un voto, devolver un mensaje de error
    echo "Error: No se proporcionó un voto.";
}
?>

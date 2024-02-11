<?php

$ciudades = ['Madrid', 'Barcelona', 'Sevilla', 'Valencia', 'Bilbao', 'Málaga'];

$texto = $_GET['texto'];
$sugerencias = [];

foreach ($ciudades as $ciudad) {
    if (stripos($ciudad, $texto) === 0) {
        $sugerencias[] = $ciudad;
    }
}

echo json_encode($sugerencias);
?>

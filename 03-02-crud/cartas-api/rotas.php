<?php
require_once './cartas/ControleCarta.php';

header('Content-type: application/json');
$uri = explode('/', $_SERVER['REQUEST_URI']);
$mod = $uri[2];
$acao = $uri[3];
$classeControle = 'Controle' . ucfirst($mod);
if (method_exists($classeControle, $acao)) {
    $objControle = new $classeControle();
    $res = $objControle->$acao(); 
    echo json_encode($res);
} else {
    echo '{"status": "Rota inválida."}';
}

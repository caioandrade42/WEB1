<?php
require_once './ControleCartas.php';

$uri = explode('/', $_SERVER['REQUEST_URI']);

$classeControle = 'Controle' . ucfirst($uri[3]);
$metodo = $uri[4];
$saida['status'] = 'Sem acao';

if (class_exists($classeControle)) {
    $objetoControle = new $classeControle();
    if (method_exists($classeControle, $metodo)) {
        $saida = $objetoControle->$metodo();
    }
}


echo json_encode($saida);
/* $controle = new ControleCarta();
$controle->inserir();

var_dump($controle->listar()); */
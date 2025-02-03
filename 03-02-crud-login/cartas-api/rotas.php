<?php
require_once './controles/ControleCarta.php';
require_once './controles/ControleAutenticacao.php';

header('Content-type: application/json');

session_set_cookie_params(["samesite" => 'strict']);
session_start();

$uri = explode('/', $_SERVER['REQUEST_URI']);
$mod = $uri[2];
$acao = $uri[3];
$classeControle = 'Controle' . ucfirst($mod);

// Rever estrutura
if (
    strcmp($classeControle, 'ControleAutenticacao') === 0 &&
    method_exists($classeControle, $acao)
) {
    echo json_encode(ControleAutenticacao::$acao());
} else if (ControleAutenticacao::check()['logged']) {
    if (method_exists($classeControle, $acao)) {
        $objControle = new $classeControle();
        $res = $objControle->$acao();
        echo json_encode($res);
    } else {
        echo '{"status": "Rota inválida."}';
    }
} else {
    echo  json_encode(ControleAutenticacao::check());
}

session_write_close();
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Testes Classes</h1>
<?php
class Carta
{
    private $codigo;
    private $nome;

    public function __construct($codigo, $nome = null)
    {
        $this->codigo = $codigo;
        $this->nome = $nome;
    }

    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;
    }

    public function getCodigo()
    {
        return $this->codigo;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getNome()
    {
        return $this->nome;
    }
}

$obj = new Carta( 16451179604,'Gustavo Brendon');
var_dump($obj->getNome());
?>
</body>
</html>
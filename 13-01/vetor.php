<?php

    $vetor = array(1, 2, 3, 40, 534, 673);
    for($i = 0; $i < count($vetor); $i++){
        echo $vetor[$i] . "<br>";
    }
    echo 'com tipos diferentes<br>';
    $vetor = array(40.3453, 534, 673, 'kiko', 34.5);
    for($i = 0; $i < count($vetor); $i++){
        echo $vetor[$i] . "<br>";
    }

    echo 'Especificiando os indices<br>';
    $vetor = array(10=>13,15.345,64=>'Felipao',654.456,'Gerisvaldo');
    foreach($vetor as $indice => $valor){
        echo $indice . '=>' . $valor . "<br>";
    }


    echo 'Array com chave valor<br>';
    $vetor = [
        'nome' => 'gugu lendario',
        'idade' => 20,
        'sexo' => 'Hombre',
        'email' => 'gugu@gmail.com',
    ];
    foreach($vetor as $indice => $valor){
        echo $indice . '=>' . $valor . "<br>";
    }

    echo 'Vetor criado por demanda<br>';
    $vetor2['nome'] = 'Joaozin bala tronxa';
    $vetor2['anos'] = 234;
    foreach($vetor2 as $indice => $valor){
        echo $indice . '=>' . $valor . "<br>";
    }

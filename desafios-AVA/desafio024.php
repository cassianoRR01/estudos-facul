<?php

    $nome = trim($_POST["nome"] ?? '');
    $idade = trim($_POST["idade"] ?? '');
    $cidade = trim($_POST["cidade"] ?? '');

    $estados = $_POST["estados"] ?? [];

    $erros = [];

    if ($nome === '') {

        $erros[] = "Nome é obrigatório.";
    }

    if ($idade === '') {

        $erros[] = "Idade é obrigatória.";
    }

    if ($cidade === '') {

        $erros[] = "Cidade é obrigatória.";
    }

    if (!is_array($estados)) {

        $erros[] = "Estado inválido.";
    }

    if (!empty($erros)) {
         
        foreach ($erros as $erro) {

        echo $erro . "<br>";
        }

        exit;
    } 

    echo "Nome: " . $nome . "<br>";

    echo "Idade: " . $idade . "<br>";

    echo "Cidade: " . $cidade . "<br>";

    echo "Estados: ";

    foreach ($estados as $estado) {

        echo htmlspecialchars($estado) . "<br>";
    }
?>
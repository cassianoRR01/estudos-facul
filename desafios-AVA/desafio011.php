<?php

    // processa dados php

    session_start();

    $nome = $_POST["nome"];
    $email = $_POST["email"];

    $_SESSION["nome"] = $nome;
    $_SESSION["email"] = $email;

    header("Location: desafio011-2.php");
    exit;

?>
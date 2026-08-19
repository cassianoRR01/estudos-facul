<?php

    /* pagina php */

    session_start();

    if (!isset($_SESSION["nome"]) and !isset($_SESSION["email"])) {

        header("Location: desafio011.html");
        exit;

    }

    $nome = $_SESSION["nome"];
    $email = $_SESSION["email"];

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio011</title>
</head>
<body>
    
    <h1>Olá, <?php echo $nome; ?>!</h1>

    <p>Seu e-mail é: <?php echo $email; ?>.</p>

    <br><br>

    <a href="desafio011-3.php">

        <button>Sair</button>

    </a>

</body>
</html>
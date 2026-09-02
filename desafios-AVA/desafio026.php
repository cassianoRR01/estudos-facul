<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio 26</title>
</head>
<body>

    <?php

        $email = $_COOKIE['email'] ?? '';

    ?>

    <p>Preencha os dados a seguir para entrar no sistema.</p>

    <br><br>

    <form action="desafio026-2.php" method="post">

        <label for="idemail">E-mail: </label>
        <input type="text" name="email" id="idemail" value="<?php echo $email?>" autocomplete="email">

        <br>

        <label for="idsenha">Senha: </label>
        <input type="password" name="senha" id="idsenha">

        <br>

        <input type="checkbox" name="checkbox">
        <p>Lembrar e-mail</p>

        <br><br>

        <button type="submit">Enviar</button>
    </form>
    
</body>
</html>
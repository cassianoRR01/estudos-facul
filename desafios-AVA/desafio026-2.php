<?php
    $email = trim($_POST['email'] ?? '');
    $senha = trim($_POST['senha'] ?? '');


    if (isset($_POST['checkbox'])) {

        setcookie('email', $email, time() + 18000);

    } else {

        setcookie('email', '', time() - 1, '/');

    }
?>
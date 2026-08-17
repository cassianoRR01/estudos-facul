<?php
for ($numero = 2; $numero <= 100; $numero++) {

    $primo = true;
    
    for ($divisor = 2; $divisor < $numero; $divisor++) {

        if ($numero % $divisor == 0) {

            $primo = false;

            break;

        }
    }

    if ($primo) {

            echo $numero . " ";

    }
}
?> 

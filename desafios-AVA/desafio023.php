<?php
    function horas($data1, $data2) {

        $dataInicial = DateTime::createFromFormat('d/m/Y', $data1);
        $dataFinal = DateTime::createFromFormat('d/m/Y', $data2);

        $intervalo = new DateInterval('P1D');

        while ($dataInicial <= $dataFinal) {

            echo $dataInicial->format('d/m/Y') . '<br>';

            $dataInicial->add($intervalo);
        }

    }

    horas('21/08/2026', '29/08/2027');
?>
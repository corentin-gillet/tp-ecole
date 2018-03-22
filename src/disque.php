<?php

$free = disk_free_space("C:");
$total = disk_total_space("C:");

$i= 0;
while (($free/1024)and($total/1024) >1) {
    $free=$free/1024;
    $total = $total/1024;
    $i++;}
echo "Il reste ".$free ." Go / ". $total. " Go d'espace disponible sur le disque";

?>
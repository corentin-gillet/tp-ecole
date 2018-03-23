<?php

/*$array = ['1' => 'Test1', '2' => 'Test2'];

echo json_encode($array);*/

            // VERSION PHP
/*
    $version = 'Version PHP courante : ' . phpversion();
    echo json_encode($version);*/


            // DATE ACTUELLE

  /*  $date = new DateTime();
    echo $date->format('Y-m-d H:i');*/

  echo 'ceci est un dump'.var_dump($_GET['commande=']);



  $free = disk_free_space("C:");
  $total = disk_total_space("C:");

  $i= 0;
    while (($free/1024)and($total/1024) >1) {
     $free=$free/1024;
     $total = $total/1024;
     $i++;}
     echo "Il reste ".$free ." Go / ". $total. " Go d'espace disponible sur le disque";



?>
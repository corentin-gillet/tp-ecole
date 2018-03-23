<?php

$_SESSION['path'] = getcwd();

if(isset($_GET["commande"])) {
    $commande = $_GET['commande'];
}
else {
    $get = $_POST['commande'];
    $espace = ",";
    $tabCommande = explode($espace, $get);
    $commande = $tabCommande[0];
}



  if ($commande === "date")
  {
      include 'date.php';
  }
  elseif ($commande === "version")
  {
      include 'version.php';
  }
  elseif ($commande === "free")
  {
      include 'version.php';
  }
  elseif ($commande === "cd")
  {
      include 'cd.php';
  }
  elseif ($commande === "ls")
  {
      include 'ls.php';
  }
  elseif ($commande === "mkdir")
  {
      include 'mkdir.php';
  }
  else
  {
      echo 'Oups, cette commande n\'existe pas vous pouvez consulter la liste des commandes avec la commande help';
  }





?>
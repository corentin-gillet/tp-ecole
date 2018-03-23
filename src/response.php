<?php

  $commande = ($_GET['commande']);
 /* $espace = " ";
  $tabCommande = explode($espace, $get);
  $commande = $tabCommande[0];
 */

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
  else
  {
      echo 'Oups, cette commande n\'existe pas vous pouvez consulter la liste des commandes avec la commande help';
  }





?>
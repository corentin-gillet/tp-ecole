
<?php include 'template/home.html' ?>


<?php

$version = 'Version PHP courante : ' . phpversion();
echo json_encode(array("version" => $version));


$versions = "test";
echo json_encode($versions);

class Commande {

    const command = 'commande';

    function calcul()
    {
        if ($command = '=')
        {

        }

    }


}


?>
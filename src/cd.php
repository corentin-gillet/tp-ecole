<?php

$_SESSION['path'] = getcwd();

$path='"c:\wamp64\www\tp-ecole\"';

echo $_SESSION['path'];
chdir($_POST["path"]);
echo '<br/>';

echo getcwd();
?>
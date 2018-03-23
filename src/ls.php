<?php


$files = scandir($_SESSION['path']);

echo json_encode($files);

?>
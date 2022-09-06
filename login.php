<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "users";
$table = "login";

$con = new mysqli($host,$user,$pass,$db);

if (!$con) {
    echo "There are some problems with connceting to the database";
} 

?>
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


$uname = $_POST['uname'];
$pass = $_POST['pass'];

$sql = "SELECT * FROM $table WHERE Username = '$uname' AND Pass = '$pass' ";
$result = mysqli_query($con,$sql) or die(mysql_error());
$rows = mysqli_num_rows($result);

if($rows > 0){
    echo '<h2>Welcome</h2>';
    echo '<script> alert("LOGGED IN) </script>';
}
else{
    echo '<script> alert("Invald Credentials") </script>';
    header("Location: home.html");
}    

?>
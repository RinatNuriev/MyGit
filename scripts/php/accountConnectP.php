<?php
$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);

$mail = $_arr["mail"];
$name = $_arr["name"];
$nickname = $_arr["nickname"];

$db_host = 'localhost';
$db_name = 'my-home-jungle_db';
$db_user = 'rinat';
$db_pass = 'sweethome89';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
$mysqli->set_charset("utf8mb4");


$ckeck = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$mail'");

$mailCheck = $ckeck->fetch_assoc();

if ($mailCheck) {
    $result = $mysqli->query("UPDATE `users` SET `login`= '$nickname', `first_name` = '$name'  WHERE `email` = '$mail'");

    if ($result) {
        echo json_encode($result);
        exit();
    }
} else {
    $err = "something wrong";
    echo json_encode($mailCheck);
    exit();
}

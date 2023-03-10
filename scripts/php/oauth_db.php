<?php
$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);

$mail = $_arr["email"];
$acccess_token = $_arr["acccess_token"];
$expires_in = $_arr["expires_in"];
$oauth_provider = $_arr["oauth_provider"];
$name = $_arr["name"];

$mysql = new mysqli('localhost', 'rinat', 'sweethome89', 'my-home-jungle_db');

$ckeck = $mysql->query("SELECT * FROM `user_oauth_info` WHERE `email` = '$mail'");

$mailCheck = $ckeck->fetch_assoc();

if($mailCheck) {
    $err = "mail exist";
    echo json_encode($mailCheck);
    exit();
} else {
    $result = $mysql->query("INSERT INTO `user_oauth_info` (`oauth_provider`, `acccess_token`, `email`, `name`) VALUES ('$oauth_provider','$acccess_token','$mail', '$name')");
    if($result) {
        echo json_encode($result);
        exit();
    }
}



// if ($result) {
//     echo json_encode($result);
//     exit();
// } else {
//     $err = 'wrong';
//     echo json_encode($err);
//     exit();
// }

$mysql->close();
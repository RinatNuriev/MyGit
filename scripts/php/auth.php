<?php
$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);
$mail = $_arr["mail"];
$pass = $_arr["pass"];

$pass = md5($pass."protectedpass4325");

$mysql = new mysqli('localhost', 'rinat', 'sweethome89', 'my-home-jungle_db');

$result = $mysql->query("SELECT * FROM `users_test` WHERE `mail` = '$mail' AND `pass` = '$pass'");

$user = $result->fetch_assoc();

if($user == 0) {
    $err = "not found";
    echo json_encode($err);
    exit();
} else {
    setcookie('auth', $mail, time() + 3600, "/");
    $success = "success";
    echo json_encode($success);
    exit();
};

$mysql->close();

echo json_encode($user);
exit();

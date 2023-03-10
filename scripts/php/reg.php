<?php 

$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);
$mail = $_arr["mail"];
$pass = $_arr["pass"];

if(mb_strlen($pass) < 5 || mb_strlen($mail) > 90) {
    $error = "small pass";
    echo json_encode($error);
    exit();
};

$pass = md5($pass."protectedpass4325");


$mysql = new mysqli('localhost', 'rinat', 'sweethome89', 'my-home-jungle_db');

$ckeck = $mysql->query("SELECT * FROM `users_test` WHERE `mail` = '$mail'");

$mailCheck = $ckeck->fetch_assoc();

if($mailCheck) {
    $err = "mail exist";
    echo json_encode($err);
    exit();
} else {
    $result = $mysql->query("INSERT INTO `users_test` (`mail`, `pass`) VALUES ('$mail', '$pass')");
    if($result) {
        setcookie('auth', $mail, time() + 3600, '/');
        echo json_encode($result);
        exit();
    }
};


$mysql->close();

?>

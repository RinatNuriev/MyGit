<?php
$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);

$name = $_arr["name"];
$mail = $_arr["mail"];

$db_host = 'localhost';
$db_name = 'my-home-jungle_db';
$db_user = 'rinat';
$db_pass = 'sweethome89';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
$mysqli->set_charset("utf8mb4");



$check = $mysqli->query("SELECT * FROM `likes_plants_test` WHERE `email` = '$mail' AND `plant_name` = '$name'");

$likeCheck = $check->fetch_assoc();


if ($likeCheck) {
    $result = $mysqli->query("DELETE FROM `likes_plants_test` WHERE `email` = '$mail' AND `plant_name` = '$name'");
    
    if ($result) {
        echo json_encode("Лайк убран");
        exit();
    } 
} else {
    $result = $mysqli->query("INSERT INTO `likes_plants_test`(`email`,`plant_name`) VALUES ('$mail', '$name')");

    if ($result) {
        echo json_encode("Лайк добавлен") ;
        exit();
    }
}

?>
<?php
$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);
$type = $_arr["type"];


$db_host = 'localhost';
$db_name = 'my-home-jungle_db';
$db_user = 'rinat';
$db_pass = 'sweethome89';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
$mysqli->set_charset("utf8mb4");


if($type != 'Все' & $type != ''){
    $result = $mysqli->query("SELECT * FROM `message` WHERE `type` = '$type'");
    $array = [];
    
    if ($result) {
    
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
    
        $result = array(
            'info' => $array,
            'code' => 'ok'
        );
    
        echo json_encode($result);
    
    } else {
    
        $result = array(
            'code' => 'error',
            'info' => mysqli_error($conn)
        );
        echo json_encode($result);
      
    }
} else {
    $result = $mysqli->query('SELECT * FROM `message`');
    $array = [];
    
    if ($result) {
    
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
    
        $result = array(
            'info' => $array,
            'code' => 'ok'
        );
    
        echo json_encode($result);
    
    } else {
    
        $result = array(
            'code' => 'error',
            'info' => mysqli_error($conn)
        );
        echo json_encode($result);
      
    }
}



?>

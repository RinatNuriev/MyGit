<?php
// $mysql = new mysqli('localhost', 'root', null, 'mhj');

$db_host = 'localhost'; // хост
$db_name = 'mhj'; // бд
$db_user = 'root'; // пользователь бд
$db_pass = null; // пароль к бд
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // включаем сообщения об ошибках
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name); // коннект с сервером бд


$result = $mysqli->query('SELECT `mail` FROM `users` LIMIT 1');
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
    exit();
} else {

    $result = array(
        'code' => 'error',
        'info' => mysqli_error($conn)
    );
    echo json_encode($result);
    exit();
}
$mysql->close();

<?php
$db_host = 'localhost'; // хост
$db_name = 'my-home-jungle_db'; // бд
$db_user = 'rinat'; // пользователь бд
$db_pass = 'sweethome89'; // пароль к бд
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // включаем сообщения об ошибках
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name); // коннект с сервером бд
$mysqli->set_charset("utf8mb4"); // задаем кодировку


$result = $mysqli->query('SELECT * FROM `Plants`'); // запрос на выборку
$array = [];

if ($result) {

    while ($row = $result->fetch_assoc()) {
        $array[] = $row;
    }

    // Формируем массив для JSON ответа
    $result = array(
        'info' => $array,
        'code' => 'ok'
    );

    // Переводим массив в JSON
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
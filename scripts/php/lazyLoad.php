<?php

$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);
$count = $_arr["count"];

$mysql = new mysqli('localhost', 'rinat', 'sweethome89', 'my-home-jungle_db');

$result = $mysql->query("SELECT * FROM `Plants` ORDER BY `id` ASC LIMIT 17 OFFSET $count");
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
}

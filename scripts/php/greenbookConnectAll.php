<?php
$content = trim(file_get_contents("php://input"));

$_arr = json_decode($content, true);
$species = $_arr["species"];
$type = $_arr["type"];
$alpha = $_arr["alpha"];
$rate = $_arr["rating"];

$db_host = 'localhost';
$db_name = 'my-home-jungle_db';
$db_user = 'rinat';
$db_pass = 'sweethome89';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
$mysqli->set_charset("utf8mb4");

if($alpha != '') {
    if (($species == '' && $type == '') || ($species == 'Все' && $type == 'all_feat') || ($species == 'Все' && $type == '') || ($species == '' && $type == 'all_feat')) {
        $result = $mysqli->query('SELECT * FROM `Plants` ORDER BY `name` ASC LIMIT 16');
        $array = [];
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }

            $result = array(
                'info' => $array,
                'code' => 'ok',
            );
    
            echo json_encode($result);
        } else {
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
    if (($species == 'Все' || $species == '') && ($type != '' || $type != 'all_feat')) {
        $array = [];
        $result = $mysqli->query("SELECT * FROM `Plants` AS p JOIN `Desc_Plants` AS d ON p.id = d.id_plants WHERE `$type` = '1' ORDER BY `name` ASC LIMIT 16");
    
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }

            $result = array(
                'info' => $array,
                'code' => 'ok',
            );

            echo json_encode($result);
        } else {
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
    
    if (($species != 'Все' || $species != '') && ($type == '' || $type == 'all_feat')) {
        $array = [];
        $result = $mysqli->query("SELECT * FROM `Plants` AS p JOIN `Desc_Plants` AS d ON p.id = d.id_plants WHERE `type` = '$species' ORDER BY `name` ASC LIMIT 16");
    
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }
    
            $result = array(
                'info' => $array,
                'code' => 'ok',
            );
    
            echo json_encode($result);
        } else {
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
    
    if ($species != 'Все' && $type != 'all_feat') {
        $array = [];
        $result = $mysqli->query("SELECT * FROM `Plants` AS p JOIN `Desc_Plants` AS d ON p.id = d.id_plants WHERE `type` = '$species' AND `$type` = '1' ORDER BY `name` ASC LIMIT 16");
    
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }
    
            $result = array(
                'info' => $array,
                'code' => 'ok',
            );
    
            echo json_encode($result);
        } else {
    
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
} else {
    if (($species == '' && $type == '') || ($species == 'Все' && $type == 'all_feat') || ($species == 'Все' && $type == '') || ($species == '' && $type == 'all_feat')) {
        $result = $mysqli->query('SELECT * FROM `Plants` ORDER BY `id` ASC LIMIT 16');
        $array = [];
    
        if ($result) {
    
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }
            $result = array(
                'info' => $array,
                'code' => 'ok',
            );
    
            echo json_encode($result);
        } else {
    
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
    
    if (($species == 'Все' || $species == '') && ($type != '' || $type != 'all_feat')) {
        $array = [];
        $result = $mysqli->query("SELECT * FROM `Plants` AS p JOIN `Desc_Plants` AS d ON p.id = d.id_plants WHERE `$type` = '1' ORDER BY `id` ASC LIMIT 16");
    
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }
    
            $result = array(
                'info' => $array,
                'code' => 'ok',
            );

            echo json_encode($result);
        } else {
    
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
    
    if (($species != 'Все' || $species != '') && ($type == '' || $type == 'all_feat')) {
        $array = [];
    
        $result = $mysqli->query("SELECT * FROM `Plants` AS p JOIN `Desc_Plants` AS d ON p.id = d.id_plants WHERE `type` = '$species' ORDER BY `id` ASC LIMIT 16");
    
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }
    
            $result = array(
                'info' => $array,
                'code' => 'ok',
            );

            echo json_encode($result);
        } else {
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
    
    if ($species != 'Все' && $type != 'all_feat') {
        $array = [];
        $result = $mysqli->query("SELECT * FROM `Plants` AS p JOIN `Desc_Plants` AS d ON p.id = d.id_plants WHERE `type` = '$species' AND `$type` = '1' ORDER BY `id` ASC LIMIT 16");
    
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }

            $result = array(
                'info' => $array,
                'code' => 'ok',
            );
    
            echo json_encode($result);
        } else {
    
            $result = array(
                'code' => 'error',
                'info' => mysqli_error($conn)
            );
            echo json_encode($result);
        }
    
        exit();
    }
}



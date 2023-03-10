<?php
$db_host = 'localhost';
$db_name = 'my-home-jungle_db';
$db_user = 'rinat';
$db_pass = 'sweethome89';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
$mysqli->set_charset("utf8mb4");


// $array = [];

$mail = $_POST['mail'];
// var_dump($mail);
// echo json_encode($_FILES['img']['tmp_name']);

if(!empty($_FILES['img'])) {
    if (isset($_FILES['img'])) {
        $image = $_FILES['img'];
        // Получаем нужные элементы массива "image"
        $fileTmpName = $_FILES['img']['tmp_name'];
        $errorCode = $_FILES['img']['error'];
        // Проверим на ошибки
        if ($errorCode !== UPLOAD_ERR_OK || !is_uploaded_file($fileTmpName)) {
            // Массив с названиями ошибок
            $errorMessages = [
                UPLOAD_ERR_INI_SIZE   => 'Размер файла превысил значение upload_max_filesize в конфигурации PHP.',
                UPLOAD_ERR_FORM_SIZE  => 'Размер загружаемого файла превысил значение MAX_FILE_SIZE в HTML-форме.',
                UPLOAD_ERR_PARTIAL    => 'Загружаемый файл был получен только частично.',
                UPLOAD_ERR_NO_FILE    => 'Файл не был загружен.',
                UPLOAD_ERR_NO_TMP_DIR => 'Отсутствует временная папка.',
                UPLOAD_ERR_CANT_WRITE => 'Не удалось записать файл на диск.',
                UPLOAD_ERR_EXTENSION  => 'PHP-расширение остановило загрузку файла.',
            ];
            // Зададим неизвестную ошибку
            $unknownMessage = 'При загрузке файла произошла неизвестная ошибка.';
            // Если в массиве нет кода ошибки, скажем, что ошибка неизвестна
            $outputMessage = isset($errorMessages[$errorCode]) ? $errorMessages[$errorCode] : $unknownMessage;
            // Выведем название ошибки
            die($outputMessage);
        } else {
            // echo 'Ошибок нет.';
        }
    };
    // Создадим ресурс FileInfo
    $fi = finfo_open(FILEINFO_MIME_TYPE);
    
    // Получим MIME-тип
    $mime = (string) finfo_file($fi, $fileTmpName);
    
    // Проверим ключевое слово image (image/jpeg, image/png и т. д.)
    if (strpos($mime, 'image') === false) die('Можно загружать только изображения.');
    
    
    // Результат функции запишем в переменную
    $image = getimagesize($fileTmpName);
    
    // Зададим ограничения для картинок
    $limitBytes  = 1024 * 1024 * 5;
    $limitWidth  = 1280;
    $limitHeight = 768;
    
    // Проверим нужные параметры
    if (filesize($fileTmpName) > $limitBytes) die('Размер изображения не должен превышать 5 Мбайт.');
    if ($image[1] > $limitHeight)             die('Высота изображения не должна превышать 768 точек.');
    if ($image[0] > $limitWidth)              die('Ширина изображения не должна превышать 1280 точек.');
    
    // Сгенерируем новое имя файла на основе MD5-хеша
    $name = md5_file($fileTmpName);

     // Сгенерируем расширение файла на основе типа картинки
    $extension = image_type_to_extension($image[2]);
    
    // Сократим .jpeg до .jpg
    $format = str_replace('jpeg', 'jpg', $extension);
    
    $result = $mysqli->query("UPDATE `users` SET `profile_pic` = concat('https://my-home-jungle.ru/vue/upload/', '$name', '$format') WHERE `email` = '$mail'");
   
    // Переместим картинку с новым именем и расширением в папку /upload
    if (!move_uploaded_file($fileTmpName, __DIR__ . '/upload/' . $name . $format)) {
        die('При записи изображения на диск произошла ошибка.');
    }
    
    echo 'https://my-home-jungle.ru/vue/upload/' . $name . $format;
} else {
    echo 'Картинка пуста';
};



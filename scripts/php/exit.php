<?php
    setcookie('auth', $mail, time() - 3600, "/");
    header('Location: /');
?>
<?php
require_once __DIR__.'/../helpers/cors.php';
require_once __DIR__.'/../model/db.php';
require_once __DIR__.'/../model/User.php';

try {
    $UserModel = new User($db);
    $users = $UserModel->getAllUsers();
    sendJsonData(true, 201, $users, []);
} catch (Exception $e) {
    sendJsonData(false, 500, null, [
        'Internal server error please contact the administrator',
    ]);
}

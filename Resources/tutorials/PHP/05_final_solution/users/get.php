<?php
require_once __DIR__ . '/../helpers/cors.php';
require_once __DIR__ . '/../model/db.php';
require_once  __DIR__ .'/../model/User.php';

$id = $_GET['id'];

try {
    $UserModel = new User($db);
    $user = $UserModel->getUserById($id);
    // rest of code here
    if ($user) {
        sendJsonData(true, 201, $user, []);
    } else {
        sendJsonData(false, 401, null, [
            "User with $id wasn't found"
        ]);
    }
} catch (Exception $e) {
    sendJsonData(false, 500, null, [
        'Internal server error please contact the administrator',
    ]);
}

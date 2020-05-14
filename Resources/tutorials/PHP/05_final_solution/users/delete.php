<?php
require_once __DIR__ . '/../helpers/cors.php';
require_once __DIR__ . '/../model/db.php';
require_once __DIR__.'/../model/User.php';


$id = $_GET['id'];
header('Content-Type: application/json; charset=utf-8');


try {

    $UserModel = new User($db);
    $result = $UserModel->deleteUserById($id);
    // rest of code here
    if ($result !== false) {
        sendJsonData(true, 201, null, []);
    } else {
        sendJsonData(false, 404, null, [
            "User with $id wasn't found"
        ]);
    }

} catch (Exception $e) {
    sendJsonData(false, 500, null, [
        'Internal server error please contact the administrator',
    ]);
}


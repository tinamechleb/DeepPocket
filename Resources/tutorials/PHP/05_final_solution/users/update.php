<?php
require_once __DIR__.'/../helpers/cors.php';
require_once __DIR__.'/../model/db.php';
require_once __DIR__.'/../model/User.php';

$id = $_GET['id'];

try {

    $UserModel = new User($db);

    $user = $UserModel->getUserById($id);
    if ($user === false) {
        sendJsonData(false, 404, null, [
            'User not found'
        ]);
    }

    $name = $_GET['name'] ?: $user['name'];
    $email = $_GET['email'] ?: $user['email'];
    $password = $_GET['password'] ?: $user['password'];

    try {
        $result = $UserModel->updateUserById($id, $name, $email, $password);
        // rest of code here
        if ($result !== false) {
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
} catch (Exception $error) {
    sendJsonData(false, 500, null, [
        'Internal server error please contact the administrator',
    ]);
}

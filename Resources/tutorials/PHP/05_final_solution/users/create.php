<?php
require_once __DIR__.'/../helpers/cors.php';
require_once __DIR__.'/../model/db.php';
require_once __DIR__.'/../model/User.php';

$name = $_GET['name'];
$email = $_GET['email'];
$password = $_GET['password'];

if (!(isset($name, $email, $password))) {

    sendJsonData(false, 422, null, [
        'Each email, name and password needs to be provided'
    ]);

}

try {

    $UserModel = new User($db);

    $result = $UserModel->createUser($name, $email, $password);
    // rest of code here
    if ($result) {
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


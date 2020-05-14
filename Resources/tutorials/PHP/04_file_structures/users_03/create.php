<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

try {
    $db = new PDO('sqlite:'.__DIR__.'/../db.sqlite');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo json_encode(array(
        'success' => false,
        'status' => 500,
        'errors' => [
            'Internal server error please contact the administrator',
        ]
    ));
    die();
}


$name = $_GET['name'];
$email = $_GET['email'];
$password = $_GET['password'];

header('Content-Type: application/json; charset=utf-8');

if (!(isset($name, $email, $password))) {
    echo json_encode(
        array(
            'success' => false,
            'status' => 422,
            'data' => null,
            'errors' => [
                ''
            ]
        ));
    die();
}

try {
    $query = 'INSERT INTO users (name, email, password) VALUES ( ? , ?, ? )';

    $stmt = $db->prepare($query);
    $result = $stmt->execute([$name, $email, $password]);
    // rest of code here
    if ($result) {
        echo json_encode(array(
            'success' => true,
            'status' => 201,
            'data' => $user,
            'errors' => []
        ));
        die();

    } else {
        echo json_encode(array(
            'success' => false,
            'status' => 401,
            'data' => null,
            'errors' => [
                "User with $id wasn't found"
            ]
        ));
        die();
    }

} catch (Exception $e) {
    echo json_encode(array(
        'success' => false,
        'status' => 500,
        'errors' => [
            'Internal server error please contact the administrator',
        ]
    ));
    die();
}


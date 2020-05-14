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

header('Content-Type: application/json; charset=utf-8');


try {
    $query = 'SELECT * FROM users';

    $stmt = $db->query($query);
    $users = $stmt->fetchAll();
    // rest of code here

    echo json_encode(array(
        'success' => true,
        'status' => 201,
        'data' => $users,
        'errors' => []
    ));
    die();
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


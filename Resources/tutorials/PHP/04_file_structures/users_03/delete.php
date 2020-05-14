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
$id = $_GET['id'];
header('Content-Type: application/json; charset=utf-8');


try {
    $query = 'DELETE FROM users WHERE id = ?';

    $stmt = $db->prepare($query);
    $result = $stmt->execute([$id]);
    // rest of code here
    if ($result !== false) {
        echo json_encode(array(
            'success' => true,
            'status' => 201,
            'data' => null,
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


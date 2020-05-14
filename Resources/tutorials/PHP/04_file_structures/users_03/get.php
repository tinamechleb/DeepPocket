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

    $query = 'SELECT * FROM users WHERE id = ?';

    $stmt = $this->db->prepare($query);
    $stmt->execute([$id]);
    $user = $stmt->fetch();
    // rest of code here
    if ($user) {
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


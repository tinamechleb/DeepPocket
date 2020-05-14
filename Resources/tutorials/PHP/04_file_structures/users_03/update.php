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
    $user_query = 'SELECT * FROM users WHERE id = ?';
    $user_stmt = $db->prepare($user_query);
    $user_stmt->execute([$id]);
    $user = $user_stmt->fetch();

    if ($user === false) {
        echo json_encode(array(
            'success' => false,
            'status' => 404,
            'data' => null,
            'errors' => [
                'User not found'
            ]
        ));
        die();
    }


    $name = $_GET['name'] ?: $user['name'];
    $email = $_GET['email'] ?: $user['email'];
    $password = $_GET['password'] ?: $user['password'];

    try {

        $query = 'UPDATE users SET name=?, email=?, password=? WHERE id=?';
        $stmt = $db->prepare($query);
        $result = $stmt->execute([$name, $email, $password, $id]);
        // rest of code here
        if ($result!== false) {
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


} catch (Exception $error) {
    echo json_encode(array(
        'success' => false,
        'status' => 500,
        'errors' => [
            'Internal server error please contact the administrator',
        ]
    ));
    die();
}

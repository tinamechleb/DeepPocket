<?php

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

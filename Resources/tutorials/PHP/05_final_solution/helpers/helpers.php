<?php

function sendJsonData($success, $status, $data, $errors = [])
{
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array(
        'success' => $success,
        'status' => $status,
        'data' => $data,
        'errors' => $errors,
    ));
    die();
}
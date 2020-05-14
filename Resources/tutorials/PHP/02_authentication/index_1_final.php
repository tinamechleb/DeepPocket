<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

// Add email and password here
$user_email = 'info@codi.tech';
$user_password = 'LiveLoveCodi';

$email = $_GET['email'];
$password = $_GET['password'];

if ($user_email === $email && $user_password === $password) {

    // if body

    $currencies = array(
        [
            'id' => 1,
            'country' => 'Lebanon',
            'symbol' => 'L.L.',
            'name' => 'Lebanese pound',
            'code' => 'LBP'
        ],
        [
            'id' => 2,
            'country' => 'USA',
            'symbol' => '$',
            'name' => 'US dollar',
            'code' => 'USD'
        ]
    );

    header('Content-Type: application/json; charset=utf-8');

    echo json_encode($currencies);

// end of if body

} else {

    header('Content-Type: application/json; charset=utf-8');

    echo json_encode(array(
        'success' => false,
        'status' => 401,
        'errors' => [
            'Wrong email or password'
        ]
    ));
}
die();
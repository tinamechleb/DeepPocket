
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

// Add email and password here

$email = $_GET['email'];
$password = $_GET['password'];

try {
    $db = new PDO('sqlite:'.__DIR__.'/db.sqlite');
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
try {
    $query = 'SELECT * FROM users WHERE email = ? AND password = ?';

    $stmt = $db->prepare($query);
    $stmt->execute([$email, $password]);
    $user = $stmt->fetch();
    // rest of code here
    if ($user) {

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
}  catch (Exception $e){
    echo json_encode(array(
        'success' => false,
        'status' => 500,
        'errors' => [
            'Internal server error please contact the administrator',
        ]
    ));
    die();
}

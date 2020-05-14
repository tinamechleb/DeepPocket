<?php
header('Access-Control-Allow-Origin: *'); // this will everyone to contact our backend
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS'); // This will only allow to contact us using the method available (GET, PUT, POST, DELETE and OPTIONS)
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
    // var_dump($currencies);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($currencies);
    die()
   
?> 
# Project initialisation

## Setting up files

1. Create an `index.php`
2. In the terminal and in `01_initialise` run the following command `npm init -y`
3. In `package.json` add the following under scripts
    ```json
    {
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
    // Add me here
    "start": "php -S localhost:8080"
    // end of add me
      },
    }
    ```
4. Don't forget the leading column
5. From the terminal run `npm run start`
6. Add the following code to `index.php`
    ```php
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
    ?>
    ```

7. After the `$currencies` declaration add a var_dump to show the data available in the array of currencies
8. On the browser open the following URL [http://localhost:8080](http://localhost:8080)

## Sending JSON Data

>> https://www.w3schools.com/js/js_json_php.asp

1. Comment out the `var_dump`.
2. Add `echo json_encode($currencies);`
3. By default PHP will send the data to the browser as text, but we want the browser to know that the data sent is a JSON data

    3.1 Before the json echo add the following code
        
    ```php
    header('Content-Type: application/json; charset=utf-8');
    ```
   This line of coe would tell the browser that you are sending a JSON data and that charset is `utf-8`
   
   3.2 On your book note add a todo to read the following link [Character encodings for beginners](https://www.w3.org/International/questions/qa-what-is-encoding.en)
   
4. After we output the JSON data with `echo json_encode(...)`, add `die()`. We need to tell the php programme to end his execution.


## Setting up the CORS

As starting with PHP scripting you will not need any library to mange cors.
That might changes when you start working with projects that implements `composer`

1. On the second line of your php Script add the following code
    ```php
   header('Access-Control-Allow-Origin: *'); // this will everyone to contact our backend
   header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS'); // This will only allow to contact us using the method available (GET, PUT, POST, DELETE and OPTIONS)
    ```


## So what we have done?

1. We have sent json data
2. We have enable cors
3. We have used `die()` to tell the php interpreter to end the execution of the scripts and send the data to the who requested the data

 
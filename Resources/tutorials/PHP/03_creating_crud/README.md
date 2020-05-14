# CREATING CRUD in PHP

For this crud we will not use authentication
The previous step solution is available under `02_index.php`

>> NOTICE :  Make sure you get the right path for the database file, the file is located under 03_creating_crud
## CRUD Documentations

GET : /users => Returns all the users info
GET : /users/get.php?id=?    => Return one user info
GET : /users/create.php      => Create one user
GET : /users/update.php?id=? => Update one user info
GET : /users/delete.php?id=? => Delete one user

1. From the terminal run npm start
2. Create a directories called `users`

## GET All users

1. Inside the `users` directory create a file called `index.php`
2. Connect to the DB, check the `02_authentication` to see how we have done the db connection
3. Create a variable called `$query` and assign the following to it `SELECT * FROM users`
4. Run the query `$stmt = $db->query($query)`
5. Use the `fetchAll` method - `$users = $stmt->fetchAll()`
6. Don't forget the try catch if an internal error happened
7. Don't forget to send json response if an internal server error happened
8. If no errors send the following:
   ```php
   echo json_encode(array(
       'success' => true,
       'status'  => 201,
       'data'    => $users,
       'errors' => []
    ));
   die();
   ```

>> Hint check https://phpdelusions.net/pdo_examples/select

## GET One user by id

1. Inside the `users` directory create a file called `get.php`
2. Connect to the DB, check the `02_authentication` to see how we have done the db connection
3. Create an `$id` variable containing the id sent using GET `$id = $_GET['id'];`
4. Create a variable called `$query` and assign the following to it `SELECT * FROM users WHERE id = ?`
5. Prepare the query `$stmt = $db->prepare($query)`
6. Run the query `$stmt->execute([$id])`
7. Use the `fetch` method - `$user = $stmt->fetch()`
8. Don't forget the try catch if an internal error happened
9. Don't forget to send json response if an internal server error happened
10. Don't forget to send json response if the user was not found (Check the 02_authentication)
11. If no errors send the following:
   ```php
   echo json_encode(array(
       'success' => true,
       'status'  => 201,
       'data'    => $user,
       'errors' => []
    ));
   die();
   ```
## Create One user

1. Inside the `users` directory create a file called `create.php`
2. Connect to the DB, check the `02_authentication` to see how we have done the db connection
3. Create an `$name` variable containing the name sent using GET method `$name = $_GET['name'];`
4. Create an `$email` variable containing the email sent using GET method
5. Create an `$password` variable containing the password sent using GET method
6. Create a variable called `$query` and assign the following to it `INSERT INTO users (name, email, password) VALUES ( ? , ?, ? )`
7. Prepare the query `$stmt = $db->prepare($query)`
8. Run the query `$result = $stmt->execute([$name, $email, $password])` in order
9. If `$result === true` => the query was successful otherwise the query had problems
10. Don't forget the try catch if an internal error happened
11. Don't forget to send json response if an internal server error happened
12. Don't forget to send json response with status 401 if the $name or $email or $password where not provided
13. Don't forget to send json response if the query was not successful
14. If no errors send the following:
       ```php
       echo json_encode(array(
           'success' => true,
           'status'  => 201,
           'errors' => []
        ));
       die();
       ```
15. Test the route with the following urls:
    1. [success] => http://localhost:8080/users/create.php?name=Laura&email=laura@codi.tech&password=LiveLoveCodi
    2. [failure] => http://localhost:8080/users/create.php?name=me&password=LiveLoveCodi
    2. [failure] => http://localhost:8080/users/create.php?name=me&email=test@gmail.com
    2. [failure] => http://localhost:8080/users/create.php
    
>> Hint: https://phpdelusions.net/pdo_examples/insert

## UPDATE One user by id

1. Inside the `users` directory create a file called `update.php`
2. Connect to the DB, check the `02_authentication` to see how we have done the db connection
3. Create an `$id` variable containing the name sent using GET method `$id = $_GET['id'];`
4. Create a `$user_query` with the following string `SELECT * FROM users WHERE id = ?`;
5. Prepare the query `$user_stmt = $db->prepare($user_query)`
6. Run the query `$user_stmt->execute([$id])`
7. Use the `fetch` method - `$user = $user_stmt->fetch()`
8. Check if the `$user` was equal to false, if so do the following
    1. Return an error as json response saying the user with the following id dose not exist
    2. Don't forget to set the "success": false, "status": 404
    3. don't forget the `die()` after sending the json data
9. Create a variable `$name` and assign the following `$_GET['name'] ?: $user['name']`
10. Create a variable `$email` and assign the following `$_GET['email'] ?: $user['email']`
11. Create a variable `$password` and assign the following `$_GET['password'] ?: $user['password']`
12. Create a variable called `$query` and assign the following to it `UPDATE users SET name=?, email=?, password=? WHERE id=?"`
11. Prepare the query `$stmt = $db->prepare($query)`
12. Run the query `$result = $stmt->execute([$name, $email, $password, $id])` in order
9. If `$result === true` => the query was successful otherwise the query had problems
10. Don't forget the try catch if an internal error happened
11. Don't forget to send json response if an internal server error happened
12. Don't forget to send json response with status 401 if the ( $name or $email or $password ) or $id where not provided
13. Don't forget to send json response if the query was not successful
14. If no errors send the following:
       ```php
       echo json_encode(array(
           'success' => true,
           'status'  => 201,
           'errors' => []
        ));
       die();
       ```
    
>> Hint: https://phpdelusions.net/pdo_examples/update

>> $name = $_GET['name'] ?: $user['name']; // if name was not passed $name would be equal to $user['name'] otherwise $name would be equal to $_GET['name']

>> In Javascript the ?: is equivalent to ||

## DELETE One user by id

1. Inside the `users` directory create a file called `delete.php`
2. Connect to the DB, check the `02_authentication` to see how we have done the db connection
3. Create an `$id` variable containing the id sent using GET `$id = $_GET['id'];`
4. Create a variable called `$query` and assign the following to it `SELECT * FROM users WHERE id = ?`
5. Prepare the query `$stmt = $db->prepare($query)`
6. Run the query `$result = $stmt->execute([$id])`
7. If `$result` was false return a failure json response
8. Don't forget the try catch if an internal error happened
9. Don't forget to send json response if an internal server error happened
11. If no errors send the following:
   ```php
   echo json_encode(array(
       'success' => true,
       'status'  => 201,
       'data'    => null,
       'errors' => []
    ));
   die();
   ```

>> Hint: https://www.plus2net.com/php_tutorial/pdo-delete.php
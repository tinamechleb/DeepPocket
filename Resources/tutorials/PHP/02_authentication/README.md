# Authentication

## Fake authentication Part 1

1. After the cors header add the following
2. Define a variable called `$user_email` and assign `info@codi.tech` to it.
3. Define a variable called `$user_password` and assign `LiveLoveCodi` to it.
4. Define a variable called `$email` and assign to it the value of `$_GET['email']`.
5. Define a variable called `$password` and assign to it the value of `$_GET['password']`.
6. Wrap the rest of the code under an if condition
    1. The if condition should have the following criteria ($email === $user_email && $password === $user_password)
    2. If the body of the if condition add the rest of the code ( the code that is already available in the index.php file)
    3. On the second part of the if condition ( the else { ... } part ) 
    4. Add the following code
        ```php
       header('Content-Type: application/json; charset=utf-8');

       echo json_encode(array(
       'success' => false,
        'status' => 401,
       'errors' => [
        'Wrong email or password'
       ]
        ));
        ```
    5. At the next line after the if else end add a `die()`
7. Open the following link in the browser [localhost:8080](http://localhost:8080)   
8. Add the following to the link `?email=info@codi.tech&password=LiveLoveCodi`
9. Lets now try to change the password available in the url to something else other than `LiveLoveCodi`, try `LiveLoveBeirut`
10. Good you wrote a PHP code that you would not use on production but you learn it about the basics of authentication


## Fake authentication Part 2

As before the code that you would write here will teach you something new but its rarely that you gonna use on a production project
In this step we gonna learn how to connect to database using PDO but with sqlite

1. Get the final code of the previous step from `index_1_final.php` and replace it with the one available in `index.php`
2. Remove the `$user_email` & `$user_password` variables
3. Lets start by connecting to the database
    1. Add the following code after `$name` & `$password`
        ```php
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
        ```
       >> The following code would allow us to connect to the database and if the database connection failed we send an error to the user who requested the url
4. Check the phpdelusions [SELECT query with PDO](https://phpdelusions.net/pdo_examples/select) 
5. After the `try { ... } catch (Exception $e) { ... }`
6. Add a variable `$query` and assign the following to it: `SELECT * FROM users WHERE email= ?  AND password= ?`.
7. Add the following code `$stmt = $db->prepare($query);`
8. Add the following code `$stmt->execute([$email, $password]); `
9. Add the following code `$user = $stmt->fetch();`
10. Open the following link in your browser `http://localhost:8080/?email=info@codi.tech&password=LiveLoveBeirut`

### handling errors

1. After that you opened the link you saw some errors in the browser to hide thus errors we will wrap the previous code in try catch
    1. the code will be as follow after the try catch
        ```php
       try {
       $query = 'SELECT * FROM users WHERE email= ? AND password= ?';
       
       $stmt = $db->prepare($query);
       $stmt->execute([$email, $password]);
       $user = $stmt->fetch();
       // rest of code here
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
        ```
    2. Open db.sqlite in DB browser and execute the following queries:
    ```sql
   
      CREATE TABLE if not exists users
      (
          id integer NOT NULL CONSTRAINT users_pk PRIMARY KEY AUTOINCREMENT,
          name varchar(255) NOT NULL,
          email varchar(255) NOT NULL,
          password varchar(255) NOT NULL,
          CONSTRAINT user_email UNIQUE (email)
      );
      
      
      INSERT INTO users (name, email, password) VALUES ('Gaby', 'gaby@codi.tech', '12345678');
      INSERT INTO users (name, email, password) VALUES ('Samar', 'samar@codi.tech', '87654321');
      INSERT INTO users (name, email, password) VALUES ('Khaldoun', 'khaldoun@codi.tech', '87654321');
  
    ```
   3. Don't forget to save your changes on `DB Browser`
2. The `$user` will be equal to false if the user can't be authenticated otherwise the `$user` will be equal to an associative array having the keys same as the select query
3. To know more test and user `var_dump($user);` to know what is available under the user info
4. complete the authentication step so it would do the following:
    1. Return success false if:
        1. Email or password weren't provided or ( $user query didn't succeed to find the right user )
            1. send status: 401 and errors: [ 'Wrong email or password' ]
    2. Return success true otherwise with the following data
        1. { success: true, status: 200, user: $user } 


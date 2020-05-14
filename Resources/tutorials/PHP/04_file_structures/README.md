# Restructuring our APP + DB Models


## So what is happening?

1. On each routes we have codes duplicates for the database connection
2. On each routes we have duplicates for the cors
3. On each routes we have duplicates for the structure of the json message
4. For now we don't have a problem with query being on the same file of the routes but when the project grow we might start having some problems of long repeatable lines of code.

## DB connection solution 

1. Lets create a directory called `model` under the `04_file_structures`
2. Inside this directory lets create a file called `db.php`
3. Inside this `db.php` lets add the php code that deal with the db connection
    ```php
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

    ```
4. In `users/index.php`, `users/get.php`, `users/create.php`, `users/update.php` and `users/delete.php`
    1. Lets replace the above code (db connection code) with the following code: `require_once __DIR__ . '/../model/db.php';`
    2. Lets test the previous routes does they still works? 
    3. You might ask yourself how does still work?
        1. In PHP the export method doesn't work like Javascript
        2. When we import a file using (require, include, require_once or include_once) we are actually (concatenation/merging) another file into the file that we are working with
        3. So all the variable/class/functions declared in the imported file would be available in the file where the import was called
        
5. Step done

## Cors duplication solution

1. Lets create a directory called `helpers`, as the definition of the directory name the helpers directory would contain some helpers files
2. The helpers directory will have code that would not affect the logic of our application but they would help us into not replicating the code
3. Inside the `helpers` directory lets create a `cors.php` file
4. In the cors.php lets add the following php code:
    ```php
       header('Access-Control-Allow-Origin: *');
       header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    ```
5. Lets replace all the above code under `users` directory with importing the `helpers/cores.php` file
6. Test

## JSON response structure solution

1. On each response we have the following json key to be sent
    1. success
    2. status
    3. data
    4. errors
2. On each response we are setting the `content-type` header
3. On each response we are adding a `die()` function
4. If the success is equal to true the errors would be equal to an empty array
5. If the success is equal to true the status would be equal to 201
7. If the success is equal to false and the error was a validation error the status would be equal to 422
8. If the success is equal to false and the error was that the id provided wasn't found we are sending a status 404
9. If the success is equal to false and the error is an authentication error we are sending a status 401
10. The criteria could take 50 lines to end so maybe what the best for making the code less is to just to create a function that help us into managing a structure for our json api

>> Code writing

1. Create a file called `helpers.php` inside the `helpers` directory
2. Create a function called sendJson
3. This function should accept the following arguments:
    1. $success
    2. $status
    3. $data
    4. $errors
4. Within this function add the header responsible to set the `content-type` to `json`
5. Within this function return json response having the same structure that we used in the users crud
6. At the end of this file add a `die();` 

## Separating DB Query from logic solution

In the model directory we already created a `db.php` that contain the db connection.

For each table in our database we gonna create a model this model will be the middleware that we will be using to communicated with the database

We can either use a function to for each crud action or we can create a class that contains all the crud functions

What the difference? Using a class our code would have more meaning and would help us into not having an error called `function name already exist`


### How to create the model?

1. Under the `model` directory, create a file called `User.php`, notice that the `U` is uppercase and `user` is singular.
2. In the `User.php` define a class called `User`
3. Add a public property called `$db`
4. Add a constructor method that accept one argument and assign this argument to the `Class $db` property.
5. In our usage of the model we gonna have 5 functions as follow:
    1. getAllUsers()
    2. getUserById($id)
    3. createUser($name, $email, $password)
    4. updateUserById($id, $name, $email, $password)
    5. deleteUserById($id)
6. For each function in step 5 create the following 
    1. The function
    2. Run the DB query using PDO without adding any logic, even the one that check if a variable is passed don't add them
    3. Before finishing from the function return the result of the query
    4. Check the users crud for a memory reminder


### How to test the model?

We aren't going on how to do testing using a library like jasmin in javascript

The testing that we will be doing is to create a file and import the class function and test each function in this class

1. Lets create a `test.php` file.
2. In the `test.php` require once the db connection file
3. Require once the `User` class
4. Create an instance of the User class. (lets name it `$UserModel`)
5. Lets create a variable `$users` and assign to it the value of `$UserModel->getUsers()`
6. Lets var_dump the `$users` variable
7. As how we have done it for the the first function in the crud do it for the rest 4 functions


### How to use the model?

Follow the bellow instructions on each crud in the `users` directory

1. Go the crud file, example `index.php`
2. Require once the `User` class
3. Create an instance of the `User` class
4. Replace the previous php code that communicate with Database and run query with the relative function
    
    For example: in index.php
    
    Remove
    
    ```php
     $query = 'SELECT * FROM users';
    
     $stmt = $db->query($query);
     $users = $stmt->fetchAll();
    ```
   
   Replace it the following code assuming that  `$UserModel` is the instance of the `User` class.
   
   ```php
   $users = $UserModel->getAllUsers();
    ``` 
5. Go to the browser and test the route



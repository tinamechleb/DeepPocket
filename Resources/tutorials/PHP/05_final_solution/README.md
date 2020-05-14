# Extra fixes

## What we have till now?

1. A helpers directory that contains functions that doesn't interact with the logic
    1. `cors.php` contain the code that by pass the `cors` security
    1. `helpers.php` contain functions that aren't related to the logic of the application and that doesn't need to be in a separate directory
2. A model directory that contains all the files related to communicate with the database
    1. `db.php` contains the code that connect our app to the database
    2. `User.php` contains the code that deal with communicating with ours `users` table
3. 


## Naming convention

### DB Model
1. The file name should be singular and it should follows the pascale case (first letter of each word should be capital)
2. The table name should be plural and lowercase, if the table name is a combination of multiple words (2 or more), we separate each word by an underscore `_`
3. When creating an instance of a DB model the variable name should be a combination of the model file name plus the word `Model`
    1. Example: `User.php` => `$UserModel = new User($db);` |||  `Currency.php` => `$CurrencyModel = new Currency($db);`

### 
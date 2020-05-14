
# /api/users

## GET: /me

### Description

This route will return the current logged in user information by prvoding the email and password

### Parameters

| Method | Parameter | Optional? | Description       |
|--------|-----------|-----------|-------------------|
| POST   | email     | Required  | the user email    |
| POST   | password  | Required  | the user password |


### Header
```js
{
}
```
### Response

#### Success

```json
{
    "success": true,
    "status": 200,
    "data":  {
        "id": 3,
        "name": "Gaby",
        "email": "gaby@codi.tech",
        "image": "http://localhost:8080/uploads/user/profile-2.jpg",
        "currency": {
            "id": 3,
            "country": "United Arab Emirates",
            "symbol": "DH",
            "code": "AED",
            "name": "United Arab Emirates Dirham"
        }
    },
    "error": null
}
```
#### Failure

#### Not found

```json
{
    "success": false,
    "status": 404,
    "data": null,
    "errors": [
        "User not found"
    ],
}
```

#### Authentication error

```json
{
    "success": false,
    "status": 401,
    "data": null,
    "errors": [
        "User not authenticated",
    ],
}
```

>> ...

## POST: /


### Description

This route will add new user

### Parameters

| Method | Parameter | Optional? | Description               |
|--------|-----------|-----------|---------------------------|
| POST   | name      | Required  | the user name             |
| POST   | email     | Required  | the user email            |
| POST   | passowrd  | Required  | the user password         |
| POST   | currency  | Required  | the user default currency |
| POST   | image     | Required  | the user profile image    |
|        |           |           |                           |

### Header
```js
{
    'Content-Type': 'multipart/form-data'
}
```
### Response

#### Success

```json
{
    "success": true,
    "status": 200,
    "data":  {
        "id": 5,
        "name": "My name",
        "email": "example@example.com",
        "image": "http://localhost:8080/uploads/user/profile.jpg",
        "currency": {
            "id": 2,
            "country": "Lebanon",
            "symbol": "L.L.",
            "code": "LBP",
            "name": "Lebanese pound"
        }
    },
    "error": null
}
```
#### Failure

#### Validation error

```json
{
    "success": false,
    "status": 400,
    "data": null,
    "errors": [
        "Name is required",
        "Email already exist"
    ],
}
```

>> ...

## PUT: /me


### Description

This route will update one user information by providing the relevent email and password.

### Parameters

| Method | Parameter     | Optional? | Description                       |
|--------|---------------|-----------|-----------------------------------|
| POST   | email         | Required  | the user email                    |
| POST   | password      | Required  | the user password                 |
| POST   | name          | Optional  | the updated user name             |
| POST   | new_password  | Optional  | the updated user password         |
| POST   | image         | Optional  | the updated user image            |
| POST   | currency      | Optional  | the updated user default currency |
|        |               |           |                                   |


### Header
```js
{
    'Content-Type': 'multipart/form-data'
}
```
### Response

#### Success

```json
{
    "success": true,
    "status": 200,
    "data":  {
        "id": 5,
        "name": "My new name",
        "email": "test@example.com",
        "image": "http://localhost:8080/uploads/user/profile.jpg",
        "currency": {
            "id": 2,
            "country": "Lebanon",
            "symbol": "L.L.",
            "code": "LBP",
            "name": "Lebanese pound"
        }
    },
    "error": null
}
```

#### Failure

#### Validation error

```json
{
    "success": false,
    "status": 400,
    "data": null,
    "errors": [
        "User not found",
        "Name can't be empty"
    ],
}
```

#### Authentication error

```json
{
    "success": false,
    "status": 401,
    "data": null,
    "errors": [
        "User not authenticated",
    ],
}
```

>> ...

## DELETE: /me

This route will delete one user information by providing the relevent user id.

### Parameters

| Method | Parameter | Optional? | Description       |
|--------|-----------|-----------|-------------------|
| POST   | email     |  sssRequired  | the user email    |
| POST   | passwordsss  | Required  | the user password |
|        |           |           |                   |

### Header
```js
{
}
```
### Response

#### Success

```json
{
    "success": true,
    "status": 200,
    "data":  null,
    "error": null
}
```
#### Failure

#### Validation error

```json
{
    "success": false,
    "status": 400,
    "data": null,
    "errors": [
        "User not found",
    ],
}
```

#### Authentication error

```json
{
    "success": false,
    "status": 401,
    "data": null,
    "errors": [
        "User not authenticated",
    ],
}
```

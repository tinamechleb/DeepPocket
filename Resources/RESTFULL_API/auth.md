
# /api/auth

## POST: /

### Description

This route will return the information of the authenticated user

### Parameters
|   Method	    |  Parameter 	|   Optional?	|   Description	        |
|---	        |---	        |---        	|---	                |
|   POST	    |   email   	|   Required    |   The user email      |
|   POST	    |   password	|   Required    |   The user password   |


### Response

#### Success

```json
{
    "success": true,
    "status": 200,
    "data": {
        "id": 2,
        "name": "Omar",
        "email": "omar@codi.tech",
        "currency": {
            "id": 3,
            "country": "United Arab Emirates",
            "symbol": "DH",
            "code": "AED",
            "name": "United Arab Emirates Dirham"
        },
        "image": "http://localhost:8080/uploads/user/profile.jpg"
    },
    "error": null
}
```
#### Failure


```json
{
    "success": false,
    "status": 401,
    "data": null,
    "errors": [
        "User not authenticated",
        "Another thing went wrong"
    ],
}
```

>> ...

## POST: /login

### Description

This route will authenticated the user after providing a valid email and password.

### Parameters

|   Method	|  Parameter 	|   Optional?	|   Description	        |
|---	    |---	        |---        	|---	                |
|   POST    |   email	    |   Required   	|   the user email      |
|   POST    |   password    |   Required   	|   the user password   |
|   	    |   	        |           	|   	                |

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
        "id": 2,
        "name": "Omar",
        "email": "omar@codi.tech",
        "currency": {
            "id": 3,
            "country": "United Arab Emirates",
            "symbol": "DH",
            "code": "AED",
            "name": "United Arab Emirates Dirham"
        },
        "image": "http://localhost:8080/uploads/user/profile.jpg"
    },
    "error": null
}
```
#### Failure

#### Authentication error

```json
{
    "success": false,
    "status": 401,
    "data": null,
    "errors": [
        "Email or password are wrong.",
    ],
}
```

>> ...

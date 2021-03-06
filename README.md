# CP-NODE
## Overview

**Chillipanda development stack in PANE - NodeJS, ExpressJS, AngularJS and PostgreSQL**

---

### API Structure
````
http://hostName/{{apiType}}/{{base}}/{{action}}
````

`API Type` - API type refers to either CORE API / other customized API

`Base` - Base refers to the key component to request, such as device / entity / image

`Action` - Action refers to the method user requests for - getDevice / getEmail / getimage 

---

### Node Modules

`ExpressJS` **(express)** - Standard WebServer JS Package

`BCrypt` **(bcrypt)**  - Encryption and Hashing

`Jade` **(jade)**  - HTML Templating

`Mandrill` **(mandril-api)** - Mail Sending

`Moment` **(moment)** - Dates Parsing

`Pg-Node` **(pg)** - Postgres connection with NodeJs

`Forever` **(forever)** - Package that allows NodeJs to run forever on the server

`Embedded JS Layouts` **(express-ejs-layouts)** - HTML and layouts

`Embedded JS` **(ejs)** - HTML rendering

`Http Requests` **(request)** - HTTP requests for express middleware

`Passport` **(OAuth)** - Authentication for Facebook, Twitter, Google, etc..

---

### Helper Functions
#### Authentication
**authenticate(`req`, `res`, `userString`, `pass`, `legacy`, `callback`)** - authenticate user to app, legacy input for true / false for PHP password compat fallback. Creates user session

**newAuthentication(`req`, `res`, `userString`, `pass`, `firstName`, `lastName`, `callback`)** - Create a new authentication and a new entity. Generic sign up method

**authenticateExpress(`req`, `res`, `userString`)** - Login user directly and creates a session without user

**destroyAuthentication(`req`, `res`)** - Destroy the session and log users out

#### crypt
**encrypt(`req`, `res`, `string`)** - encrypts a string and outputs a hashed string

**decrypt(`req`, `res`, `hash`, `string`)** - compares a hashed string with an input string and returns a `true` or `false`
 
#### dateTime
**utcNow(`req`, `res`)** - gets the current universal date time stamp.

#### idGen
**generateId(`req`, `res`)** - generates a random string for database insertion

#### dbConnect
**connectAndQuery(`req`, `res`, `queryString`, `variables`)** - connects to the default database configuration state in the webConfig. Takes in the query string as a form of prepared statement (i.e. query with $1, $2, $3, etc.. variables) and requires user to input variables at the variables parameter.

#### mailSender
**sendMail(`req`, `res`, `htmlContent`, `text`, `subject`, `mailingList`, `importantMessage`)** - instantiate helper at any point in the codes to send an email.

### CORE API
Core APIs are APIs written mainly for CRUD purposes, copyright under Chillipanda Development


#### Device
**getDevice** (Released v0.1)

````
http://{{host-name}}/core/device/getDevice
````

**addDevice** (Released v0.1)

````
http://{{host-name}}/core/device/addDevice
````

**updateDevice** (Released v0.1)

````
http://{{host-name}}/core/device/updateDevice
````
**deleteDevice** (Released v0.1)

````
http://{{host-name}}/core/device/deleteDevice
````

#### Device Relationship
**getDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/getDeviceRelationship
````


**addDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/addDeviceRelationship
````
**updateDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/updateDeviceRelationship
````
**deleteDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/deleteDeviceRelationship
````

#### Device Relationship Value
**getDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/getDeviceRelationshipValue
````
**addDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/addDeviceRelationshipValue
````
**updateDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/updateDeviceRelationshipValue
````
**deleteDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/deleteDeviceRelationshipValue
````
#### Device Session
**getDeviceSession** (Released v0.1)

````
http://{{host-name}}/core/deviceSession/getDeviceSession
````

**addDeviceSession**  (Released v0.1)

````
http://{{host-name}}/core/deviceSession/addDeviceSession
````

**updateDeviceSession**  (Released v0.1)

````
http://{{host-name}}/core/deviceSession/updateDeviceSession
````

**deleteDeviceSession**  (Released v0.1)

````
http://{{host-name}}/core/deviceSession/deleteDeviceSession
````

#### Device Value
**getDeviceValue** (Released v0.1)

````
http://{{host-name}}/core/deviceValue/getDeviceValue
````

**addDeviceValue**  (Released v0.1)

````
http://{{host-name}}/core/deviceValue/addDeviceValue
````

**updateDeviceValue** (Released v0.1)

````
http://{{host-name}}/core/deviceValue/updateDeviceValue
````

**deleteDeviceValue** (Released v0.1)

````
http://{{host-name}}/core/deviceValue/deleteDeviceValue
````

#### Email
**getEmail** (Released v0.1)

````
http://{{host-name}}/core/email/getEmail
````
**addEmail** (Released v0.1)

````
http://{{host-name}}/core/email/addEmail
````

**updateEmail** (Released v0.1)

````
http://{{host-name}}/core/email/updateEmail
````

**deleteEmail** (Released v0.1)

````
http://{{host-name}}/core/email/deleteEmail
````

#### Enterprise
**getEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/getEnterprise
````

**addEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/addEnterprise
````


**updateEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/updateEnterprise
````
**deleteEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/getEnterprise
````

#### Entity
**getEntity** (Released v0.1)

````
http://{{host-name}}/core/entity/getEntityDevice
````

**getEntityDetail** (Released v0.1)

````
http://{{host-name}}/core/entity/getEntityDetail
````

**addEntity** (Released v0.1)
````
http://{{host-name}}/core/entity/deleteEnterprise
````

**updateEntity** (Released v0.1)

````
http://{{host-name}}/core/entity/updateEntity
````

**deleteEntity** (Released v0.1)

````
http://{{host-name}}/core/entity/deleteEntity
````


#### Image
**getImage** (Released v0.1)


````
http://{{host-name}}/core/image/getImage
````

**addImage** (Released v0.1)

````
http://{{host-name}}/core/image/addImage
````


**updateImage** (Released v0.1)

````
http://{{host-name}}/core/image/updateImage
````


**deleteImage** (Released v0.1)

````
http://{{host-name}}/core/image/deleteImage
````

#### Log
**getLog** (Released v0.1)

````
http://{{host-name}}/core/log/getLog
````


**addLog** (Released v0.1)

````
http://{{host-name}}/core/log/addLog
````

**updateLog** (Released v0.1)

````
http://{{host-name}}/core/log/updateLog
````

**deleteLog** (Released v0.1)

````
http://{{host-name}}/core/log/deleteLog
````

#### Media
**getMedia** (Released v0.1)

````
http://{{host-name}}/core/media/getMedia
````

**addMedia** (Released v0.1)

````
http://{{host-name}}/core/media/addMedia
````

**updateMedia** (Released v0.1)

````
http://{{host-name}}/core/media/updateMedia
````

**deleteMedia** (Released v0.1)

````
http://{{host-name}}/core/media/deleteMedia
````

#### Message
**getMessage** (Released v0.1)

````
http://{{host-name}}/core/message/getMessage
````

**addMessage** (Released v0.1)

````
http://{{host-name}}/core/message/addMessage
````

**updateMessage** (Released v0.1)

````
http://{{host-name}}/core/message/updateMessage
````

**deleteMessage** (Released v0.1)

````
http://{{host-name}}/core/message/deleteMessage
````

#### Phone
**getPhone** (Released v0.1)

````
http://{{host-name}}/core/phone/getPhone
````

**addPhone** (Released v0.1)

````
http://{{host-name}}/core/phone/addPhone
````

**updatePhone** (Released v0.1)

````
http://{{host-name}}/core/phone/updatePhone
````

**deletePhone** (Released v0.1)

````
http://{{host-name}}/core/phone/updatePhone
````

#### Product
**getProduct** (Released v0.1)

````
http://{{host-name}}/core/product/getProduct
````

**addProduct** (Released v0.1)

````
http://{{host-name}}/core/product/addProduct
````

**updateProduct** (Released v0.1)

````
http://{{host-name}}/core/product/updateProduct
````

**deleteProduct** (Released v0.1)

````
http://{{host-name}}/core/product/deleteProduct
````

#### Product Registration
**getProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/getProductRegistration
````

**addProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/addProductRegistration
````
**updateProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/updateProductRegistration
````
**deleteProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/deleteProductRegistration
````
#### Product Value
**getProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/getProductValue
````
**addProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/addProductValue
````
**updateProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/updateProductValue
````

**deleteProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/deleteProductValue
````

---

### eyeOrcas API
eyeOrcas APIs are customized APIs for eyeOrcas Web App.

#### AUTHENTICATION

##### authenticate `Released v0.1`

Authentication API for both iOS / Android App, Portal and RM.

````
http://{{host-name}}/eyeorcas/authentication/authenticate
````
**Parameters**

`POST` `AuthenticationString` - email / username swfong@gmail.com

`POST` `Password` - user password

**Results**

Returns entity details by default

````
{
  "RowsReturned": 1,
  "Data": [
    {
      "entity_id": "WBI9RIAQ-R4HJN933-0PP6OSDH",
      "first_name": "Shi Wei",
      "last_name": "Fong",
      "nick_name": "Shi Wei Fong",
      "name": "Shi Wei Fong",
      "status": "V",
      "approved": true,
      "type": "1",
      "create_date": "2014-03-30T00:10:15.000Z",
      "last_update": "2014-03-30T00:10:15.000Z",
      "authentication_id": "9J401T2T-O0WXG9CG-2TB9L9TW",
      "primary_email_id": "CFGNE190-2H0KQ028-UAI99C20",
      "primary_phone_id": null
    }
  ],
  "Error": null,
  "ErrorDesc": null,
  "ErrorCode": null
}
````

##### verifyAccount `Released v0.1`

Authentication / User Verification API for eyeOrcas App / Portal. If user is not logged in when clicked on verify link, use will be logged in. Details will be returned

````
http://{{host-name}}/eyeorcas/authentication/verifyAccount
````
**Parameters**	

`GET` `AuthenticationId` - user's authentication ID is the key for verification


**Results**

Returns true after verification. Returns false if verification fails.

````
{
  "RowsReturned": null,
  "Data": true,
  "Error": false,
  "ErrorDesc": null,
  "ErrorCode": null
}
````

If user is not logged in, he / she will be logged in automatically upon verification and user details will be returned

````
{
  "RowsReturned": 1,
  "Data": [
    {
      "entity_id": "PBVU0JM8-DTHQ6Y11-IGI1UC5L",
      "first_name": "hello",
      "last_name": "panda1",
      "nick_name": null,
      "name": "hello panda1",
      "status": "V",
      "approved": true,
      "type": "1",
      "create_date": "2014-04-16T01:22:47.046Z",
      "last_update": "2014-04-16T17:31:12.032Z",
      "authentication_id": "X2WJOPNQ-8CF0HRWG-68L6T8LB",
      "primary_email_id": "hello1@gmail.com",
      "primary_phone_id": null,
      "authorization_level": null,
      "last_login": "2014-04-16T17:31:14.401Z",
      "last_logout": null,
      "authentication_string": "hello1@gmail.com",
      "total_rows": 1
    }
  ],
  "Error": false,
  "ErrorDesc": null,
  "ErrorCode": null
}
````


##### newAuthentication `Released v0.1`

New User Registration API for eyeOrcas App / Portal

````
http://{{host-name}}/eyeorcas/authentication/newAuthentication
````
**Parameters**

`POST` `UserString` - authentication string such as email address

`POST` `Password` - authentication credential minimum of 8 characters

`POST` `First Name` - User's First Name

`POST` `Last Name` - User's Last Name

**Results**

Returns created user details upon success

````
{
  "RowsReturned": 1,
  "Data": {
    "entity_id": "3455VRKV-PUYO4LTD-ET35HRJO",
    "first_name": "Node",
    "last_name": "User",
    "nick_name": null,
    "name": "Node User",
    "status": "U",
    "approved": false,
    "type": "1",
    "create_date": "2014-04-16T01:33:54.670Z",
    "last_update": null,
    "authentication_id": "Q69GWFDM-RW2D5GX7-T9MG4Y6G",
    "primary_email_id": "nodeuser@gmail.com",
    "primary_phone_id": null,
    "authorization_level": null,
    "last_login": null,
    "last_logout": null,
    "authentication_string": "nodeUser@gmail.com",
    "total_rows": 1
  },
  "Error": false,
  "ErrorDesc": null,
  "ErrorCode": null
}

````

##### destroyAuthentication `Released v0.1`

Log users out.

````
http://{{host-name}}/eyeorcas/authentication/destroyAuthentication
````
**Parameters**

No parameters required

**Results**

Returns true upon destroyed

````
{
  "RowsReturned": null,
  "Data": true,
  "Error": false,
  "ErrorDesc": null,
  "ErrorCode": null
}

````
#### Activity
**getActivities** (Released v0.1)

````
http://{{host-name}}/eyeorcas/activities/getActivities
````

#### Device
**getDeviceDetails** (Released v0.1)

````
http://{{host-name}}/eyeorcas/device/getDeivceDetails
````
#### Device Relationship
**getEntityDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/eyeorcas/deviceRelationship/getEntityDeviceRelationship
````
**getEntityDeviceRelationshipDetails** (Released v0.1)

````
http://{{host-name}}/eyeorcas/deviceRelationship/getEntityDeviceRelationshipDetails
````
**addEntityDeviceRelationshipWithValues** (Released v0.1)

````
http://{{host-name}}/eyeorcas/deviceRelationship/addEntityDeviceRelationshipWithValues
````
#### Media
**getDeviceRelationshipMedia** (Released v0.1)

````
http://{{host-name}}/eyeorcas/media/getDeviceRelationshipMedia
````
#### Product Registration
**getEntityProductRegistrationDetail** (Released v0.1)

````
http://{{host-name}}/eyeorcas/productRegistration/getEntityProductRegistrationDetail
````

### eyeOrcas Remote Management API
eyeOrcas Remote Manage--- APIs are customized APIs for eyeOrcas Remote management Web App. All of the APIs are secured for administration level access


---

### eyeOrcas un-versioned (APIs Under Review)
These eyeOrcas APIs are currently legacy APIs and will require review.

#### Authentication

**resetPasswordRequest**

**resetPassword**

**assignAdmin**	

#### Device

**addDeviceFromApp** (High Priority Release)

- Refer to SP

**removeDeviceFromApp** (High Priority Release)

- Remove device relationship and device relationship value

**getDevicesFromApp** (High Priority Release)

- get the details from device, device relationship and device relationship value based on ownerId 
- Also query another database to get the status of Z-Wave and Surveillance (require to write third party SQL CONNECT)

#### Log

**addLogsFromServer** (High Priority Release)

Adds logs from multiple account that is sharing a same device

- Get Device relationship ids based on device code
- OwnerId is the deviceRelationshipId

#### Media

**addMediaFromHXS** (High Priority Release)

Add Media from HXS basically gets the uploaded file, sends and email to available recepients and also to add media to the gallery directory of entities that are sharing the same device

- Get the json file package (uploade file)
- Copy the file to temp directory
- Check if email recepient exists, send an email with attachment
	- Could be null, multiple (shiweifong@gmail.com, cety@astralink.com.sg, hx@astralink.com.sg)
- Get Device relationship ids based on device code
- Store into their gallery directory /var/www/gallery/entityId   
- Add Media record to database

#### Message

**removeMessageByDeviceRelationshipId** (High Priority Release)

- Look into using multiple parameters for deleting ease

**getMessagesByDerivedDeviceRelationshipIdFromEntityId** (High Priority Release)

- Join Device relationship and message table and pass in entityId as device relationship owner
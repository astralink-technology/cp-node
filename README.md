# CP-NODE
## Overview

**Chillipanda development stack in PEAN - NodeJS, ExpressJS, AngularJS and PostgreSQL**

***

### *API Structure*
````
http://hostName/{{apiType}}/{{base}}/{{action}}
````

`API Type` - API type refers to either CORE API / other customized API

`Base` - Base refers to the key component to request, such as device / entity / image

`Action` - Action refers to the method user requests for - getDevice / getEmail / getimage 

***

### Node Modules

`ExpressJS` **(express)** - Standard WebServer JS Package

`BCrypt` **(bcrypt)**  - Encryption and Hashing

`Jade` **(jade)**  - HTML Templating

`Mandrill` **(mandril-api)** - Mail Sending

`Moment` **(moment)** - Dates Parsing

`Pg-Node` **(pg)** - Postgres connection with NodeJs

***


### CORE API
Core APIs are APIs written mainly for CRUD purposes, copyright under Chillipanda Development


#### Device
**getDevice** (Released v0.1)

**addDevice** 

**updateDevice**

**deleteDevice**

#### Device Relationship
**getDeviceRelationship**

**addDeviceRelationship**

**updateDeviceRelationship**

**deleteDeviceRelationship**
#### Device Relationship Value
**getDeviceRelationshipValue**

**addDeviceRelationshipValue**

**updateDeviceRelationshipValue**

**deleteDeviceRelationshipValue**
#### Device Session
**getDeviceSession**

**addDeviceSession**

**updateDeviceSession**

**deleteDeviceSession**
#### Device Value
**getDeviceValue**

**addDeviceValue**

**updateDeviceValue**

**deleteDeviceValue**
#### Email
**getEmail**

**addEmail**

**updateEmail**

**deleteEmail**
#### Enterprise
**getEnterprise**

**addEnterprise**

**updateEnterprise**

**deleteEnterprise**
#### Entity
**getEntity** (Released v0.1)

**getEntityDetail** (Released v0.1)

**addEntity** (Released v0.1)

**updateEntity** (Released v0.1)

**deleteEntity** (Released v0.1)
#### Image
**getImage** (Released v0.1)

**addImage** (Released v0.1)

**updateImage** (Released v0.1)

**deleteImage** (Released v0.1)
#### Log
**getLog** (Released v0.1)

**addLog** (Released v0.1)

**updateLog** (Released v0.1)

**deleteLog** (Released v0.1)

#### Media
**getMedia** (Released v0.1)

**addMedia** (Released v0.1)

**updateMedia** (Released v0.1)

**deleteMedia** (Released v0.1)
#### Message
**getMessage** (Released v0.1)

**addMessage** (Released v0.1)

**updateMessage** (Released v0.1)

**deleteMessage** (Released v0.1)
#### Phone
**getPhone** (Released v0.1)

**addPhone** (Released v0.1)

**updatePhone** (Released v0.1)

**deletePhone** (Released v0.1)
#### Product
**getProduct** (Released v0.1)

**addProduct** (Released v0.1)

**updateProduct** (Released v0.1)

**deleteProduct** (Released v0.1)
#### Product Registration
**getProductRegistration** (Released v0.1)

**addProductRegistration** (Released v0.1)

**updateProductRegistration** (Released v0.1)

**deleteProductRegistration** (Released v0.1)
#### Product Value
**getProductValue** (Released v0.1)

**addProductValue** (Released v0.1)

**updateProductValue** (Released v0.1)

**deleteProductValue** (Released v0.1)

***

### EyeOrcas API
eyeOrcas APIs are customized APIs for eyeOrcas Web App.
#### Activity
#### Device
#### Device Relationship
#### Media
#### Product Registration

### EyeOrcas Remote Management API
eyeOrcas Remote Manage APIs are customized APIs for eyeOracs Remote management Web App. Most of the APIs are secured for administration level access


***

### EyeOrcas (APIs Under Review)
These eyeOrcas APIs are currently legacy APIs and will require review.
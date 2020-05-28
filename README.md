# Contact-Keeper-API

### Tools

- mongoDB
- postman

### Dependencies

`npm i express bcryptjs jsonwebtoken config express-validator mongoose`

### Dev Dependencies

`npm i -D nodemon concurrently`

### Initialize Package.json

`npm init -y`

### Start Server

```
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
```

`npm start server`

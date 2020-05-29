# Contact-Keeper-API

`npm run dev`
// Use Concurrently to run both servers

```
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "clientinstall": "npm install --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

### Tools

- MongoDB -> Cloud Database
- postman -> HTTP Client
- Express -> Backend
- React -> Frontend

## Server

### Execution

// Reloads Server after each change

`npm run server`

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

## Client

`npx create-react-app client`

#### package.json

`"proxy": "http://localhost:5000"`

#### Remove git

`client\rm -rf .git`

### Dependencies

`client\npm i axios react-router-dom uuid react-transition-group`

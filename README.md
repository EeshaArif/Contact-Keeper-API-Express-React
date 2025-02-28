# Contact-Keeper

A MERN application that allows registered users to manage, store and edit their contacts in an efficient way.

### Execution

`npm run dev`

##### Client-Server

// used **concurrently** to run both servers

```
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "clientinstall": "npm install --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefic client && npm run build --prefix client"
  },
```

### Tools

- MongoDB -> Cloud Database
- postman -> HTTP Client
- Express -> Backend
- React -> Frontend
- Heroku -> Deployment

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

`client\npm i axios react-router-dom react-transition-group`

### React-Router-Dom

```
<Router>
  <Switch>
    <Route  exact path="/" component={Home}/>
  </Switch>
</Router>
```

`<Link to = '/'>Home</Link>`

### Heroku

`npm install -g heroku`

```
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set Static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
```
- `heroku login`
- `heroku create`
- `git push heroku master` 


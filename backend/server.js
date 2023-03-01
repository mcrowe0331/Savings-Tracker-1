const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to mongo: ", process.env.ATLAS_URI);
    }
  );

    
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
} 


const creditRouter = require('./routes/credit');
// const usersRouter = require('./routes/users');

app.use('/credit', creditRouter);
// app.use('/users', usersRouter);



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to GitCredit." });
});

// routes
const authRouter = require('./routes/auth.routes');
const usersRouter = require('./routes/user.routes');

app.use('/auth.routes', authRouter);
app.use('/user.routes', usersRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
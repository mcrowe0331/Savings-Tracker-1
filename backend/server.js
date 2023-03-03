const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const path = require("path");
const creditRouter = require('./routes/credit');
const app = express();
const port = process.env.PORT || 5000;


require('dotenv').config();


app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to mongo: ", process.env.ATLAS_URI);
    }
  );


app.use('/credit', creditRouter);
app.use('/users', usersRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
const express = require('express'); // Express is for building the Rest apis
const bodyParser = require('body-parser'); // Helps to parse the request and create the req.body object
const cors = require('cors'); // provides Express middleware to enable CORS with various options.
import db from './app/models';
const app = express();
import env from 'dotenv';

env.config();

var corsOptions = {
  origin: 'http://localhost:8081',
};

// Handle CORS on client-side
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to ngxuanthang1111 application.' });
});

require('./app/routes/tutorial.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

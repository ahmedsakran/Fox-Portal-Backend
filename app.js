//#region Define Global Variables
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
//#endregion

//#region middlewares
app.use(express.json());
app.use(morgan('tiny'));
var corsOptions = {
    origin: "http://localhost:27017"
};
app.use(cors(corsOptions));
//#endregion

//#region Variables
const PORT = process.env.PORT || 27017;
const api = process.env.API_URL;
//#endregion

//#region Routes
const user_data_Routes = require("./routes/user_data");
app.use(`${api}/`, user_data_Routes);
//#endregion

//#region Database 'mongodb://62.67.10.47:27017/'
mongoose.connect('mongodb://localhost/FoxPortal-DB', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: process.env.DB_NAME
})
.then(() => {
    console.log('we are using ' + process.env.DB_NAME);
    console.log('Database Connection is ready...');
})
.catch((err) => {
    console.log(err);
});
//#endregion

//#region Server
app.listen(PORT, () => {
    console.log('server is running http://localhost:27017');
});
//#endregion
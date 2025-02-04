const express = require("express"); 
const functions = require("firebase-functions");
const router = require("./routes/routes"); 
const errorHandler = require("./controllers/errorController"); 
const app = express(); 
const path = require("path"); 

app.set('view engine', 'ejs');  
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router); 
app.use(errorHandler);

exports.app = functions.https.onRequest(app);
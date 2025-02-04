const express = require("express"); 
const asyncHandler = require("express-async-handler"); 
const router = require("./routes/routes"); 
const errorHandler = require("./controllers/errorController"); 
const app = express(); 

app.set('view engine', 'ejs');  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(router); 

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
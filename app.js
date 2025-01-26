const express = require("express"); 
const asyncHandler = require("express-async-handler"); 
const app = express(); 
const router = require("./routes/routes"); 
const errorHandler = require("./controllers/errorController"); 

app.use(express.urlencoded({ extended: true }));

app.use(router); 

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
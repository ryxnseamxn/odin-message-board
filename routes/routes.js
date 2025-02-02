const { Router } = require("express"); 
const messageController = require("../controllers/messageController"); 
const router = Router(); 

router.get("/", (req, res) => {
    res.send("Hello, world!");
}); 

router.get("/messages", (req, res) => {
    let messages = messageController.getMessages(); 
    res.render('index', {
        'messages': messages
    }); 
});

router.post("/new", (req, res) => {

});

module.exports = router; 
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
    const text = req.query.text; 
    const user = req.query.user;
    messageController.addMessage(text, user);
    res.status(200); 
});

module.exports = router; 
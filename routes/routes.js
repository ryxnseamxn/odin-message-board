const { Router } = require("express"); 
const messageController = require("../controllers/messageController"); 
const router = Router(); 

router.get("/", (req, res) => {
    res.redirect("/messages");
}); 

router.get("/messages", (req, res) => {
    let messages = messageController.getMessages(); 
    res.render('index', {
        'messages': messages
    }); 
});

router.post("/new", (req, res) => {
    const text = req.body.text; 
    const user = req.body.username;
    messageController.addMessage(text, user);
    res.redirect("/messages"); 
});

module.exports = router; 
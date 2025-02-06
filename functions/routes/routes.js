const { Router } = require("express"); 
const messageController = require("../controllers/messageController"); 
const router = Router(); 

router.get("/", (req, res) => {
    res.redirect("/messages");
}); 

router.get("/messages", (req, res) => {
    const messages = messageController.getMessages(); 
    const zones = messageController.getZones();
    res.render('index', {
        'messages': messages, 
        'zones': zones
    }); 
});

router.get("/message/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const message = messageController.getMessage(id);
    res.render("message", {
        message: message
    })
});

router.post("/new", (req, res) => {
    const text = req.body.text; 
    const user = req.body.username;
    const zone = req.body.timezone; 
    messageController.addMessage(text, user, zone);
    res.redirect("/messages"); 
});

module.exports = router; 
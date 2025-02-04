const db = require("../db/db")

exports.getMessages = () => {
    return db.getMessages(); 
}

exports.addMessage = (text, user) => {
    db.addMessage(text, user); 
}
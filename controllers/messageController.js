const db = require("../db/db")

exports.getMessages = () => {
    console.log(db.messages);
    return db.getMessages(); 
}

exports.addMessage = (text, user) => {
    db.addMessage(text, user); 
}
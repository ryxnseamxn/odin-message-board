const db = require("../db/db")

exports.getMessages = () => {
    return db.getMessages(); 
}

exports.getMessage = (id) => {
    return db.getMessage(id); 
}

exports.addMessage = (text, user, timezone) => {
    db.addMessage(text, user, timezone); 
}

exports.getZones = () => {
    return db.getZones(); 
}
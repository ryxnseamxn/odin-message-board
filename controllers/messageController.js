const db = require("../db/db")

const getMessages = () => {
    console.log(db.messages);
    return db.messages; 
}

const addMessage = () => {

}

module.exports = { getMessages, addMessage }; 
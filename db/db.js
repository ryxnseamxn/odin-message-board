class Storage {
    constructor() {
        this.storage = [
            {
                text: "Hi there!",
                user: "Amando",
                added: new Date()
            },
            {
                text: "Hello World!",
                user: "Charles",
                added: new Date()
            }
        ];

      }

      addMessage(text, user) {
        const date = new Date()
        this.storage.push({ text, user, date });
        console.log(this.storage);
      }
    
      getMessages() {
        return this.storage;
      }
}

module.exports = new Storage(); 
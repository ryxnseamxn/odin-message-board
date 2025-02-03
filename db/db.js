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

        this.id = 0;
      }

      addMessage(text, user) {
        const id = this.id;
        const date = new Date()
        this.storage[id] = { id, text, user, date };
        this.id++;
      }
    
      getMessages() {
        return this.storage;
      }
}

module.exports = new Storage(); 
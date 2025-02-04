const zoneinfo = require('zoneinfo')
const clock = require('world-clock')()

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

        this.zones = zoneinfo.listTimezones()
      }

      addMessage(text, user) {
        const timezone = this.getCountry(); 
        const localTime = clock.localDateTime(timezone);
    
        const date = new Date(localTime);
        
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        }).format(date);
    
        this.storage.push({ text, user, added: formattedDate }); 
        console.log(this.storage);
    }
    
    
      getMessages() {
        return this.storage;
      }

    getCountry() {
        return this.zones[Math.floor(Math.random() * this.zones.length)]; 
    }
}

module.exports = new Storage(); 
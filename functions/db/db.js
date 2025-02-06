const zoneinfo = require('zoneinfo')
const clock = require('world-clock')()

class Storage {
    constructor() {
        this.zones = zoneinfo.listTimezones()

        this.storage = [
            {
                id: 0,
                text: "Hi there!",
                user: "Amando",
                added: this.formatDate(new Date(), this.getCountry())
            },
            {
                id: 1,
                text: "Hello World!",
                user: "Charles",
                added: this.formatDate(new Date(), this.getCountry())
            }
        ];

        this.id = 2;
    }

    addMessage(text, user, timezone) {
        const id = this.id; 
        this.id++;
        const localTime = clock.localDateTime(timezone);
        
        const date = new Date(localTime);
        
        const formattedDate = this.formatDate(date, timezone)

        this.storage.push({ id: id, text: text, user: user, added: formattedDate }); 
    }
    
    
    getMessages() {
        return this.storage;
    }

    getMessage(id) {
        return this.storage.find(msg => msg.id === id);
    }

    getCountry() {
        return this.zones[Math.floor(Math.random() * this.zones.length)]; 
    }

    formatDate(date, timezone){
        return new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        }).format(date);
    }

    getZones(){
        return this.zones;
    }
}

module.exports = new Storage(); 
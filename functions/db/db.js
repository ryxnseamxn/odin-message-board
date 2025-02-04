const zoneinfo = require('zoneinfo')
const clock = require('world-clock')()

class Storage {
    constructor() {
        this.zones = zoneinfo.listTimezones()

        this.storage = [
            {
                text: "Hi there!",
                user: "Amando",
                added: this.formatDate(new Date(), this.getCountry())
            },
            {
                text: "Hello World!",
                user: "Charles",
                added: this.formatDate(new Date(), this.getCountry())
            }
        ];
        
        }

    addMessage(text, user) {
    const timezone = this.getCountry(); 
    const localTime = clock.localDateTime(timezone);

    const date = new Date(localTime);
    
    const formattedDate = this.formatDate(date, timezone)

    this.storage.push({ text, user, added: formattedDate }); 

}
    
    
    getMessages() {
    return this.storage;
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
}

module.exports = new Storage(); 
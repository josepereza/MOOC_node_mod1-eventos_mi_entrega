const MiEventEmitter = require('events');

    class EventEmitter extends MiEventEmitter{

        constructor(programa){
                super()
             this.programa=programa;
            }
    }






exports = module.exports = EventEmitter;
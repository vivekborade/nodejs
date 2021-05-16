const EventEmitter = require('events').EventEmitter;

class Pizza extends EventEmitter
{
    constructor(size = 1)
    {
        super();
        this.ovenTime = this.setOvenTime(size);
        this.maxIngredient = this.setMaxIngredient(size);
        this.ingrident = [];
        this.timeToReleasePizza = 1000;
    }

    setOvenTime(size)
    {
        return 5 * size * 10;
    }

    setMaxIngredient(size)
    {
        return size * 3;
    }

    isMaxIngredient()
    {
        return this.maxIngredient === this.ingrident.length; 
    }
    add(ingrident)
    {
        if(this.isMaxIngredient===true)
        {
            this.emit('maxIngredientReached');
        }
        else
        {
            this.ingrident.push(ingrident);
            this.emit('ingridentAdd',ingrident);
        }
        return this;
    }

    cook() {
        this.emit("cookStarted");

        setTimeout(() => {
          
            const releasePizza = setTimeout(() => {
            this.emit("charredPizza");
          }, this.timeToReleasePizza);


          this.emit("cookFinished", releasePizza);
        }, this.ovenTime);
    
        return this;
      }
}

module.exports = Pizza;
const Potion = require('../lib/Potion');

// player init
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() *5 + 7);
    this.agility = Math.floor(Math.random() *5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    
}

// get the player's stats
Player.prototype.getStats = function() {
    return {
        options: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// get the player's inventory
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

// get the player's health
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

// check if the player's alive
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

// manages player health loss
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    };
};

// check the player's attack value
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

// add potions to the player inventory
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
}

// use potions
Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
  
    switch (potion.name) {
    case 'agility':
        this.agility += potion.value;
        break;
    case 'health':
        this.health += potion.value;
        break;
    case 'strength':
        this.strength += potion.value;
        break;
    }
  };

module.exports = Player;
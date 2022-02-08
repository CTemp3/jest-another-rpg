const { expect } = require('@jest/globals');
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
    }
}

module.exports = Player;
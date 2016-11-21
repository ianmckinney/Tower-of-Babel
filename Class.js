
class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._health = 100;
    }
    damage() {
        this._health -= 10;
    }
    getHealth() {
        return this._health;
    }
    toString() {
         return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
    }
}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());

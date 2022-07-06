class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`I am ${this.name} the ninja! You killed my father, perepare to die.`)
    }

    showStats(){
        console.log(`Quiver in fear before me, with all ${this.strength} of my strength points; but do so quickly for with my ${this.speed} speed points you won't have much time to waste. Don't even try to chip away at my indomitable ${this.health} health points.`)
    }

    drinkSake(){
        console.log('Wow. So smooth. Very drink')
        this.health += 10;
        console.log(`${this.name}'s health is now: ${this.health}`)
        return this;
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Do not start nothing, and there will only ever be nothing. Y' heard.")
    }
}
// const ninja1 = new Ninja("Hyabusa", 10);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
const sensei1 = new Sensei("Snoop");
sensei1.speakWisdom();
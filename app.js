let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

let { log } = console;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpTest = document.querySelector("#xpTest");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.getElementById("monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
    {
        name: 'town square',
        buttonText: ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunc: [goStore, goCave, fightDragon],
        text: 'You are in the town square'
    },
    {
        name: 'store',
        buttonText: ["Buy 10 health (10 gold)", "Buy Weapon (30 gold)", "Go to town sqare"],
        buttonFunc: [buyHealth, buyWeapon, gotown],
        text: 'You enter the store'
    },
    {
        name: 'cave ',
        buttonText: ["Fight Slime", "Fight fanged beast", "Go to town sqare"],
        buttonFunc: [fightSlime, fightBeast, gotown],
        text: 'You enter the cave'
    },
    {
        name: 'fight ',
        buttonText: ["Attack", "Dodge", "Run"],
        buttonFunc: [attack, dodge, gotown],
        text: 'Ready to fight!'
    },

];

const weapons = [{ name: 'stick', power: '5' }, { name: 'dagger', power: '30' }, { name: 'claw hammer', power: '50' }, { name: 'sword', power: '100' }];

const monster = [{ name: 'slime', level: 2, health: '15' }, { name: 'fanged beast', level: 8, health: '60' }, { name: 'dragon', level: 20, health: '300' }];


const buttons = [button1, button2, button3];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    buttons.forEach((button, index) => {
        button.innerText = location.buttonText[index];
        button.onclick = location.buttonFunc[index];
    });
    text.innerText = location.text;
}


function gotown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);

}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        xpTest.innerText = health;
    } else {
        text.innerText = "You don't have enough money  to buy health"
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            goldText.innerText = gold;
            currentWeapon++;
            inventory.push(weapons[currentWeapon].name);
            text.innerText = `You bought a ${weapons[currentWeapon].name}`;
            text.innerText += `. In your inventory you have ${inventory}`

        } else {
            text.innerText = "You don't have enough money to buy weapon";
            button2.innerText = "Sell weapon for 15 gold";
            button2.sellWeapon();
        }

    } else {
        text.innerText = "You already have massive weapon!";
    }

}

function sellWeapon() {
    if (inventory.length > 1) {
        text.innerText = `you sold a ${inventory.shift()}`;
        text.innerText += `. In your inventory you have ${inventory}`
        gold += 15;
        goldText.innerText = gold;
    }
}

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();

}

function fightDragon() {
    fighting = 2;
    goFight();

}

function goFight(){
    update(locations[2]);
    monsterHealth = monster[fighting].health;
    monsterNameText.innerText = monster[fighting].name;
    monsterHealthText.innerText = monsterHealth;
    monsterStats.style.display = 'block';

}






function attack() {

}

function dodge() {

}





'use strict';

// 1-3

const stats = {
    hp: 75,
    mana: 50,
    strength: 3,
    agility: 70,
    intelligence: 90
}

const hero = {
    name: 'Laila',
    class: 'mage',
    level: 14,
    isAlive: true,
    stats

}

console.log('Весь герой:', hero);
console.log('Имя:', hero.name);
console.log('Класс:', hero.class);
console.log('Уровень:', hero.level);
console.log('Жив:', hero.isAlive);

console.log('объект stats: \n', hero.stats)
console.log('сила персонажа: ', hero.stats.strength)
console.log('интеллект, умноженный на 2: ', hero.stats.intelligence * 2)

// 4 

hero.inventory = ['staff', 'mana potion', 'spellbook', 'magic crystal']

console.log('весь инвентарь: ', hero.inventory)
console.log('первый предмет: ', hero.inventory[0])
console.log('последний предмет: ', hero.inventory[hero.inventory.length - 1])
console.log('количество предметов: ', hero.inventory.length) 

// 5

const enemy = {
    name: 'Jell',
    'critical hit chance': 0.15,
    'attack-speed': 2.5,
    ['damage-' + hero.class]: 50

}

// через точку обратиться не получится
// console.log(enemy.critical hit chance);
// console.log(enemy.attack-speed);
// console.log(enemy.damage-mage);

// правильно через квадратные скобки
console.log(enemy['critical hit chance']);
console.log(enemy['attack-speed']);
console.log(enemy['damage-' + hero.class]);

// 6 

hero.abilities = {
    attack: function() { return `${hero.name} атакует!`; },
    heal: () => { return `${hero.name} восстанавливает здоровье!`; },
    levelUp: () => { return `${hero.name} повышает уровень!`;}
}

console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());

// 7

hero.location = {
    region: 'Transylvania',
    city: 'Brasov',
    coordinates: {
        x: 120,
        y: 45,
        z: 8
    }
}

console.log('регион: ', hero.location.region);
console.log('z: ', hero.location.coordinates.z);

// 8

const villain = {
    name: 'Harry',
    class: 'warrior',
    level: 18,
    isAlive: true,

    stats: {
        hp: 100,
        mana: 20,
        strength: 80,
        agility: 40,
        intelligence: 25
    },

    inventory: ['sword', 'shield', 'health potion', 'armor'],

    abilities: {
        attack: function () {
            return `${villain.name} атакует!`;
        },

        heal: () => {
            return `${villain.name} восстанавливает здоровье!`;
        },

        levelUp: () => {
            return `${villain.name} повышает уровень!`;
        }
    },

    location: {
        region: 'Dark Lands',
        city: 'Blackstone',

        coordinates: {
            x: 50,
            y: 80,
            z: 15
        }
    }
}

console.log('имя героя:', hero.name)
console.log('имя злодея:', villain.name)

if (hero.stats.hp > villain.stats.hp) {
    console.log(`${hero.name} имеет больше здоровья`)
} else if (hero.stats.hp < villain.stats.hp) {
    console.log(`${villain.name} имеет больше здоровья`)
} else {
    console.log('у персонажей одинаковое количество здоровья')
}

console.log(`участники дуэли: ${hero.name} (${hero.inventory.join(', ')}) vs ${villain.name} (${villain.inventory.join(', ')})`)




import { Pokemon } from './pokemon.js';
import { createClickCounter, random, addLog } from './utils.js';
import { generateLog } from './logs.js';

const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn2');
const $logs = document.getElementById('logs');

const kickCounter = createClickCounter(6);
const specialCounter = createClickCounter(3);

const character = new Pokemon('Pikachu', 100, document.getElementById('health-character'), document.getElementById('progressbar-character'));
const enemy = new Pokemon('Charmander', 100, document.getElementById('health-enemy'), document.getElementById('progressbar-enemy'));

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

$btn.addEventListener('click', function () {
    if (kickCounter()) {
        const damageCharacter = random(20);
        const damageEnemy = random(20);

        character.changeHP(damageCharacter);
        enemy.changeHP(damageEnemy);

        const characterLog = generateLog(character, enemy, damageCharacter);
        const enemyLog = generateLog(enemy, character, damageEnemy);

        addLog(characterLog, $logs);
        addLog(enemyLog, $logs);
    }
});

$btn2.addEventListener('click', function () {
    if (specialCounter()) {
        const target = Math.random() < 0.5 ? character : enemy;
        const damage = 45;
        target.changeHP(damage);

        const log = generateLog(target, target === character ? enemy : character, damage);
        addLog(log, $logs);
    }
});


init();

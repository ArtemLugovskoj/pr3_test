const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn2');
const $logs = document.getElementById('logs');

const createClickCounter = (maxClicks) => {
    let count = 0;

    return () => {
        if (count < maxClicks) {
            count++;
            console.log(`Натиснень: ${count}, Залишилось натискань: ${maxClicks - count}`);
            return true; 
        } else {
            console.log("Максимальна кількість натискань досягнута.");
            return false; 
        }
    };
};

const kickCounter = createClickCounter(6);
const specialCounter = createClickCounter(3); 

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    renderHPLife() {
        this.elHP.innerText = `${this.damageHP} / ${this.defaultHP}`;
    },
    renderProgressbarHP() {
        this.elProgressbar.style.width = `${(this.damageHP / this.defaultHP) * 100}%`;
    },
    changeHP(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert(`Бедный ${this.name} проиграл бой!`);
            $btn.disabled = true;
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    renderHPLife() {
        this.elHP.innerText = `${this.damageHP} / ${this.defaultHP}`;
    },
    renderProgressbarHP() {
        this.elProgressbar.style.width = `${(this.damageHP / this.defaultHP) * 100}%`;
    },
    changeHP(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert(`Бедный ${this.name} проиграл бой!`);
            $btn.disabled = true;
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
};

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function addLog(log) {
    const logEntry = document.createElement('p');
    logEntry.innerText = log;
    $logs.prepend(logEntry);
}

$btn.addEventListener('click', function () {
    if (kickCounter()) {  
        const damageCharacter = random(20);
        const damageEnemy = random(20);

        character.changeHP(damageCharacter);
        enemy.changeHP(damageEnemy);

        const characterLog = generateLog(character, enemy, damageCharacter);
        const enemyLog = generateLog(enemy, character, damageEnemy);

        addLog(characterLog);
        addLog(enemyLog);
    }
});

function randomDamage() {
    return Math.random() < 0.5 ? character : enemy;
}

$btn2.addEventListener('click', function () {
    if (specialCounter()) { 
        const target = randomDamage();
        const damage = 45;
        target.changeHP(damage);

        const log = generateLog(target, target === character ? enemy : character, damage);
        addLog(log);
    }
});

init();
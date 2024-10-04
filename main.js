const $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: function() {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    renderHPLife: function() {
        this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    },
    renderProgressbarHP: function() {
        this.elProgressbar.style.width = (this.damageHP / this.defaultHP * 100) + '%';
    },
    changeHP: function(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
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
    renderHP: function() {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    renderHPLife: function() {
        this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    },
    renderProgressbarHP: function() {
        this.elProgressbar.style.width = (this.damageHP / this.defaultHP * 100) + '%';
    },
    changeHP: function(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.disabled = true;
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
};

$btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();

// 2 task
const $btn2 = document.getElementById('btn2');

function randomDamage() {
    return Math.random() < 0.5 ? character : enemy; 
}

$btn2.addEventListener('click', function () {
    console.log('Kick');
    const target = randomDamage();
    target.changeHP(45); 
});

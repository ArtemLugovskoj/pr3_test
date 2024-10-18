export class Pokemon {
    constructor(name, defaultHP, elHP, elProgressbar) {
        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = defaultHP;
        this.elHP = elHP;
        this.elProgressbar = elProgressbar;
    }

    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife() {
        this.elHP.innerText = `${this.damageHP} / ${this.defaultHP}`;
    }

    renderProgressbarHP() {
        this.elProgressbar.style.width = `${(this.damageHP / this.defaultHP) * 100}%`;
    }

    changeHP(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert(`Бедный ${this.name} проиграл бой!`);
            document.getElementById('btn-kick').disabled = true;
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
}

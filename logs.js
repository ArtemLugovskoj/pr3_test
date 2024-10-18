import { random } from './utils.js';

export function generateLog(attacker, target, damage) {
    const { name: charName, damageHP: charDamageHP, defaultHP: charDefaultHP } = attacker;
    const { name: enemyName } = target;

    const logs = [
        `${charName} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага.`,
        `${charName} поперхнулся, и за это ${enemyName} с испуга приложил прямой удар коленом в лоб врага.`,
        `${charName} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${charName} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар.`,
        `${charName} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком <вырезано цензурой> противника.`,
        `${charName} удивился, а ${enemyName} пошатнувшись влепил подлый удар.`,
        `${charName} высморкался, но неожиданно ${enemyName} провел дробящий удар.`,
        `${charName} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника.`,
        `${charName} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника.`,
        `${charName} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику.`
    ];

    const log = logs[random(logs.length) - 1];
    const lossInfo = `Завдано втрат: ${damage}, залишилось HP у ${enemyName}: ${target.damageHP}/${target.defaultHP}`;
    
    return `${log} ${lossInfo}`;
}

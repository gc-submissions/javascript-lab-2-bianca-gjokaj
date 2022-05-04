const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return (randNum === 0 ? opt1 : opt2);
}
console.log(chooseOption('opt1', 'opt2'));

function attackPlayer(health) {
    return health - randomDamage();
}
console.log(attackPlayer(100));

const logHealth = (player, health) => {
    return `${player} health: ${health}`
}
console.log(logHealth());

const logDeath = (winner, loser) => {
    return `${winner} defeated ${loser}`
}
console.log(logDeath());

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDead())

function fight(player1, player2, player1Health, player2Health) {
    while (attacker = chooseOption()) {
        
    }
    fight(player1, player2)

    if (attacker = player1) {
        
    }
}
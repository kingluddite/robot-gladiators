// console.log('js is working');
const playerName = window.prompt("What is you robot's name?");
let playerHealth = 100;
const playerAttack = 10;
let playerMoney = 10;

const enemyNames = ['Roborto', 'Amy Andoid', 'Robo Trumble'];
let enemyHealth = 50;
const enemyAttack = 12;

const fight = function(enemyName) {
        while (enemyHealth > 0 && playerHealth > 0) {
                const promptFight = window.prompt(
                        "Would you like to FIGHT or SKIP this battle? Enter 'f' or 's' to choose."
                );
                const lcPromptFight = promptFight.toLowerCase();

                // if user picks "skip" confirm and then stop the loop
                if (lcPromptFight === 's') {
                        // confirm user wants to skip
                        const confirmSkip = window.confirm("Are you sure you'd like to quit?");

                        // if true leave fight
                        if (confirmSkip) {
                                console.log(`${playerName} has decided to skip this fight. Goodbye!`);
                                // penalize for skipping
                                playerMoney -= 10;
                                console.log(`playerMoney, ${playerMoney}`);
                                break;
                        }
                }

                // battle code here
                // remove enemy's health by subtracting the amount set in the playerAttack variable
                enemyHealth -= playerAttack;
                console.log(
                        `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`
                );

                // check enemy's health
                if (enemyHealth <= 0) {
                        console.log(`${enemyName} has died!`);

                        // award player money for winning
                        playerMoney += 20;

                        // leave while() loop since enemy is dead
                        break;
                } else {
                        console.log(`${enemyName} still has ${enemyHealth} health left`);
                }

                // remove players's health by subtracting the amount set in the enemyAttack variable
                playerHealth -= enemyAttack;
                console.log(
                        `${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`
                );

                // check players's health
                if (playerHealth <= 0) {
                        console.log(`${playerName} has died!`);
                        // leave while() loop if player is dead
                        break;
                } else {
                        console.log(`${playerName} still has ${playerHealth} health left.`);
                }
        }
};

for (let i = 0; i < enemyNames.length; i += 1) {
        const pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
}

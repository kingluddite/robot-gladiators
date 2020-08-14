console.log("js is working");

const playerName = window.prompt("What is you robot's name?");
let playerHealth = 100;
const playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roborto";
let enemyHealth = 50;
const enemyAttack = 12;

const fight = function() {
  console.log("Welcome to Robot Gladiators!");

  const promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  console.log(promptFight);

  // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining"
  );
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  console.log(
    (enemyName =
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining.")
  );

  // check players's health
  if (playerHealth <= 0) {
    console.log(playerName + " has died!");
  } else {
    console.log(playerName + " still has " + playerHealth + " health left.");
  }

  // check enemy's health
  if (enemyHealth <= 0) {
    console.log(enemyName + " has died!");
  } else {
    console.log(enemyName + " still has " + enemyHealth + " health left");
  }
};

fight();

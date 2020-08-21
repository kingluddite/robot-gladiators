// console.log('js is working');
const playerName = window.prompt("What is you robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

const enemyNames = ['Roborto', 'Amy Andoid', 'Robo Trumble'];
let enemyHealth = 50;
const enemyAttack = 12;

const fight = function(enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'f' or 's' to choose.");
    if (promptFight === null) {
      return;
    }
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
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`);

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
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

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

// function to end the entire game
const endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    console.log(`Great job, you've survived the game! You now have a score of ${playerMoney}.`);
  } else {
    console.log(`You've lost your robot in battle.`);
  }
  console.log("The game has now ended. Let's see how you did");

  // ask player if they'd like to play again
  const playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    console.log('Thank you for playing Robot Gladiators! Come back soon!');
  }
};

const startGame = function() {
  debugger;
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (let i = 0; i < enemyNames.length; i += 1) {
    if (playerHealth > 0) {
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      console.log(`Welcome to Robot Gladiators! Round (${i + 1})`);

      // pick new enemy to fight based on the index of the enemyNames array
      const pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at that moment in the code
      //       debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    } else {
      console.log('You have lost your robot battle! Game over!');
      break;
    }
  }

  // after the for loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();

  // play again
  //   startGame();
};

// start game when page loads
startGame();

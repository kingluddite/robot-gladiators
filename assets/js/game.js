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

    // generate random damage value based on player's attack power
    let damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`);

    // check enemy's health
    if (enemyHealth <= 0) {
      console.log(`${enemyName} has died!`);

      // award player money for winning
      Math.max(0, playerMoney - 10);

      // leave while() loop since enemy is dead
      break;
    } else {
      console.log(`${enemyName} still has ${enemyHealth} health left`);
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);

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

const startGame = function() {
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
      enemyHealth = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      //       debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if user wants to use the store before next round
        const storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
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

const shop = function() {
  const shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case 'REFILL':
    case 'refill':
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerHealth += 20;
        playerMoney -= 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case 'UPGRADE':
    case 'upgrade':
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
        playerAttack += 6;
        playerMoney -= 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case 'LEAVE':
    case 'leave':
      window.alert('Leaving the store.');

      // do nothing, so function will end
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

const randomNumber = function(min, max) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// start game when page loads
startGame();

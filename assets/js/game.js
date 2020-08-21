// console.log('js is working');

const playerInfo = {
  name: window.prompt(`What is your robot's name?`),
  health: 100,
  attack: 10,
  money: 10,
  reset() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

const fight = function(enemy) {
  while (enemy.health > 0 && playerInfo.health > 0) {
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
        console.log(`${playerInfo.name} has decided to skip this fight. Goodbye!`);
        // penalize for skipping
        playerInfo.money -= 10;
        console.log(`playerInfo.money, ${playerInfo.money}`);
        break;
      }
    }

    // generate random damage value based on player's attack power
    let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    console.log(`${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining`);

    // check enemy's health
    if (enemy.health <= 0) {
      console.log(`${enemy.name} has died!`);

      // award player money for winning
      Math.max(0, playerInfo.money - 10);

      // leave while() loop since enemy is dead
      break;
    } else {
      console.log(`${enemy.name} still has ${enemy.health} health left`);
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
      `${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining.`
    );

    // check players's health
    if (playerInfo.health <= 0) {
      console.log(`${playerInfo.name} has died!`);
      // leave while() loop if player is dead
      break;
    } else {
      console.log(`${playerInfo.name} still has ${playerInfo.health} health left.`);
    }
  }
};

const startGame = function() {
  // reset player stats
  playerInfo.reset();

  for (let i = 0; i < enemyInfo.length; i += 1) {
    if (playerInfo.health > 0) {
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      console.log(`Welcome to Robot Gladiators! Round (${i + 1})`);

      // pick new enemy to fight based on the index of the enemyInfo array
      const pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      //       debugger;

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    console.log(`Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
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
      playerInfo.refillHealth();
      break;
    case 'UPGRADE':
    case 'upgrade':
      playerInfo.upgradeAttack();
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

const enemyInfo = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14),
  },
  {
    name: 'Amy Android',
    attack: randomNumber(10, 14),
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14),
  },
];

// start game when page loads
startGame();

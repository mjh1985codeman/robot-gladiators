// Pseudocode:
// "WIN" - Player robot has defeated all enemy-robots.
// -- Fight all enemy-robots.
// -- Defeat each enemy-robot.
// "LOSE" - Player robot's health is zero or less.

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
  // Alert Players that they are starting the round

// Confirm if player wants to FIGHT or SKIP the battle. 
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

    // remove enemy's health by subtracting the amount set in the playerAttack variable 
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

    // check enemy's health and alert status of enemy. 
    if(enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    /* Subtract the value of `enemyAttack` from the value of `playerHealth` and use that 
    result to update the value in the `playerHealth` variable. */
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

// If Player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      /* confirm player wants to skip. . .NOTE: window.confirm() is a built in browser function used for a simple "yes" or "no" response. . .
      IE: The browser poses the question and give the user option of "cancel" or "ok". . .if the puser hits "Ok" (or yes) on the browser
      then the "Boolean Value" of (TRUE) will be stored for the variable "confirmSkip" */
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to leave this fight. Goodbye!");
        // subtract money from playerMoney as a penalty for skipping the fight
        playerMoney = playerMoney - 2;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
      window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option.  Try again!");
  }


}
  



//fight();

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
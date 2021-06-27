// Pseudocode:
// "WIN" - Player robot has defeated all enemy-robots.
// -- Fight all enemy-robots.
// -- Defeat each enemy-robot.
// "LOSE" - Player robot's health is zero or less.

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

//***************************************************************************************** */
/*This is called an 'Array' Declaration. . .the Brackets hold the "Array Elements"
Array elements are stored in the array at specific indexes. You can think of these indexes 
like the tabs that organize the contents of a file drawer. When a particular index is called, the value
stored at that index is retrieved. The first index in an array is zero, and the indexes increment by 1 
for each corresponding element. So the second element will be at index 1, the third element will be at index 2, and so on.
So To retrieve the first element in the array, we'll use the following statement:

console.log(enemyNames[0]);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length); //<--- This can be used to find the length of an array in the console.

//**************************************************************************************** */
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}

/* "for loops statements" enable us to loop through the array no matter the length which can be used whenever
we need the same operation done repetitively, so it's NOT JUST for arrays.  Here is an example: 

**This is the template for 'for statements'**

for([initial expression]; [condition]; [increment expression]) {
  statement
}
example:

for(var i = 0; i < 3; i++) {
  console.log("apple");
}

Syntax Breakdown: the 'for' loop is a special type of statement called a 'control flow'.  The control flow
is the order in which the computer executes statements in a JavaScript file or script, which normally runs sequentially
from the first line to the last line.  Control flow statements such as conditional statements or 'for' statements, change 
the control flow based on the statement's conditions. 
*/

var enemyHealth = 50;

var enemyAttack = 12;

/* this is another way to create a function called "function declaration":

function fight() {
    window.alert("Welcome to Robot Gladiators!");
} 

*/

// create function. . .This method is called Function Expression.

var fight = function() {
  // Alert Players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
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
  


//To execute the function "fight"

//fight();
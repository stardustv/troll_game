// Troll Game Project 7/22/2020

"use strict";

// Set up an evemt listener for the button to trigger the game
document.getElementById("button").addEventListener("click", trollBattle);

// Function to run the game
function trollBattle(){

	// Initial prompt question for the user stored in a variable
	var action = window.prompt("You're walking through the forest minding your own business and A TROLL SUDDENLY APPEARS!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();

	// Switch statement to handle the initial player's choice
	switch(action) {
		case "FIGHT":
			var skill = window.prompt("Are you a skilled warrior? (YES or NO)").toUpperCase();
			var strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();

			// IF statement that analyzes the user's responses
			if(skill === "YES" || strong === "YES") {

				// write the positive result to the page
				document.getElementById("result").innerHTML = "You can either be stronger or more skilled than a troll to survive!<br/>You live another day!";

				// clear any bad messages from the page
				document.getElementById("death").innerHTML = "";

				// play the winning audio file
				document.getElementById("win").play(); 
			} else {
				// clear any good messages from the page
				document.getElementById("result").innerHTML = "";

				// write the negative result to the page
				document.getElementById("death").innerHTML = "You're not strong OR smart? Why did you fight a troll?</br>You have died!";

				// play the losing audio file
				document.getElementById("lose").play();

			}

			break;
		case "RUN":
			var fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			// IF statement that analyzes the user's responses
			if(fast === "YES") {

				// write the positive result to the page
				document.getElementById("result").innerHTML = "Your speed has allowed you to survive.<br/>But can you live with your cowardice?";

				// clear any bad messages from the page
				document.getElementById("death").innerHTML = "";

				// play the winning audio file
				document.getElementById("win").play();

			} else {
				// clear any good messages from the page
				document.getElementById("result").innerHTML = "";

				// write the negative result to the page
				document.getElementById("death").innerHTML = "You coward, if you're going to run, atleast be fast...</br>You have died!";

				// play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		case "BRIBE":
			var money = window.prompt("You have to pay the troll-toll.\nDo you have money?(YES or NO)").toUpperCase();

			// If you have money, continue asking how much
			if(money === "YES"){
				var amount = window.prompt("How much money do you have?\n(Please enter a NUMERIC VALUE!)");
				// convert the string to an integer
				amount = parseInt(amount);

				// Check to see if the amount is enough to survive
				if(amount > 50){
					// write the positive result to the page
					document.getElementById("result").innerHTML ="Great job! The troll is happy!<br/>You get to pass with your life!";

					// clear any bad messages from the page
					document.getElementById("death").innerHTML = "";

					// play the winning audio file
					document.getElementById("win").play();

				} else { 
						// clear any good messages from the page
						document.getElementById("result").innerHTML = "";
						
						// write the negative result to the page
						document.getElementById("death").innerHTML = "The troll needs more than that to let you pass!</br>You have died!";

						// play the losing audio file
						document.getElementById("lose").play();
					}

			} else { // if you have no money, you lose
				// clear any good messages from the page
				document.getElementById("result").innerHTML = "";

				// write the negative result to the page
				document.getElementById("death").innerHTML = "What were you going to bribe with, your looks?</br>You have died!";

				// play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		default:
			window.alert("Please enter a valid choice!");
			trollBattle();
			break;
	} // end of switch statement
} // end of trollBattle() function
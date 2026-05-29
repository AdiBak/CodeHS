var RADIUS = 100;
var OFF_SCREEN = -200;
var DELAY = 1000;
//var WIN_SCORE = 20;

var ball;

var game = true;

var score = 10;
var scoreText;

var canFall = false;


// This is the entrance to our program,
// the crazy ball game.
function start(){
	setupBall();
	setTimer(changeBall, DELAY);
    mouseClickMethod(clickHandler);
	
	scoreText = new Text(score);
	scoreText.setPosition(0, getHeight());
	add(scoreText);
}

// Handle a click. We get the element
// at that location. If it was a green
// circle then we give the user a point,
// otherwise we take away a point. We
// update the score each round as well.
function clickHandler(e){
	var elem = getElementAt(e.getX(), e.getY());
	if(elem != null){
	    if (elem.getType() == "Circle"){
	        if (elem.getColor() == Color.green){
    		    score++;
    		    RADIUS -= 5;
    		    elem.setRadius(RADIUS);
	        }
	        if (elem.getColor() == Color.red){
	            score--;
	            RADIUS++;
	            elem.setRadius(RADIUS);
	        }
	        if (elem.getColor() == Color.yellow){
	            score++;
	            RADIUS--;
	            elem.setRadius(RADIUS);
	        }
	    }
	}else{
	    RADIUS += 5;
	    ball.setRadius(RADIUS);
		score--;
	}
	
	if(score == 0 || ball.getRadius() >= getWidth() * 3/4){
	    removeAll();
		displayMessage("You Lose :(");
	}
	if(ball.getRadius() <= 8){
		displayMessage("You Win :)");
		canFall = true;
	}
	
	scoreText.setText(score);
}

// Display a message on the screen 
// at the end of the game, and stop
// the game timer.
function displayMessage(text){
	stopTimer(changeBall);
	var msg = new Text(text);
	msg.setPosition(getWidth()/2 - msg.getWidth()/2, 200);
	add(msg);
}

// This changes some properties of the
// ball-- it sets its position to a random
// location on the screen, and changes 
// its color to red, green, or yellow.
function changeBall(){
	var x = Randomizer.nextInt(ball.getRadius(),
		getWidth() - ball.getRadius());
	var y = Randomizer.nextInt(ball.getRadius(), getHeight() - ball.getRadius());
	
	ball.setPosition(x, y);
	changeColor();
	
	if (canFall){
	    ball.move(0, 3);
	}
}

// This function changes the color of the 
// ball by picking a random number: 0, 1 
// or 2, and then using that number to 
// pick a color.
function changeColor(){
	var colorCode = Randomizer.nextInt(0, 2);
	var color;
	if(colorCode == 0){
		color = Color.red;
	}else if(colorCode == 1){
		color = Color.yellow;
	}else{
		color = Color.green;
	}
	
	ball.setColor(color);
}

// This does the initial setup of the 
// ball, and places it offscreen.
function setupBall(){
	ball = new Circle(RADIUS);
	ball.setPosition(OFF_SCREEN, OFF_SCREEN);
	add(ball);
}

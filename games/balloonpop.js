var WIDTH = 100;
var HEIGHT = 250;
var radius = 25;
var foodRadius = 27.5;
//var player = new Circle(radius);
var DELAY = 50;
var lvl = 1;
var sky = new Color(193, 234, 255);


var dy = 5;

var background = new Rectangle(getWidth(), getHeight());
background.setPosition(0, 0);
background.setColor(sky);
add(background);

var score = 0;
var numLives = 3;

var livesTxt = new Text("Lives: " + numLives, "20pt Arial");
livesTxt.setPosition(0, livesTxt.getHeight());
livesTxt.setColor(Color.RED);
add(livesTxt);

var lvlTxt = new Text("Level: " + lvl);
lvlTxt.setPosition(0, lvlTxt.getHeight() * 2);
add(lvlTxt);

var scoreTxt = new Text(score, "20pt Arial");
scoreTxt.setPosition(0, getHeight() - 3);
add(scoreTxt);


var food = new Circle(foodRadius);
food.setPosition(Randomizer.nextInt(2 * foodRadius, getWidth() - foodRadius), -foodRadius);
food.setColor(Color.ORANGE);
add(food);

function start(){
    setTimer(dropFood, DELAY);
    mouseClickMethod(eatFood);
}

function dropFood(){
    food.move(0, dy);
    if (food.getY() > getHeight()){
        numLives--;
        livesTxt.setText("Lives: " + numLives);
        food.setPosition(Randomizer.nextInt(2 * foodRadius, getWidth() - foodRadius), -foodRadius);
    }
    if (score % 7 == 0){
        levelUp();
    }
    if (numLives == 0){
        stopTimer(dropFood);
        gameOverMsg();
    }
    if (lvl > 300){
        stopTimer(dropFood);
        winMsg();
    }
}



function eatFood(e){
    var el = getElementAt(e.getX(), e.getY());
    if (el != null){
        if (el.getType() == 'Circle'){
            remove(el);
            score++;
            scoreTxt.setText(score);
            el.setPosition(Randomizer.nextInt(2 * foodRadius, getWidth() - foodRadius), -foodRadius);
            el.move(0, dy);
            add(el);
        }
    }
}

function gameOverMsg(){
    var over = new Text("Game over", "30pt Arial");
    over.setPosition(getWidth()/2 - over.getWidth()/2, getHeight()/2);
    over.setColor(Color.PURPLE);
    add(over);
}

function levelUp(){
    lvl++;
    lvlTxt.setText("Level" + lvl);
    dy += 0.0125;
}

function winMsg(){ 
    var winTxt = new Text("You win!", "30pt Arial");
    winTxt.setPosition(getWidth()/2 - winTxt.getWidth()/2, getHeight()/2);
    winTxt.setColor(Color.PURPLE);
    add(winTxt);
    
    var baseScore = new Text("Score: " + score, "30pt Arial");
    baseScore.setPosition(getWidth()/2 - baseScore.getWidth()/2, getHeight()/2 + baseScore.getHeight());
    baseScore.setColor(Color.PURPLE);
    add(baseScore);
}

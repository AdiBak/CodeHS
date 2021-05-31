var dino = new Rectangle(25, 25);
dino.setPosition(Randomizer.nextInt(-dino.getWidth()), Randomizer.nextInt(0, getHeight() - dino.getHeight()));
add(dino);


var line1 = new Line(0, 0, getWidth(), 0);
var line2 = new Line(getWidth()/2, 0, getWidth()/2, getHeight());
var target = new Circle(10);

var numHits = 0;
var numTries = 0;

var accuracy;

var score = 0;


var scoreTxt = new Text("Score: " + score, "13pt Arial");
scoreTxt.setPosition(3, scoreTxt.getHeight());
add(scoreTxt);

var accuTxt = new Text("Accuracy: " + accuracy + "%", "13pt Arial");
accuTxt.setPosition(getWidth()/2 - accuTxt.getWidth()/2, accuTxt.getHeight());
add(accuTxt);
 
function start(){
    mouseClickMethod(putTarget);
    setTimer(moveDino, 30);
}

function putTarget(e){
    var el = getElementAt(e.getX(), e.getY());
    if (el != null){
        if (el.getType() == "Rectangle"){
            addScore(100);
            addHits(1);
            addTries(1);
            dino.setPosition(-dino.getWidth(), Randomizer.nextInt(0, getHeight() - dino.getHeight()));
        }
    } else {
        addTries(1);
    }
    updateCounter();
}

function moveDino(){
    var dx = 5;
    var dy = Randomizer.nextFloat(-1, 1);
    dino.move(dx, dy);
    if (dino.getX() > getWidth()){
        dino.setPosition(-dino.getWidth(), Randomizer.nextInt(0, getHeight() - dino.getHeight()));
    }
}

function updateCounter(){
    scoreTxt.setText("Score: " + score);
    accuTxt.setText("Accuracy: " + getAccuracy() + "%");
}

function getAccuracy(){
    if (numHits == 0){
        return 0;
    }
    
    var accuracy = Math.round(100 * (numHits/numTries));    
    if (accuracy <= 100){
        return accuracy;
    }
}

function addHits(amount){
    numHits += amount;
}

function addTries(integer){
    numTries += integer;
}

function addScore(y){
    score += y;
}

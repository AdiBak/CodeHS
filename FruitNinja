var cir = [];
var rects = [];

var numCir = 4;
var numRect = 4;

var dy;
var dx;
var txt;

var target = 50;
var tarT = new Text("Target: " + target);
tarT.setPosition(10, tarT.getHeight());
add(tarT);

var multi = 500;

var score = 0;
var scTxt = new Text("Score: " + score, "20pt Arial");
scTxt.setPosition(1, getHeight() - scTxt.getHeight() );
add(scTxt);

var timer = 500;
var timeTxt = new Text("Timer: " + timer, "20pt Arial");
timeTxt.setPosition(getWidth() - timeTxt.getWidth() * 5/4, getHeight() - timeTxt.getHeight());
add(timeTxt); 

var lvl = 1;
var lvltxt = new Text("Level: " + lvl, "20pt Arial");
lvltxt.setPosition(getWidth()/2 - lvltxt.getWidth() * 2/3, getHeight() - lvltxt.getHeight());
add(lvltxt);

function start(){
    addFood();
    setTimer(game, 50);
    mouseMoveMethod(slice);
}

function slice(e){
    var el = getElementAt(e.getX(), e.getY());
    if (el != null){
        if (el.getType() == "Circle"){
            el.setPosition(-el.getRadius(), getHeight()/4 + Randomizer.nextInt(0, getHeight()/2));
            score++;
            scTxt.setText("Score: " + score);
        } 
        if (el.getType() == "Rectangle"){
            el.setPosition(-el.getWidth()/2, getHeight()/4 + Randomizer.nextInt(0, getHeight()/2));
            score++;
            scTxt.setText("Score: " + score);
        }
    }
}

function addFood(){
    for (var i = 0; i < numCir; i++){
        var doi = new Circle(Randomizer.nextInt(20, 35));
        doi.setPosition(Randomizer.nextInt(-doi.getRadius(), -getWidth() + doi.getRadius()), getHeight()/4 + Randomizer.nextInt(0, getHeight()/2));
        doi.setColor(Randomizer.nextColor());
        add(doi);
        cir.push(doi);
    }
    for (var i = 0; i < numRect; i++){
        var yeti = new Rectangle(Randomizer.nextInt(20, 65), Randomizer.nextInt(20, 30));
        yeti.setPosition(-yeti.getWidth(), getHeight()/2 + Randomizer.nextInt(0, getHeight()/4));
        yeti.setColor(Randomizer.nextColor());
        add(yeti);
        rects.push(yeti);
    }
}

function game(){
    dy = Randomizer.nextInt(-4, 4);
    dx = 5;
    for (var i = 0; i < cir.length; i++){
        var part = cir[i];
        part.move(dx, dy);
        if (part.getX() > getWidth()){
            part.setPosition(-part.getRadius(), getHeight()/4 + Randomizer.nextInt(0, getHeight()/2));
            part.setColor(Randomizer.nextColor());
        }
    }
    for (var i = 0; i < rects.length; i++){
        var cov = rects[i];
        cov.move(dx, dy);
        if (cov.getX() > getWidth()){
            cov.setPosition(-cov.getWidth()/2, getHeight()/4 + Randomizer.nextInt(0, getHeight()/2));
            cov.setColor(Randomizer.nextColor());
        }
    }
    timer--;
    timeTxt.setText("Timer: " + timer);
    if (timer == 0){
        if (score > target){
            stopTimer(game);
            refresh();
            txt = new Text("Click to advance to next level!", "15pt Courier Sans");
            txt.setPosition(getWidth()/2 - txt.getWidth()/2, getHeight()/2);
            add(txt);
            mouseClickMethod(advance);
            lvl++;
            lvltxt.setText("Level: " + lvl);
        } else {
            stopTimer(game);
            gameOver();
        }
        multi += 20;
        timer += 2 * multi;
        target += target;
        tarT.setText("Target: " + target);
        println(timer);
        println(target);
    }
}

function refresh(){
    for (var i = 0; i < cir.length; i++){
        var part = cir[i];
        part.setPosition(Randomizer.nextInt(-part.getRadius(), -getWidth() + part.getRadius()), getHeight()/4 + Randomizer.nextInt(0, getHeight()/2));
    }
    for (var i = 0; i < rects.length; i++){
        var lik = rects[i];
        lik.setPosition(-lik.getWidth(), getHeight()/2 + Randomizer.nextInt(0, getHeight()/4));
    }
}

function gameOver(){
    var ov = new Text("Game over. You didn't slice enough fruit!", "15pt Arial");
    ov.setPosition(getWidth()/2 - ov.getWidth()/2, getHeight()/2);
    add(ov);
}

function advance(e){
    remove(txt);
    setTimer(game, 50);
    
}

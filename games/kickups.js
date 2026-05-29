var ball = new Circle(30);
ball.setPosition(getWidth()/2, getHeight() - ball.getRadius() - 5);
add(ball);

var speed = 0;

var GRAV = 1;
var velo = 0;

var score = 0;
var txt = new Text(score, "17pt Arial");
txt.setPosition(txt.getWidth(), txt.getHeight() * 3/2);
add(txt);

function start(){
    setTimer(jump, 40);    
}

function jump(){
    mouseClickMethod(detect);
    if (ball.getX() < getWidth() - ball.getRadius() - 1 && ball.getX() > ball.getRadius() + 1){
        ball.move(speed, velo);
    } else {
        ball.setPosition(getWidth()/2, getHeight() - ball.getRadius() - 5);
        score = 0;
    }
    
    if (ball.getY() > getHeight() - ball.getRadius()){
        velo = 0;
        //stopTimer(jump);
        score = 0;
        ball.setPosition(getWidth()/2, getHeight() - ball.getRadius() - 5);
        
    } else {
        velo += GRAV;
        score++;
        txt.setText(score);
    }
}

function detect(e){
    var el = getElementAt(e.getX(), e.getY());
    if (el != null){
        if (el.getType() == "Circle"){
            speed = Randomizer.nextInt(-3, 3);
            velo = -16;
        }
    }
    
}

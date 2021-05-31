var grid = 100;

var arr = [];

var cir = new Circle(20);

var count = 0;
var del = 20;

var score = 0;
var txt = new Text("Score: " + score, "19pt Arial");
txt.setPosition(getWidth()/6, getHeight() - txt.getHeight());
add(txt);

var timer = 90;
var left = new Text("Time: " + timer, "18pt Arial");
left.setPosition(getWidth() - left.getWidth() - 59, getHeight() - left.getHeight());
add(left);

var gamer = false;


function start(){
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            var ball = new Circle(20);
            ball.setPosition(j * ball.getRadius() * 6 + getWidth()/5, i * ball.getRadius() * 5 + getHeight()/4);
            ball.time = 10;
            add(ball);
            arr.push(ball);
        }
    }
    cir.setPosition(getWidth()/5, getHeight()/4);
    cir.setColor(Color.green);
    add(cir);
    
    setTimer(game, 100);
    mouseClickMethod(onMC);
    
    
        
}

function onMC(e){
    if (!gamer){
        var el = getElementAt(e.getX(), e.getY());
        if (el != null){
            if (el.getType() == "Circle"){
                if (el.getColor() == Color.green){
                    score++;
                    txt.setText("Score: " + score);
                } else {
                    score--;
                    txt.setText("Score: " + score);
                }
            }
        } 
    } 
}

function game(){
    var x = Randomizer.nextInt(0, 8);
    var cur = arr[x];
    if (Randomizer.nextInt(0, 100) < 10){
        cir.setPosition(cur.getX(), cur.getY());
    }
    
    count++;
    if (count == 10){
        timer--;
        left.setText("Time: " + timer);
        count = 0;
    }
    
    if (timer == 0){
        gamer = true;
        shrink();
        stopTimer(game);
        cir.setColor(Color.black);
    }
    
}

function shrink(){
    var l1 = new Line(getWidth()/5, getHeight()/4, getWidth()/5, 300);
    l1.setLineWidth(20);
    add(l1);
    
    var l2 = new Line(getWidth()/2, getHeight()/4, getWidth()/2, 300);
    l2.setLineWidth(20);
    add(l2);
    
    var mid = new Line(getWidth()/5, 220, getWidth()/2, 220);
    mid.setLineWidth(20);
    add(mid);
    
    var l3 = new Line(arr[2].getX(), getHeight()/4, arr[2].getX(), 300);
    l3.setLineWidth(20);
    add(l3);
}

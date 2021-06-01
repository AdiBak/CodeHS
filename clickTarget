var score = 0;
var points;

var target;
var txt;

var arr = [];


var timer = 500;
var yo = new Text("Time: " + timer, "14pt Arial");
yo.setPosition(5, yo.getHeight() + 5);
add(yo);

var num = 100;

function start(){
    target = Randomizer.nextInt(5, 30);
    txt = new Text(target, "20pt Arial");
    txt.setPosition(getWidth()/2 - txt.getWidth()/2, getHeight()/2);
    add(txt);
    
    points = new Text("Score: " + score, "18pt Arial");
    points.setPosition(getWidth()/2 - points.getWidth()/2, getHeight() * 3/4);
    add(points);
    
    mouseClickMethod(addNSubtract);
    setTimer(countD, 70);

}

function addNSubtract(e){
    if (target > 0 && timer > 0){
        target--;
        txt.setText(target);
        
        
        score++;
        points.setText("Score: " + score);
    }
    if (target == 0){
        target = Randomizer.nextInt(5, 30);
        txt.setText(target);
    }
}

function countD(){
    timer--;
    yo.setText(timer);
    if (timer == 0){
        stopTimer(countD);
        if (score >= 100){
            for (var i = 0; i < num; i++){
                var conf = new Circle(Randomizer.nextInt(2, 5));
                conf.setPosition(Randomizer.nextInt(0, getWidth()), 0);
                conf.setColor(Randomizer.nextColor());
                conf.dx = Randomizer.nextFloat(-2, 2);
                conf.dy = Randomizer.nextFloat(2, 5);
                add(conf);
                arr.push(conf);
            }
            setTimer(confetti, 100);
        }
    
    }
}

function confetti(){
    for (var i = 0; i < arr.length; i++){
        var par = arr[i];
        par.move(par.dx, par.dy);
        if (par.getY() > getHeight()){
            par.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()/4));
        }
    }
}

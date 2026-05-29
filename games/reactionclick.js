var time = 0;
var txt = new Text(time, "16pt Arial");
txt.setPosition(20, getHeight() - 20);
add(txt);

var inst = new Text("Click the circle when it turns green!", "13pt Arial");
inst.setPosition(80, getHeight() - 30);
add(inst);

var times = [];

var avg = 0;

var trial = 1;

var base = new Circle(100);
base.setPosition(getWidth()/2, getHeight()/3);

add(base);

var reset = false;

var COUNT;

function start(){
    setTimer(game, 1);    
    mouseClickMethod(click);
    
}

function click(e){
    var el = getElementAt(e.getX(), e.getY());
    if (el != null){
        if (el.getType() == "Circle" && el.getColor() == Color.green){
            COUNT = false;
            var secs = time/100;
            println("Time " + trial + ": " + secs + " seconds");
            times.push(secs);
            trial++;
            reset = true;
            
        }
    }
}


function game(){
    if (Randomizer.nextInt(0, 100) == 2){
        COUNT = true;
        base.setColor(Color.green);
    }
    
    if (COUNT){
        time++;
        txt.setText(time);
    }
    
    if (reset){
        time = 0;
        txt.setText(time);
        base.setColor(Color.black);
        base.setPosition(Randomizer.nextInt(100, 300), Randomizer.nextInt(100, 270));
        reset = false;
    }
    
    if (trial == 10){
        stopTimer(game);
        for (var w = 0; w < times.length; w++){
            avg += times[w];
        }
        var dig = avg/times.length;
        println("Average reaction time: " + dig);
    }
}

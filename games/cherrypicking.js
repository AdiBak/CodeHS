var score = 0;
var time = 10;
var lvltar = 20;

var txt = new Text("Score: " + score, "17pt Arial");
txt.setPosition(5, txt.getHeight() + 3);
add(txt);

var timer = new Text("Time: " + time, "17pt Arial");
timer.setPosition(5, timer.getHeight() * 2 + 2);
add(timer);

var isG = true;

var c = 0;

var basket;
var grass;

var arr = [];

function start(){
    basket = new Rectangle(getWidth()/2, getHeight()/4);
    basket.setPosition(getWidth()/2 - basket.getWidth()/2, getHeight()/5);
    basket.setColor(Color.orange);
    add(basket);
    
    grass = new Rectangle(getWidth(), getHeight()/3);
    grass.setPosition(0, getHeight() - grass.getHeight());
    grass.setColor(Color.green);
    add(grass);
    
    mouseClickMethod(collect);
    setTimer(game, 1000);
    
    
}

function collect(e){
    if (isG){
        var el = getElementAt(e.getX(), e.getY());
        if (el != null && el.clicked == false){
            if (el.getType() == "Circle"){
                score++;
                txt.setText("Score: " + score);
                el.setPosition(Randomizer.nextInt(basket.getX() + el.getRadius(), basket.getX() + basket.getWidth() - el.getRadius()),
                               Randomizer.nextInt(basket.getY() + el.getRadius(), basket.getY() + basket.getHeight() - el.getRadius()));
                               
             //   el.setColor(Color.red);
                
                time++;
                timer.setText("Time: " + time);
            }
        }
        if (score == lvltar){
            time += 5;
            timer.setText("Time: " + time);
            lvltar += 20;
        }
    }
}

function game(){
    if (time > 0){
        time--;
        timer.setText("Time: " + time);
        if (time > 30){
            stopTimer(game);
            isG = false;
            var youwin = new Text("You win!");
            youwin.setPosition(getWidth()/2 - youwin.getWidth()/2, getHeight()/2 + youwin.getHeight());
            add(youwin);
        }
    } else {
        stopTimer(game);
        isG = false;
        var gameover = new Text("Game Over");
        gameover.setPosition(getWidth()/2 - gameover.getWidth()/2, getHeight()/2 + gameover.getHeight());
        add(gameover);
    }
    var cherry = new Circle(10);
    cherry.setPosition(Randomizer.nextInt(cherry.getRadius(), getWidth() - cherry.getRadius()), Randomizer.nextInt(grass.getY() + cherry.getRadius(), getHeight() - cherry.getRadius()));
    cherry.setColor(Color.red);
    cherry.sek = 0;
    cherry.clicked = false;
    add(cherry);
    arr.push(cherry);
    
   
   
    for (var i = 0; i < arr.length; i++){
        var cur = arr[i];
        cur.sek++;
        if (cur.sek == 3){
            cur.clicked = true;
            if (cur.getY() > getHeight()/2){
                cur.setColor(Color.black);
            }
            
        }
    }
}

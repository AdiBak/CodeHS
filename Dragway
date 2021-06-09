var arrL = [];
var arrR = [];

var player = new Circle(20);
player.setPosition(getWidth()/2, 400);
add(player);

var lCount = 0;
var rC = 0;

var multi = 1;

var target = 10;
var lAmount = 60;
var rAmount = 60;
var cAmount = 60;

var co = 0;
var cArr = [];

var score = 0;
var txt = new Text(score, "13pt Arial");
txt.setPosition(player.getX() - txt.getWidth()/2, player.getY() + txt.getHeight()/2);
txt.setColor(Color.CYAN);
add(txt);

function start(){
    mouseDragMethod(onDrag);    
    setTimer(game, 50);
}

function onDrag(e){
    player.setPosition(e.getX(), e.getY());
    txt.setPosition(e.getX() - txt.getWidth()/2, e.getY() + txt.getHeight()/2);
}

function game(){
    lCount++;
    if (lCount == lAmount){
        var ob = new Rectangle(Randomizer.nextInt(getWidth()/4, getWidth()/2.25), 30);
        ob.setPosition(0, 0);
        ob.setColor(Color.BLUE);
        ob.dy = Randomizer.nextFloat(3, 6);
        add(ob);
        lCount = 0;
        arrL.push(ob);
    }
    rC++;
    if (rC == rAmount){
        var lo = new Rectangle(Randomizer.nextInt(getWidth()/4, getWidth()/2.25), 30);
        lo.setPosition(getWidth() - lo.getWidth(), 0);
        lo.setColor(Color.BLUE);
        lo.dy = Randomizer.nextFloat(3, 6);
        add(lo);
        rC = 0;
        arrR.push(lo);
    }
    for (var i = 0; i < arrR.length; i++){
        var cu = arrR[i];
        cu.move(0, cu.dy);
        if (cu.getY() + cu.getHeight()/2 > getHeight()){
            remove(cu);
        }
    }
    for (var i = 0; i < arrL.length; i++){
        var pa = arrL[i];
        pa.move(0, pa.dy);
        if (pa.getY() + pa.getHeight()/2 > getHeight()){
            remove(pa);
        }
    }
    co++;
    if (co == cAmount){
        var coin = new Circle(10);
        coin.setPosition(Randomizer.nextInt(coin.getRadius(), getWidth() - coin.getRadius()), Randomizer.nextInt(getHeight()/4, getHeight()/2));         
        coin.setColor(Color.YELLOW);
        add(coin);
        co = 0;
        cArr.push(coin);
    }
    for (var i = 0; i < cArr.length; i++){
        var yoyo = cArr[i];
        yoyo.move(0, 3);
        if (yoyo.getY() > getHeight()){
            remove(yoyo);
        }
    }
    var el = getCollidingObject();
    if (el != null){
        if (el.getType() == "Rectangle"){
            stopTimer(game);
        }
        if (el.getType() == "Circle"){
            remove(el);
            score += multi;
            txt.setText(score);
        }
    }
    if (score > target){
        if (lAmount >= 30){
            lAmount -= 5;
        }
        if (rAmount >= 30){
            rAmount -= 5;
        }
        target += 15;
    }
    if (score > 15 && score <= 25){
        multi = 2;
    }
    if (score > 25 && score <= 35){
        multi = 4;
    }
    if (score > 35){
        multi = 8;
    }
    if (player.getY() > getHeight()){
        player.setPosition(getWidth()/2, getHeight() * 4/5);
    }
    player.move(0, 3);
    txt.move(0, 3);
}

function getCollidingObject(){
    var topLeft = getElementAt(player.getX() - player.getRadius() - 1, player.getY() - player.getRadius() - 1);
    if (topLeft != null){
        return topLeft;
    }
    
    var topRight = getElementAt(player.getX() + player.getRadius() + 1, player.getY() - player.getRadius() - 1);
    if (topRight != null){
        return topRight;
    }
    
    var bottomLeft = getElementAt(player.getX() - player.getRadius() - 1, player.getY() + player.getRadius() + 1);
    if (bottomLeft != null){
        return bottomLeft;
    }
    
    var bottomRight = getElementAt(player.getX() + player.getRadius() + 1, player.getY() + player.getRadius() + 1);
    if (bottomRight != null){
        return bottomRight;
    }
    
    var top = getElementAt(player.getX(), player.getY() - player.getRadius() - 1);
    if (top != null){
        return top;
    }
    
    var bottom = getElementAt(player.getX(), player.getY() + player.getRadius() + 1);
    if (bottom != null){
        return bottom;
    }
    
    var left = getElementAt(player.getX() - player.getRadius() - 1, player.getY());
    if (left != null){
        return left;
    }
    
    var right = getElementAt(player.getX() + player.getRadius() + 1, player.getY());
    if (right != null){
        return right;
    }
        
    return null;
}

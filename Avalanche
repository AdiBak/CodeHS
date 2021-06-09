var NUM_ROCKS = 4;

var Y_OFFSET = 1;

var arr = [];

var avalanche;

var penguin = new Circle(25);
//penguin.setSize(30, 55);

function start(){
    for (var i = 0; i < NUM_ROCKS; i++){
        avalanche = new WebImage("https://codehs.com/static/img/library/objects/icicle.png");
        avalanche.setSize(30, 55);
        avalanche.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()/2));
        avalanche.dy = Randomizer.nextInt(4, 6);
        add(avalanche);
        arr.push(avalanche);
    }    
    setTimer(rockFall, 20);
    mouseMoveMethod(movePenguin);
}

function rockFall(){
    for (var i = 0; i < arr.length; i++){
        var part = arr[i];
        part.move(0, part.dy);
        
        if (part.getY() > getHeight()){
            part.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()/4));
        }
    }
    var collider = getCollidingObject();
    if (collider != null && collider != penguin){
        stopTimer(rockFall);
        lose();
    }
}

function movePenguin(e){
    if ((e.getX() < getWidth() - penguin.getWidth()/2) && (e.getX() > penguin.getWidth()/2)) {
		penguin.setPosition(e.getX(), getHeight() - Y_OFFSET - penguin.getHeight()/2);
	}
	add(penguin);
}

function getCollidingObject(){
    var topLeft = getElementAt(penguin.getX() - penguin.getRadius() - 1, penguin.getY() - penguin.getRadius() - 1);
    if (topLeft != null){
        return topLeft;
    }
    
    var topRight = getElementAt(penguin.getX() + penguin.getRadius() + 1, penguin.getY() - penguin.getRadius() - 1);
    if (topRight != null){
        return topRight;
    }
    
    var bottomLeft = getElementAt(penguin.getX() - penguin.getRadius() - 1, penguin.getY() + penguin.getRadius() + 1);
    if (bottomLeft != null){
        return bottomLeft;
    }
    
    var bottomRight = getElementAt(penguin.getX() + penguin.getRadius() + 1, penguin.getY() + penguin.getRadius() + 1);
    if (bottomRight != null){
        return bottomRight;
    }
    
    var top = getElementAt(penguin.getX(), penguin.getY() - penguin.getRadius() - 1);
    if (top != null){
        return top;
    }
    
    var bottom = getElementAt(penguin.getX(), penguin.getY() + penguin.getRadius() + 1);
    if (bottom != null){
        return bottom;
    }
    
    var left = getElementAt(penguin.getX() - penguin.getRadius() - 1, penguin.getY());
    if (left != null){
        return left;
    }
    
    var right = getElementAt(penguin.getX() + penguin.getRadius() + 1, penguin.getY());
    if (right != null){
        return right;
    }
        
    return null;
    
}

function lose(){
    var loseTxt = new Text("Game over.", "30pt Arial");
    loseTxt.setPosition(getWidth()/2 - loseTxt.getWidth()/2, getHeight()/2);
    loseTxt.setColor(Color.red);
    add(loseTxt);
}

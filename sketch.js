var labyrinth;
var y_pos, x_pos;
var increment;

function preload()
{
	labyrinth = loadImage('./assets/b.jpg');
	gameover = loadImage('/assets/gov.png');
}

function setup() {
	imageMode(CENTER);
	createCanvas(500,500);
	y_pos = 485;
	x_pos = width*2/5
	mic = new p5.AudioIn();
	mic.start();

}


function draw() {

	micLevel = mic.getLevel();
	micLevel = map(mic.getLevel(),0,1,1.9,10);

	image(labyrinth,width/2,height/2,506,506);
    fill('black');
	
	if (keyIsDown(LEFT_ARROW)){
       x_pos -= 1;
    }
    else if (keyIsDown(RIGHT_ARROW)){
       x_pos += 1;
    }
	if(micLevel>2){
		y_pos-= 1;
		
	} 
	fill('#29235c');
	noStroke();
	ellipse(x_pos, y_pos, 25, 25);
	
	
	console.log(x_pos);
	
	
	
	if (x_pos<163 && y_pos>126 || x_pos<410 && y_pos<272 && y_pos>126 || x_pos<70 || x_pos>465 || x_pos>220 && y_pos> 325 || x_pos>110 && y_pos<74){
		image(gameover,width/2,height/2,500,500);
	} 

	fill('#29235c');
	textAlign(CENTER);
	textFont('Lobster','cursive')
	textSize(30);
	text('follow the path\nby left and right arrows\nand by your voice',width/2,height/2-75);

	
}

var character,
map;

var enemies = [];


function setup() {
	createCanvas(600,600);
	
	character = new Character();
	map = new Map();
	
	map.init();
}

function draw() {
	background(0);
	
	for(let i = enemies.length - 1;i > 0;i--){
		
	}
	
	character.update();
	character.draw();
	
	map.show();
}

function keyPressed() {
	character.move(keyCode);
}
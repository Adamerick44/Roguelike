function Map() {
	this.blocks = [];	
}

Map.prototype.init = function() {
	
}

Map.prototype.show = function() {
	for(let i = 0;i < this.blocks.length;i++){
		noStroke();
		fill(200,50,50);
		rect(this.blocks[i].pos.x,this.blocks[i].pos.y,this.blocks[i].s,this.blocks[i].s);
	}
	
}

function Block(x,y) {
	this.pos = createVector(x,y);
	
	this.s = 20;
}
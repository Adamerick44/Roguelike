function Character() {
	this.pos = createVector(width / 2,height / 2);
	this.vel =  createVector(0,0);
	
	this.s = 12;
	
	this.bulletSpeed = 1;
	this.bulletDamage = 5;
	
	this.maxHealth = 20;
	this.health = 20;
	this.healingPerSecond = 0.2;
	
	this.speed = 1.5;
}

Character.prototype.kill = function() {
	
}

Character.prototype.update = function() {
	if(this.health <= 0){
		this.kill();
	}
	
	if(frameCount %  0 && this.health < this.maxHealth){
			this.health +=  this.healingPerSecond;
			console.log(this.health);
	}
	
	this.pos.add(this.vel);
	//translate(this.vel.x,this.vel.y);
}

Character.prototype.draw = function() {
	fill(255);
	noStroke();
	rect(this.pos.x,this.pos.y,this.s,this.s);
}

Character.prototype.move = function(e) {
	
	if(e == 37){
		this.vel.x = -this.speed;
		this.vel.y = 0;
	}
	
	if(e == 38){
		this.vel.x = 0;
		this.vel.y = -this.speed;
	}
	
	if(e == 39){
		this.vel.x = this.speed;
		this.vel.y = 0;
	}
	
	if(e == 40){
		this.vel.x = 0;
		this.vel.y = this.speed;
	}
	
	if(e == 32){
		this.vel.x = 0;
		this.vel.y = 0;
	}
	
}
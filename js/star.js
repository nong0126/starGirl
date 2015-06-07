//只做跟星星有关的事情
var star=function(){
	this.x;
	this.y;

	this.xSpd;
	this.ySpd;
}

star.prototype.init=function(){
	this.x=Math.random()*600+100;
	this.y=Math.random()*600+100;

	this.picNo=Math.floor(Math.random()*7);

	//如果加速度是正值，那么它的位移肯定都往右下角方向，所以随机速度得有正有负
	this.xSpd=Math.random()*3-1.5;
	this.ySpd=Math.random()*3-1.5;
}
star.prototype.update=function(){
	this.picNo+=1;
	this.picNo%=7;

	this.x+=this.xSpd*deltaTime*0.004;
	this.y+=this.ySpd*deltaTime*0.004;

	if(this.x<100||this.x>700||this.y<150||this.y>450){
		this.init();
	}
}

star.prototype.draw=function()
{
	ctx.save();
	//save和restore使得这2个API之间的任何的属性只作用于这一块内容
	//globalAlpha全局透明度
	ctx.globalAlpha=life;
	ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
	ctx.restore();
}

function drawStar()
{
	for(var i=0;i<num;i++){
		stars[i].update();
		stars[i].draw();
	}
}

function aliveUpdate(){
	
	if(switchy){
		//show star
		life+=0.03*deltaTime*0.05;
		life>1?life=1:'';
	}
	else{
		//hide star
		life-=0.03*deltaTime*0.05;
		life<0?life=0:'';
	}
	console.log(life)
}
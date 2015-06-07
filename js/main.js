var can,ctx;
var w,h;
var switchy=false;
var life=0;
var deltaTime,nowTime,oldTime;

var girlPic=new Image();
var starPic=new Image();

var num=60;
var stars=[];

function init()
{
	can=document.getElementById('canvas');
	ctx=can.getContext('2d');

	w=can.width;
	h=can.height;

	girlPic.src='img/girl.jpg';
	starPic.src='img/star.png';

	for(var i=0;i<num;i++){
		stars.push(new star());
		stars[i].init();
	}

	drawBackground();
	girlPic.onload=function(){
		//drawGirl();
	}

	document.addEventListener('mousemove',move,false)
	oldTime=Date.now();

	setInterval(gameloop,200);
}


document.body.onload=init;

//每隔一段时间刷新canvas上的内容，这样就有动画的效果
function gameloop()
{
	nowTime=Date.now();
	deltaTime=nowTime-oldTime;
	oldTime=nowTime;
	//window.requestAnimationFrame(gameloop);//这个函数就一直循环了
	drawBackground();
	drawGirl();
	drawStar();
	aliveUpdate();
}



function drawBackground()
{
	ctx.fillStyle='#393550';
	ctx.fillRect(0,0,w,h);
}

//requestAnimFrame(function(){})
//效率起见，依据你的设备，确定每次回调的时间

function drawGirl()
{
	//drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	//x正方向向右，y正方向向下
	ctx.drawImage(girlPic,100,150,600,300)
}

function move(e)
{
	//if(e.offsetX||e.layerX)
	var px=e.offsetX||e.layerX;
	var py=e.offsetY||e.layerY;
	if(px>100&&px<700&&py>150&&py<450){
		switchy=true;
	}else{
		switchy=false;
	}
	//console.log(switchy);
}



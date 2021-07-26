//Create variables here
var food;
function preload()
{
	//load images here
  dogHappy=loadImage("images/dogImg1.png")
  dogSad=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database()
  database.ref('food').on("value",readPosition)

  milk1=new Food()
  milk1.getfeedTime()
  dog=createSprite(700,400,50,50)
  dog.addImage(dogSad)
  dog.scale=0.2
}


function draw() {  
background("blue")
  drawSprites();
  //add styles here
textSize(20)
//text("food remaining:" +food,300,200)
//text("press up arrow key, to feed the dog",100,50)

text("FEDTIME:"+ milk1.feedtime,200,50)
milk1.buttons()
milk1.milkImg()
if(food===0){
  dog.addImage(dogHappy)
  dog.scale=0.2
}

}
function readPosition(data){
  food=data.val()

}

function writeStock(data){
database.ref('/').update({
  food:data,
  feedtime:hour ()
})
}

var player1=prompt("Player One: Enter your name, you will be blue");
var palyer1color="rgb(86, 151, 255)";

var player2=prompt("Player Two: Enter your name, you will be red");
var palyer2color="rgb(255, 45, 73)";

var game_on = true;
var table = $('table tr');

var hist = new Array(12);
for (var i = 0; i < 12; i++) {
    hist[i] = new Array(14);
    for(var j=0;j<14;j++)
    	hist[i][j]=0;
}

var height = new Array(14);
for(var i=0;i<14;i++)
	height[i]=0;

var ide=1;

var playfunc = player1;
var playcolor=palyer1color;

var h1=$('h1');
var h2=$('h2');

var bg=$('body');

function changeColor(rowIndex,colIndex,color){
	console.log(rowIndex);
	console.log(colIndex);
	var time=10;
	for(var i=1;i<rowIndex;i++)
	 {
		let btn = table.eq(i).find('td').eq(colIndex).find('button');
		setTimeout(function () {
			btn.css('background-color',color);
		}, time);
		time+=300;
		setTimeout(function () {
			btn.css('background-color',"rgb(128, 128, 128)");
		}, time);
		time+=20;
			
	}
	setTimeout(function () {
    	table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
	}, time);
}

function changeborder(rowIndex,colIndex){
	table.eq(rowIndex).find('td').eq(colIndex).find('button').css('border','10px solid black');
}

function makealert(){
	alert(playfunc+": you lost!!");
}

function checkHorizontal()
{
	for(var i=0;i<12;i++)
	{
		for(var j=0;j<11;j++)
		{
			if(hist[i][j]==hist[i][j+1] && hist[i][j]==hist[i][j+2] && hist[i][j]==hist[i][j+3] && hist[i][j]!=0 && hist[i][j]!=undefined)
			{
				changeborder(12-i,j);
				changeborder(12-i,j+1);
				changeborder(12-i,j+2);
				changeborder(12-i,j+3);
				h1.html(playfunc+": you lost");
				h2.html("Refresh to play again");
			}
		}
	}
}


function checkVertical()
{
	for(var i=0;i<9;i++)
	{
		for(var j=0;j<14;j++)
		{
			if(hist[i][j]==hist[i+1][j] && hist[i][j]==hist[i+2][j] && hist[i][j]==hist[i+3][j]  && hist[i][j]!=0 && hist[i][j]!=undefined)
			{
				changeborder(12-i,j);
				changeborder(11-i,j);
				changeborder(10-i,j);
				changeborder(9-i,j);
				h1.html(playfunc+": you lost");
				h2.html("Refresh to play again");
			}
		}
	}
}

function checkWinner(){
	checkHorizontal();
	checkVertical();
}

function myid(num){
	if(height[num]<12)
	{
		changeColor(12-height[num],num,playcolor);
		hist[height[num]][num]=ide;
		height[num]+=1;
		if(ide==1)
			ide=2;
		else 
			ide=1;
	}
	else
	{
		alert(playfunc+": Please play your turn again");
	}
	if (ide==1)
	{
		playfunc=player1;
		playcolor=palyer1color;
	}
	else 
	{
		playfunc=player2;
		playcolor=palyer2color;
	}
	checkWinner();
}

function getRandomColor() {
  var letters = '789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 9)];
  }
  return color;
}

function setRandomColor() {
  bg.css("background-color", getRandomColor());
}

setInterval(setRandomColor,1000);
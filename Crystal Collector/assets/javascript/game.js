$(document).ready(function(){

//Variables================================================================
var goal 
var gem1
var gem2
var gem3
var gem4
var score
var wins=0;
var losses=0;

//Set-up gems===============================================================
function setUp(){
	goal = Math.floor(Math.random()*120+19);
	gem1 = Math.floor(Math.random()*12+1);
	gem2 = Math.floor(Math.random()*12+1);
	gem3 = Math.floor(Math.random()*12+1);
	gem4 = Math.floor(Math.random()*12+1);
	score=0;
	$('#goal').html(goal)
	console.log("Gem1: "+gem1);
	console.log("Gem2: "+gem2);
	console.log("Gem3: "+gem3);
	console.log("Gem4: "+gem4);
};
//Sounds========================================
var click=document.createElement("audio");
click.src="assets/Sounds/ComputerBoop.wav";

var winner=document.createElement("audio");
winner.src="assets/Sounds/robotWinner.wav"

var loser=document.createElement("audio");
loser.src="assets/Sounds/robotLoser.wav"

//Check for outcome of the click=============================================
	function outcome(){
		if(score===goal){
			$('.outcome').html("Winner is you");
			winner.play();
			wins++;
			$('#score').empty();
			setUp();
		}
		else if(score>goal){
			$('.outcome').html("loser is you");
			loser.play();
			losses++;
			$('#score').empty();
			setUp();
		}

		$('#wins').html("Wins: "+wins);
		$('#losses').html("Losses: "+losses)
	}

//adding bounces============================================================
$.fn.extend({
	animateCss: function (animationName){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
})

//GamePlay===================================================================
function playGame(){
		$('#gem1').on("click", function(){
			click.play();
			$('#gem1').animateCss('tada');
			score+=gem1;
			$('#score').html(score);
			outcome();
		});

		$('#gem2').on("click", function(){
			click.play();
			$('#gem2').animateCss('tada');
			score+=gem2;
			$('#score').html(score);
			outcome();
			
		});

		$('#gem3').on("click", function(){
			click.play();
			$('#gem3').animateCss('tada');
			score+=gem3;
			$('#score').html(score);
			outcome();
			console.log("score: " +score);
		});

		$('#gem4').on("click", function(){
			click.play();
			$('#gem4').animateCss('tada');
			score+=gem4;
			$('#score').html(score);
			outcome();
			console.log("score: " +score);
		});

}; //playgame

//Set-up and play the game=================================================
setUp();
playGame();
console.log("Goal:" +goal);
	


});


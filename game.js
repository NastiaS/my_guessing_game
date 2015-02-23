
var comp_choice = Math.floor((Math.random() * 100) + 1);

$("#ready").on("click", function(){
  $("#ready").hide();
    alert("Alright! I made my selection! Guess it!");
})
$("#hint").on("click", function(){
  alert("Okay..The answer is "+comp_choice);
})

$("#another").on("click", function(event){
var current = $("#id").val()
validate(parseInt(current));
$("#id").val("");

check(comp_choice,current);
$("#reset_the_game").on("click",function(){
    location.reload();
})
});



function validate(current){
	if(typeof current==='number' && current<=100 && current>=0){
		}
	else{
        return alert("No, I don't play like this. Please pick a valid number");}
}

var guess_count=5;
function check(comp_choice,current){
    if (current<=100 && current>=0){
	
    if(current<=comp_choice+10 && current>comp_choice || current>=comp_choice-10 && current<comp_choice){
        $("#temp_indicator").html("You are hot!! You are almost there!");
          if(current<=comp_choice+10 && current>comp_choice){
          $("#advice").html("Guess lower!");}
          else{$("#advice").html("Guess higher!");}
        $("body").css("background","url(img/summer.jpg)");$("body").css("background-size","cover");
        $("#temp_indicator").css("color","white"); $("#guess_count").css("color","white"); $("#advice").css("color","white");
       
    }
    else if(current>comp_choice+10 && current<=comp_choice+20 || current<comp_choice-10 && current>=comp_choice-20){
        $("#temp_indicator").html("Feels almost like a spring!!");
          if(current>comp_choice+10 && current<=comp_choice+20){
          $("#advice").html("Guess lower!");}
          else{$("#advice").html("Guess higher!");}
        $("body").css("background","url(img/warm.jpg)");$("body").css("background-size","cover");
        $("#temp_indicator").css("color","#330033"); $("#guess_count").css("color","#330033"); $("#advice").css("color","#330033");
    }
    
    else if(current>comp_choice+20 && current<=comp_choice+30 || current<comp_choice-20 && current>=comp_choice-30){
        $("#temp_indicator").html("It is quite chilly!!");
          if(current>comp_choice+20 && current<=comp_choice+30){
          $("#advice").html("Guess lower!");}
          else{$("#advice").html("Guess higher!");}
        $("body").css("background","url(img/chilly.jpg)");$("body").css("background-size","cover");
        $("#temp_indicator").css("color","black"); $("#guess_count").css("color","black"); $("#advice").css("color","black");
    }
       
    else if(current>comp_choice+30 || current<comp_choice-30){
        $("#temp_indicator").html("Brrr..Freezing..I feel like I am in Siberia..");
          if(current>comp_choice+30){
          $("#advice").html("Guess lower!");}
          else{$("#advice").html("Guess higher!");}
        $("body").css("background","url(img/winter.jpg)");$("body").css("background-size","cover");
        $("#temp_indicator").css("color","black"); $("#guess_count").css("color","black"); $("#advice").css("color","black");
    }

    else if (current==comp_choice){
        location.reload();
    return alert("Great job!! Congrats! You are very good! But it is not a reason to become a gambler :-)");    
}
//console.log("The computer choice is "+comp_choice);//ubrat

//console.log("The user's choice is: " + current);//ubrat
guess_count--;
 $("#guess_count").html(guess_count + " Guesses remaining");
//console.log("The counter now is: " + guess_count);//ubrat
if(guess_count === 0){
	alert("The game is over. Try your luck again!");
  location.reload();
}
}
}





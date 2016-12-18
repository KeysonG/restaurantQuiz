
var score=0;
window.onload = function(){

	function getName(){
		document.getElementById("question").innerHTML = " Welcome to the find your restaurant quiz! <br> What is your name?";
		var input = document.createElement("input");
		input.type = "text";
		input.id="nameinput";
		document.getElementById("answers").appendChild(input);

		document.getElementById("send").onclick = function(){
			this.style.visibility = "hidden";
			
			generateQuestion(1,0);
		};
	}
	getName();
};


function generateQuestion(n){
	
	document.getElementById("answers").innerHTML="";

	var answerarr=[];
	for (var i=0; i<4; i++){
		answerarr[i]=document.createElement("div")
		document.getElementById("answers").appendChild(answerarr[i]);
		answerarr[i].className="answer";

	}

	// five different kinds of inputs
	var inputtext = document.createElement("input");
	inputtext.type="text";

	var inputradio = document.createElement("input");
	inputradio.type="radio";

	if(n===1){
		document.getElementById("question").innerText = "What is your favorite season?";
		
		
		answerarr[0].innerText="Summer";
		answerarr[1].innerText="Autumn";
		answerarr[2].innerText="Winter";
		answerarr[3].innerText="Spring";

	}

	if(n===2){
		document.getElementById("question").innerText = "What religion?";

			// console.log(score);
			answerarr[0].innerText="Judaism";
			answerarr[1].innerText="Islam";
			answerarr[2].innerText="Christianity";
			answerarr[3].innerText="Atheist";

		}
	if(n===3){
			document.getElementById("question").innerText = "How impatient are you?";

			// console.log(score);
			answerarr[0].innerText="The two most powerful warriors are patience and time.";
			answerarr[1].innerText="When is this quiz done";
			answerarr[2].innerText="Aint nobody got time for that!";
			answerarr[3].innerText="Chilll";

		}
	if(n===4){
			document.getElementById("question").innerText = "How often do you cook?";

			// console.log(score);
			answerarr[0].innerText="Never-ever";
			answerarr[1].innerText="1-3 times a week";
			answerarr[2].innerText="4-5 times a week";
			answerarr[3].innerText="6-7 times a week (cray)";

		}
	if(n===5){
			document.getElementById("question").innerText = "Mood?";

			// console.log(score);
			answerarr[0].innerText="Life is great!";
			answerarr[1].innerText="Fok offff";
			answerarr[2].innerText="This is a cute quiz";
			answerarr[3].innerText="Can it be friday already?";

		}
	if(n===6){

		if (score>15){
			// link to https://www.google.co.il/maps/search/Italian+restaurants/@32.0602217,34.768555,15z?hl=en
			document.getElementById("question").innerText = "You need some italian";
			document.getElementById("answers").innerHTML="";
			answers.className = "italian";
		}
		else if (score>10){
			// link to https://www.google.co.il/maps/search/french/@32.0657856,34.7688554,15z?hl=en
			document.getElementById("question").innerText = "You need some french";
			document.getElementById("answers").innerHTML="";
			answers.className = "italian";
		}
			else if (score>5){
			// link to https://www.google.co.il/maps/search/french/@32.0657856,34.7688554,15z?hl=en
			document.getElementById("question").innerText = "You need some sushi";
			document.getElementById("answers").innerHTML="";
			answers.className = "sushi";
		}
		else if (score>0){
			// link to https://www.google.co.il/maps/search/french/@32.0657856,34.7688554,15z?hl=en
			document.getElementById("question").innerText = "You need some israeli";
			document.getElementById("answers").innerHTML="";
			answers.className = "israeli";
		}

	}
	answerarr[0].setAttribute('data-key', "1");
	answerarr[1].setAttribute('data-key', "2");
	answerarr[2].setAttribute('data-key', "3");
	answerarr[3].setAttribute('data-key', "4");
	
	var answerclass = document.getElementsByClassName("answer");
	for (var i = 0; i < answerclass.length; i++) {
			answerclass[i].onclick = function(){
				score = score + parseInt(this.getAttribute('data-key'));
				console.log(score);
				generateQuestion(n+1);

		}

	}
}
// } end of generateQuestion






// Timer starts at 60 seconds
var countTimer = 60;

// Set count of right, wrong, and unanswered questions to zero
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

// I couldn't figure out how to reset the radio buttons for a new game

$(document).ready(function(){

	// Intialize the game with hidden divs
	$("#game_container").hide();
	$("#end_container").hide();

	// Set scroll position
	window.scrollTo(0, 500);

	$("#start_button").on("click", function(){

		// Hide the start div from the user and show the game div
		$("#start_container").hide();
		$("#game_container").show();

		startCountdown();
		return;

	});

	// displays the time to the user
	function countdown(){
		countTimer--;
    	$('#timer_number').html(countTimer + " Seconds");

			// User finishes before time is up and clicks done
			$("#done_button").on("click", function(){

			// Stop the countdown and run the timeUp function
			countTimer = 0;
			return;

			});

			// Finish the game after the timer reaches 0
			if(countTimer == -1){
				timeUp();

				// Hide the game div from the user
				$("#game_container").hide();

			}

	}

	// Show the countdown
	function startCountdown(){

		setInterval(countdown, 1000);

	}

	// Function timer is up
	function timeUp(){

		// Checked values
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

		// Right/wrong/unanswered counts
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Vibranium"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Storm"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Stan Lee and Jack Kirby"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "1966"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "guard"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "herb"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Shuri"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "T'Chaka"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "Wakanda"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "Coogler"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		// Display the score results
		$("#correct_answers").html(correctCount);
		$("#wrong_answers").html(wrongCount);
		$("#unanswered").html(unansweredCount);

		// Show the completed score div
		$("#end_container").show();

		// Remove previous checked radio buttons
		$("input:radio").removeAttr("checked");
		window.scrollTo(0, 550);


		$("#startover_button").on("click", function(){
		location.reload();
	});

	}

});

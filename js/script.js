$(document).ready(function(){

	navigator.geolocation.getCurrentPosition(function(position) {

	let lat = position.coords.latitude;
	let long = position.coords.longitude;

	let fccEndpoint = "https://fcc-weather-api.glitch.me/";

	//get users time for use with icons//
	let now = new Date();
	let hours = now.getHours();
	// console.log(hours);
	if (hours => 6 && hours <= 18){
		var time = "-day-";
	}
	else {
		var time = "-night-";
	}


	$.getJSON(fccEndpoint + "api/current?lat=" + lat + "&lon=" + long, function(data){
		console.log(data); //all//

		let tempC = Math.round(data.main.temp);
		let tempF = Math.round(data.main.temp * 1.8 + 32);
		let iconCode = data.weather[0].id;
		let cityName = data.name;
		//hot//
		if (tempF > 70){
			$(".main").css("background", "#ffdb58");
			$("body").css("background", "#f4c76b");
			$("#icon").css("color", "#f97d39");
			$("#city").css("color", "#f97d39");
		}
		//cold//
		else if (tempF < 40){
			$(".main").css("background", "#8fd4e6");
			$("body").css("background", "#4282b9");
			$("#icon").css("color", "#05a2c7");
			$("#city").css("color", "#05a2c7");
		}
		else {
			$(".main").css("background", "#99d5cf");
			$("body").css("background", "#66c0b7");
			$("#icon").css("color", "#009688");
			$("#city").css("color", "#009688");
		}

		$('#city').html(cityName);
		$('#icon').addClass("wi wi-owm" + time + iconCode);
		$('#temp').html(tempF + "°F");
		$('#condition').html(data.weather[0].main);

		$("#f").click(function(){
			$('#temp').html(tempF + "°F");
			$("#f").css("background", "grey");
			$('#c').css("background", "");
		});
		$("#c").click(function(){
			$('#temp').html(tempC + "°C");
			$("#c").css("background", "grey");
			$('#f').css("background", "");
		});

});

});

});












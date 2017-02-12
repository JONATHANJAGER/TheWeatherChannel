$(function(){
	

	$(".connect").click(function() {
		$(".overlay").fadeIn(1000);
	})

	$('form').submit(function(e) {
		e.preventDefault();
		var city = $(".finder").val(); 
		getWeather(city);

	})


	function getWeather(userCity){
		var link = "http://api.openweathermap.org/data/2.5/weather?q="+ userCity +" &units=imperial&APPID=7efe5b5e8f4df64ab68df3ff66d187ae";
		$.getJSON(link, function(json){
			var data = JSON.stringify(json);
			data = JSON.parse(data);
			//console.log(data);
			var unit = "&deg;";
			$("#temperature").html(Math.round(data.main.temp) + unit);
			$("#humidity").html(data.main.humidity + "% humidity");
			$("#city").html(data.name + ", " + data.sys.country);
			$("#description").text(data.weather[0].description);	
		})
	};

})
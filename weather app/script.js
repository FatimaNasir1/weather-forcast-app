const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a97dbf17d8msh3035596b7bc1275p13af95jsnbc49e5b5cc6d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		//cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML= response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		console.log(response)
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click" ,(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Lahore")

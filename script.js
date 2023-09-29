const cityname=document.getElementById('city-name');
const submit=document.getElementById('submit');
const city=document.getElementById('city');
const weathercondition=document.getElementById('weather-condition');
const weathericon = document.getElementById('weather');
const temperature = document.getElementById('temperature');
const minmax = document.getElementById('minmax');
const html = document.getElementById('inner-container')


submit.addEventListener('click',()=>{
	console.log(cityname.value);
	const featchweather = async function(){
		const response = await fetch('https://goweather.herokuapp.com/weather/Curitiba')
		const responsejson= await response.json()
		return responsejson
	}
	const name=cityname.value
		const weatherapi = featchweather()
		weatherapi.then((data) => (
			
		 html.innerHTML= 
			`
			<div class="city-name" id="city" >${name}</div>
			<div id="weather-condition" class="weather-condition">${data.description}</div>
			<div  id="weather" class="weather-icon"><img src="${data.description}.png" alt="Weather icon"></div>
			<div class="temperature-container">
			<div id="temperature" class="temperature">
			 ${data.temperature}
			 </div>
			 <div id="minmax" class="minmax">
			 <div class="min">Min:${data.forecast[1].temperature}</div>
			 <div class="max">Max:${data.forecast[0].temperature}</div>
			 </div>
			 </div>
			 
			 `
			 
			 ))
			 cityname.value='';
			 document.body.style.backgroundImage=`url('${data.description}.jpg')`;
			 
			})
		
		
		
		

	

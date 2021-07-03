// function calTemp(){
//     let t =parseInt(document.getElementById("high").value);
//     let s =parseInt(document.getElementById("speed").value);
//     if(t > 50){
//         document.getElementById("output").innerHTML = "n/a"
//         return;
//     }
//     if(s < 3){
//         document.getElementById("output").innerHTML = "n/a"
//         return;
//     }
//     if(t  === undefined || s === undefined){
//         document.getElementById("output").innerHTML = "n/a"
//         return;
//     }

//     let result = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
//     document.getElementById("output").innerHTML = result.toFixed(2) + " °F"
// }



const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=248efaaf10b4ac03fa08a821fe1b4cb4";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=248efaaf10b4ac03fa08a821fe1b4cb4";


async function fetchData(url) {
    const response = await fetch(url)
        .then(response => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.log(error))
    return response;
}

fetchData(forecastUrl).then((data) => {
    const jsObject = data;
    document.getElementById('placeholder1').src = `http://openweathermap.org/img/wn/${jsObject.list[6].weather[0].icon}@2x.png`;
    document.getElementById('placeholder2').src = `http://openweathermap.org/img/wn/${jsObject.list[14].weather[0].icon}@2x.png`;
    document.getElementById('placeholder3').src = `http://openweathermap.org/img/wn/${jsObject.list[22].weather[0].icon}@2x.png`;
    document.getElementById('placeholder4').src = `http://openweathermap.org/img/wn/${jsObject.list[30].weather[0].icon}@2x.png`;
    document.getElementById('placeholder5').src = `http://openweathermap.org/img/wn/${jsObject.list[38].weather[0].icon}@2x.png`;
    document.getElementById('temp1').innerHTML = jsObject.list[6].main.temp; 
    document.getElementById('temp2').innerHTML = jsObject.list[14].main.temp;
    document.getElementById('temp3').innerHTML = jsObject.list[22].main.temp;
    document.getElementById('temp4').innerHTML = jsObject.list[30].main.temp;
    document.getElementById('temp5').innerHTML = jsObject.list[38].main.temp;
})

fetchData(weatherUrl).then((data) => {
    const jsObject = data;
    console.log(jsObject)
    //Get element by ID
    // insert html with .innerhtml = 
    // display data using something similar to ${data. ..............
    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('high').innerHTML = data.main.temp_max;
    document.getElementById('humid').innerHTML = data.main.humidity;
    document.getElementById('speed').innerHTML = data.wind.speed;
});
let data = {
    "towns":[
      {
        name: "Soda Springs",
        photo: "sodasprings.jpg",
        motto: "Historic Oregon Trail Oasis. The Soda is on Us.",
        yearFounded: 1858,
        currentPopulation: 2985,
        averageRainfall: 15.75,
        events: [
          "February 29: Geyser Song Day",
          "May 1-6: Days of May Celebration",
          "October 15-16: Octoberfest"
        ]
      }
    ]
}
console.log(data.towns);
displayData(data)
function displayData(data){
  const datacities = document.getElementById('events');
  data.towns.forEach((array) =>{
     datacities.innerHTML +=`
     <div class = events>
     <p>${array.events[0]}</p>
     <br>
     <p>${array.events[1]}</p>
     <br>
     <p>${array.events[2]}</p>`
  }
  )}
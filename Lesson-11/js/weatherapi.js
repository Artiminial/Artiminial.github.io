const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=248efaaf10b4ac03fa08a821fe1b4cb4";
fetch(encodeURI(apiURL))
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject.list[0].main.temp);
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
    })
    .catch((error) => {
        console.log(error)
    })
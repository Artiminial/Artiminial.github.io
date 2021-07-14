let url = "https://api.spoonacular.com/recipes/99999/information?apiKey=7a3793a6d2a74c46a5ff81a2da0cffd9&includeNutrition=true."
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getData = (urlRequest) => {
    let encodedURI = encodeURI(url + urlRequest);
    fetchData(encodedURI)
    .then((data => {
        displayData(data);
    }))
    .catch((error) => {
        console.log(error)
    })
};

async function fetchData(url){
    const response = await fetch(url).then((response) =>{
        return response.json();
    })

    .catch((error) => console.log(error));
    return response;
}

function urlResult(){
    let rand = getRandomInt(100,000, 120,000);
    getData(`https://api.spoonacular.com/recipes/${rand}/information?apiKey=7a3793a6d2a74c46a5ff81a2da0cffd9&includeNutrition=true.`) 
}
function displayData(data){
    console.log(data);
}

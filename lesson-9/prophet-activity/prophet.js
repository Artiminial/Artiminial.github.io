const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
  });

  async function fetchData(url) {
    // console.log(url)
    const response = await fetch(url)
       .then(response => response.json())
       .catch(error => console.log(error))
  return response;
  }

  const getData = (url) => {
    let encodedURI = encodeURI(url);
    fetchData(encodedURI)
        .then( data => {
            displayData(data);
    }).catch(error => {
            console.log(error)})
};


    const displayData = (data) => {
        const prophets = document.getElementById('prophets');
        console.log(data)
        data.prophets.forEach((element) => {
        prophets.innerHTML += 
        `<div class = "cards">
        <h1>${element.name}${element.lastname} - ${element.order}</h1>
        <p>Founded in ${element.birthdate}</p>
        <p>${element.birthplace}</p>
        <img class="image" src="${element.imageurl}" alt="Photo of ${element.name}">
        </div>
    `
      })
    };
    getData(requestURL);